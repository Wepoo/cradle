class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, default: ''
      t.string :password_digest, null: false, default: ''
      t.string :username
      t.string :first_name
      t.string :last_name

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
