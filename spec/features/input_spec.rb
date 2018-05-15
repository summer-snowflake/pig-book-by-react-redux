# frozen_string_literal: true

require 'rails_helper'

feature '入力する', js: true do
  scenario 'アクセスして入力する画面が表示されること' do
    visit '/input'
    within '.main-content-component' do
      expect(page).to have_content 'input'
    end
  end

  scenario 'メニューの入力するをクリックして入力する画面が表示されること' do
    pending 'email認証のログイン機能ができるまで'
    visit root_path
    click_on '入力する'
    within '.main-content-component' do
      expect(page).to have_content 'input'
    end
  end
end
