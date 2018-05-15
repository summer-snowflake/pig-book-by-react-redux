# frozen_string_literal: true

require 'rails_helper'

feature 'カテゴリ', js: true do
  scenario 'アクセスしてカテゴリ画面が表示されること' do
    visit '/categories'
    within '.main-content-component' do
      expect(page).to have_content 'カテゴリの管理'
    end
  end

  scenario 'メニューのカテゴリをクリックしてカテゴリ画面が表示されること' do
    pending 'email認証のログイン機能ができるまで'
    visit root_path
    click_on 'カテゴリ'
    within '.main-content-component' do
      expect(page).to have_content 'カテゴリの管理'
    end
  end

  context 'カテゴリデータがあった場合' do
    scenario 'カテゴリ一覧が表示されること' do
      visit '/categories'
      within '.main-content-component' do
      end
    end
  end
end
