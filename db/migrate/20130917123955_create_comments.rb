class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.integer :mit_id, null: false

      t.timestamps
    end
  end
end
