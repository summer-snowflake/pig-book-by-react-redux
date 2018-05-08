# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  has_one :auth
end
