json.array!(@user_contents) do |user_content|
  json.extract! user_content, :id, :json_body
  json.url user_content_url(user_content, format: :json)
end
