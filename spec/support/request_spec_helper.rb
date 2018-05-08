# frozen_string_literal: true

module RequestSpecHelper
  def login_headers(user)
    { Authorization: ActionController::HttpAuthentication::Token\
      .encode_credentials(user.access_token) }
  end
end
