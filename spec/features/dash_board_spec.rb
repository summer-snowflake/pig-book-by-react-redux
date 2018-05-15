# frozen_string_literal: true

require 'rails_helper'

feature 'ダッシュボード', js: true do
  scenario 'アクセスしてダッシュボード画面が表示されること' do
    visit '/dashboard'
    within '.main-content-component' do
      expect(page).to have_content 'dash board'
    end
  end

  scenario 'メニューのダッシュボードをクリックしてダッシュボード画面が表示されること' do
    pending 'email認証のログイン機能ができるまで'
    visit root_path
    click_on 'ダッシュボード'
    within '.main-content-component' do
      expect(page).to have_content 'dash board'
    end
  end
end
