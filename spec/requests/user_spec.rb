# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/user' do
  let!(:user) { create(:user) }
  let!(:auth) { create(:auth, user: user) }

  context 'ログインしていなかった場合' do
    it '401とデータが返ってくること' do
      get '/api/user'

      expect(response.status).to eq 401
      json = {
        message: 'Authenticate Error'
      }
      expect(response.body).to be_json_as(json)
    end
  end

  context 'ログインしていた場合' do
    it '200とデータが返ってくること' do
      get '/api/user', headers: login_headers(user)

      expect(response.status).to eq 200
      json = {
        auth: {
          uid: auth.uid,
          name: auth.name,
          nickname: auth.nickname
        }
      }
      expect(response.body).to be_json_as(json)
    end
  end
end
