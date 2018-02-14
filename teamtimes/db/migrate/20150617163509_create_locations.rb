class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.datetime :date
      t.string :belongs_to

      t.timestamps null: false
    end
  end
end
