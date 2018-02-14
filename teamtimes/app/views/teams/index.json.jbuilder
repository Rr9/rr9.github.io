json.array!(@teams) do |team|
  json.extract! team, :id, :name, :belongs_to, :teamemail
  json.url team_url(team, format: :json)
end
