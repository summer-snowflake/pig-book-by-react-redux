# frozen_string_literal: true

module RequestSpecHelper
  def login_headers(user)
    { Authorization: ActionController::HttpAuthentication::Token\
      .encode_credentials(user.access_token) }
  end

  def create_omniauth_mock(service)
    OmniAuth.config.test_mode = true

    OmniAuth.config.mock_auth[service] = OmniAuth::AuthHash.new(
      provider: service,
      uid: '1234'
    )

    OmniAuth.config.add_mock(
      service, info: { nickname: 'ニックネーム' }
    )

    OmniAuth.config.mock_auth[service]
  end
end
