# frozen_string_literal: true

class SessionsController < ApplicationController
  def callback
    auth = request.env['omniauth.auth']
    User.find_or_create_for_oauth(auth, params[:oauth_token])
    origin = "#{request.protocol}#{request.host_with_port}"
    redirect_to "#{origin}/sign_in?oauth_token=#{params[:oauth_token]}"
  end
end
