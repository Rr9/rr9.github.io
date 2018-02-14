class CreateTeamemails < ActiveRecord::Migration
  def change
    create_table :teamemails do |t|
      t.string :team
      t.text :emails
      t.string :belongs_to

      t.timestamps null: false
    end
  end
end
