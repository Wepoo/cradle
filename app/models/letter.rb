class Letter < ApplicationRecord
  has_many :words

  def to_builder
    Jbuilder.new do |letter|
      letter.(self, :name, :position)
    end
  end
end
