# frozen_string_literal: true

require 'rails_helper'

describe 'GET /api/categories' do
  let!(:user) { create(:user) }
  let!(:auth) { create(:auth, user: user) }
  let!(:category1) { create(:category, user: user, balance_of_payments: false) }
  let!(:category2) { create(:category, user: user, balance_of_payments: true) }

  context 'ログインしていなかった場合' do
    it '401とデータが返ってくること' do
      get '/api/categories'

      expect(response.status).to eq 401
      json = {
        message: 'Authenticate Error'
      }
      expect(response.body).to be_json_as(json)
    end
  end

  context 'ログインしていた場合' do
    it '200とデータが返ってくること' do
      get '/api/categories', headers: login_headers(user)

      expect(response.status).to eq 200
      json = [
        {
          name: category1.name,
          balance_of_payments: false
        },
        {
          name: category2.name,
          balance_of_payments: true
        }
      ]
      expect(response.body).to be_json_as(json)
    end
  end
end
