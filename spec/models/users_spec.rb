# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'relationship' do
    it { is_expected.to have_one(:auth).dependent(:destroy) }
  end
end
