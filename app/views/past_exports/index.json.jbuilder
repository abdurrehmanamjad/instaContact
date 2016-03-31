json.array!(@past_exports) do |past_export|
  json.extract! past_export, :id, :user_id, :content
  json.url past_export_url(past_export, format: :json)
end
