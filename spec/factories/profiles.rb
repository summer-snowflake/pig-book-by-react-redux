# frozen_string_literal: true

FactoryBot.define do
  factory :profile do
    user
    email Faker::Internet.email
    password { 'password' }
    password_confirmation { password }
  end
end
