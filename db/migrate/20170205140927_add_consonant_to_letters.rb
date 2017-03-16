class AddConsonantToLetters < ActiveRecord::Migration[5.0]
  def change
    add_column :letters, :consonant, :boolean, default: true
  end
end
