# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def authenticate
    return current_user.update(last_sign_in_at: Time.zone.now) if current_user
    render json: { message: 'Authenticate Error' }, status: 401
  end

  def current_user
    @current_user ||= authenticate_with_http_token do |token, _options|
      User.find_by(access_token: token)
    end
  end
end
