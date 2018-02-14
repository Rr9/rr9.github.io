class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.string :team
      t.string :location
      t.datetime :time
      t.string :belongs_to

      t.timestamps null: false
    end
  end
end
