# frozen_string_literal: true

FactoryBot.define do
  factory :auth do
    user
    provider { 'twitter' }
    sequence(:uid) { |n| '%04d' % n }
    sequence(:name) { |n| "名前#{n}" }
    sequence(:nickname) { |n| "nick_name#{n}" }
  end
end
