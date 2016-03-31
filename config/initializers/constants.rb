require "instagram"

CALLBACK_URL = "http://localhost:3000/oauth/callback"

Instagram.configure do |config|
  config.client_id = "b91441f6982d4b6f96c99e6ee817798e"
  config.client_secret = "3c17c8bf93b24d9dabb66ab6b48698b1"
  # For secured endpoints only
  #config.client_ips = '<Comma separated list of IPs>'
end
