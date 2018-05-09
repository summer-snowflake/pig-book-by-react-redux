# frozen_string_literal: true

require 'rails_helper'

describe 'GET /auth/twitter' do
  let!(:oauth_user) { create_omniauth_mock(:twitter) }

  it 'Twitterでログインできること' do
    visit '/auth/twitter'

    expect(oauth_user).not_to be_nil
    expect(oauth_user.provider).to eq 'twitter'
    expect(oauth_user.uid).to eq '1234'
    expect(oauth_user.info.nickname).to eq 'ニックネーム'

    user = Auth.find_by(provider: :twitter, uid: oauth_user.uid).try(:user)
    expect(user).not_to be_nil
    expect(user.auth).not_to be_nil
    expect(user.auth.provider).to eq 'twitter'
    expect(user.auth.uid).to eq '1234'
    expect(user.auth.nickname).to eq 'ニックネーム'
  end
end
