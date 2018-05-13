# frozen_string_literal: true

require 'rails_helper'

feature 'HOME', js: true do
  scenario 'アクセスしてHOME画面が表示されること' do
    visit root_path
    within '.main-content-component' do
      expect(page).to have_content 'home'
    end
  end

  scenario 'メニューのHOMEをクリックしてHOME画面が表示されること' do
    visit '/categories'
    click_on 'HOME'
    within '.main-content-component' do
      expect(page).to have_content 'home'
    end
  end
end
