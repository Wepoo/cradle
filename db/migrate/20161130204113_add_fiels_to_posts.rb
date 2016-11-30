class AddFielsToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :full_text, :text
    add_column :posts, :description, :text
  end
end
