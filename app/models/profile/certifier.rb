# frozen_string_literal: true

class Profile::Certifier
  attr_accessor :user

  def initialize(params:)
    @email = params[:email]
    @password = params[:password]
    @password_confirmation = params[:password]
  end

  def authenticate
    profile = Profile.find_by(email: @email)
    return false unless profile&.user&.try!(:registered?)

    @user = profile.user
    access_token = @user.access_token.presence || SecureRandom.hex(24)
    @user.update!(last_sign_in_at: Time.zone.now, access_token: access_token)
    profile.authenticate(@password)
  end
end
