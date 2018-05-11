# frozen_string_literal: true

class Api::CategoriesController < ApplicationController
  before_action :authenticate

  def index
    @categories = current_user.categories
    render json: @categories
  end
end
