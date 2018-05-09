# frozen_string_literal: true

class Auth < ApplicationRecord
  belongs_to :user

  enum provider: { twitter: 0 }

  def self.find_or_create_for_oauth!(oauth)
    auth = find_or_initialize_by(uid: oauth[:uid])
    user = auth.user || User.create
    auth.update_attributes!(
      user: user,
      provider: oauth[:provider],
      name: oauth[:info][:name],
      nickname: oauth[:info][:nickname]
    )
    auth
  end
end
