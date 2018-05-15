# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Auth, type: :model do
  describe 'relationship' do
    it { is_expected.to belong_to(:user) }
  end

  describe 'enums' do
    it { is_expected.to define_enum_for(:provider).with(twitter: 0) }
  end
end
