json.array!(@locations) do |location|
  json.extract! location, :id, :name, :date, :belongs_to
  json.url location_url(location, format: :json)
end
