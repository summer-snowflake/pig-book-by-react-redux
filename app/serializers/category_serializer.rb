# frozen_string_literal: true

class CategorySerializer < ActiveModel::Serializer
  attributes :name, :balance_of_payments
end
