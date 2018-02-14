class AddTeamemailToTeams < ActiveRecord::Migration
  def change
    add_column :teams, :teamemail, :text
  end
end
