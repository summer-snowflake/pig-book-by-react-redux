# frozen_string_literal: true

class User < ApplicationRecord
  has_one :auth, dependent: :destroy

  def self.find_or_create_for_oauth(oauth, token)
    ActiveRecord::Base.transaction do
      auth = Auth.find_or_create_for_oauth!(oauth)
      auth.user.update!(last_sign_in_at: Time.zone.now, access_token: token)
    end
  end
end
