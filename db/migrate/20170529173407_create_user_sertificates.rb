class CreateUserSertificates < ActiveRecord::Migration[5.0]
  def change
    create_table :user_sertificates do |t|
      t.integer :user_id
      t.integer :sertificate_id
    end
  end
end
