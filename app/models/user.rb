# frozen_string_literal: true

class User < ApplicationRecord
  has_one :auth, dependent: :destroy
  has_many :categories, dependent: :destroy

  enum status: { inactive: 1, registered: 2 }

  def self.find_or_create_for_oauth(oauth, token)
    ActiveRecord::Base.transaction do
      auth = Auth.find_or_create_for_oauth!(oauth)
      auth.user.update!(access_token: token)
    end
  end

  def self.create_with_provider_auth
    User.create!(
      last_sign_in_at: Time.zone.now,
      status: :registered
    )
  end
end
