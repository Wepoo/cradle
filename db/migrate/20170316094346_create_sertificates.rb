class CreateSertificates < ActiveRecord::Migration[5.0]
  def change
    create_table :sertificates do |t|
      t.string :name
      t.text :body
      t.string :file
    end
  end
end
