class CreateMits < ActiveRecord::Migration
  def change

    create_table :mits do |t|

      t.string :title, null: false
      t.text :description
      t.boolean :complete, default: false
      t.integer :user_id, null: false

      t.timestamps
    end

    create_table :days do |t|

      t.date :date, null: false

    end
  end
end
