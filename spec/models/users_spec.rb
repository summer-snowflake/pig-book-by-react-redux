# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'relationship' do
    it { is_expected.to have_one(:auth).dependent(:destroy) }
    it { is_expected.to have_one(:profile).dependent(:destroy) }
    it { is_expected.to have_many(:categories).dependent(:destroy) }
  end

  describe 'enums' do
    it do
      is_expected.to define_enum_for(:status).with(inactive: 1, registered: 2)
    end
  end
end
