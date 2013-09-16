class CreateMits < ActiveRecord::Migration
  def change
    create_table :mits do |t|

      t.string :title, null: false
      t.text :description
      t.date :date, null: false

      t.timestamps
    end
  end
end
