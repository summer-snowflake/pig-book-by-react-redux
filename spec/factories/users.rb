# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    access_token { SecureRandom.hex(24) }
  end
end
