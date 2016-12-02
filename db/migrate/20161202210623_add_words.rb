class AddWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :name
      t.integer :letter_id

      t.timestamps
    end
  end
end
