# frozen_string_literal: true

FactoryBot.define do
  factory :category do
    user
    sequence(:name) { |n| "カテゴリ#{n}" }
    balance_of_payments { false }
  end
end
