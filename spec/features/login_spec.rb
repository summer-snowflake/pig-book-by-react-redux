# frozen_string_literal: true

require 'rails_helper'

feature 'ログイン', js: true do
  scenario 'アクセスしてログイン画面が表示されること' do
    visit '/login'
    within '.main-content-component' do
      expect(page).to have_content 'Twitterでログイン'
    end
  end

  scenario 'メニューのログインをクリックしてログイン画面が表示されること' do
    visit root_path
    click_on 'ログイン'
    within '.main-content-component' do
      expect(page).to have_content 'Twitterでログイン'
    end
  end
end
