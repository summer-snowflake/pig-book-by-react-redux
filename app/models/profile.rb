# frozen_string_literal: true

class Profile < ApplicationRecord
  has_secure_password

  belongs_to :user
end
