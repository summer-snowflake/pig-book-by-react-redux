# frozen_string_literal: true

class Api::UsersController < ApplicationController
  before_action :authenticate

  def show
    @user = current_user
    render json: @user
  end
end
