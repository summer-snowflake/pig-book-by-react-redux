# frozen_string_literal: true

require 'rails_helper'

feature 'リスト', js: true do
  scenario 'アクセスしてリスト画面が表示されること' do
    visit '/list'
    within '.main-content-component' do
      expect(page).to have_content 'list'
    end
  end

  scenario 'メニューのリストをクリックしてリスト画面が表示されること' do
    pending 'email認証のログイン機能ができるまで'
    visit root_path
    click_on 'リスト'
    within '.main-content-component' do
      expect(page).to have_content 'list'
    end
  end
end
