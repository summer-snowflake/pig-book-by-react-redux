# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    certifier = Profile::Certifier.new(params: login_params)
    if certifier.authenticate
      render json: { access_token: certifier.user.access_token }, status: 201
    else
      render json: { message: 'Authenticate Error' }, status: 401
    end
  end

  private

  def login_params
    params.permit(:email, :password, :password_confirmation)
  end
end
