# frozen_string_literal: true

class User < ApplicationRecord
  has_one :auth, dependent: :destroy
end
