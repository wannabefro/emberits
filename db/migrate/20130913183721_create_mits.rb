class CreateMits < ActiveRecord::Migration
  def change

    create_table :mits do |t|

      t.string :title, null: false
      t.text :description
      t.integer :day_id, null: false

      t.timestamps
    end

    create_table :days do |t|

      t.date :date, null: false

    end
  end
end
