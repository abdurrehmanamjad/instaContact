class UserContent < ActiveRecord::Base
	belongs_to :user

	def picture_urls
		JSON.parse(self.json_body)['images']
	end

	def caption
		JSON.parse(self.json_body)["caption"]["text"]
	end

	def tags
		JSON.parse(self.json_body)['tags'].join(" | ")
	end

	def likes_count
		JSON.parse(self.json_body)["likes"]["count"]
	end

	def post_type
		JSON.parse(self.json_body)["type"]
	end

	def location
		JSON.parse(self.json_body)["location"]
	end
	
	def comments_count
		JSON.parse(self.json_body)["comments"]["count"]
	end
	
	def created_time
		JSON.parse(self.json_body)["created_time"]
	end
	
	def instagram_link
		JSON.parse(self.json_body)["link"]
	end
	
end
