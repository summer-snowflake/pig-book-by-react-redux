# frozen_string_literal: true

require 'rails_helper'

describe 'POST /api/session?email=&password=' do
  let(:status) { :registered }
  let!(:user) { create(:user, status: status) }
  let!(:profile) { create(:profile, user: user) }

  context 'メールアドレスとパスワードが正しい場合' do
    let(:params) { { email: profile.email, password: profile.password } }

    context 'statusが:inactiveの場合' do
      let(:status) { :inactive }

      it '401とエラーメッセージが返ってくること' do
        post '/api/session', params: params

        expect(response.status).to eq 401

        json = {
          message: 'Authenticate Error'
        }
        expect(response.body).to be_json_as(json)
      end
    end

    context 'statusが:registeredの場合' do
      let(:status) { :registered }

      it '201とaccess_tokenが返ってくること' do
        post '/api/session', params: params

        expect(response.status).to eq 201

        json = {
          access_token: user.access_token
        }
        expect(response.body).to be_json_as(json)
      end
    end
  end

  context 'メールアドレスが見つからない場合' do
    let(:params) { { email: 'dummy' + profile.email } }

    it '401とエラーメッセージが返ってくること' do
      post '/api/session', params: params

      expect(response.status).to eq 401

      json = {
        message: 'Authenticate Error'
      }
      expect(response.body).to be_json_as(json)
    end
  end

  context 'パスワードが不正な場合' do
    let(:params) { { email: profile.email, password: 'invalid' } }

    it '401とエラーメッセージが返ってくること' do
      post '/api/session', params: params

      expect(response.status).to eq 401

      json = {
        message: 'Authenticate Error'
      }
      expect(response.body).to be_json_as(json)
    end
  end

  context 'メールアドレスが空の場合' do
    let(:params) { { email: '', password: profile.password } }

    it '422とエラーメッセージが返ってくること' do
      post '/api/session', params: params

      expect(response.status).to eq 401

      json = {
        message: 'Authenticate Error'
      }
      expect(response.body).to be_json_as(json)
    end
  end
end
