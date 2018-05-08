# frozen_string_literal: true

class AuthSerializer < ActiveModel::Serializer
  attributes :uid, :name, :nickname
end
