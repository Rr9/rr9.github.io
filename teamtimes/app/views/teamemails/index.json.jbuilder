json.array!(@teamemails) do |teamemail|
  json.extract! teamemail, :id, :team, :emails, :belongs_to
  json.url teamemail_url(teamemail, format: :json)
end
