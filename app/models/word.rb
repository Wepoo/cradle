class Word < ApplicationRecord
  belongs_to :letter

  has_one :image, as: :imageable, dependent: :destroy
  accepts_nested_attributes_for :image, reject_if: :all_blank, allow_destroy: true
end
