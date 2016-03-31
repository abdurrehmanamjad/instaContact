class WelcomeController < ApplicationController
	before_action :authenticate_user!
	
	#INSTAGRAM VARIABLES
	CALLBACK_URL = "http://localhost:3000/oauth/callback"
	SCOPE = "public_content follower_list relationships comments basic likes"
	COUNT = 20

	def get_ins_token
  	redirect_to Instagram.authorize_url(:redirect_uri => CALLBACK_URL, scope: SCOPE )
  end

  def oauth_callback
	  response_token = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
	  access_token = response_token.access_token
	  user_basics_uri = "https://api.instagram.com/v1/users/self/?access_token=#{access_token}"
	  response_basic = HTTParty.get(user_basics_uri).parsed_response
	  basic_data = response_basic["data"]
	  if basic_data.present?
	  	user = current_user
		  update_user_data(user, basic_data, SCOPE, access_token)
	  end

	  flash[:notice] = "Successfully connected with Instagram"
	  redirect_to root_url
	end

	def update_user_data(user, basic_data, scope, access_token)
  	user_params = {
  		user_id: basic_data["id"],
  		username: basic_data["username"],
  		first_name: basic_data["full_name"],
  		profile_picture: basic_data["profile_picture"],
  		bio: basic_data["bio"],
  		website: basic_data["website"],
  		media: basic_data["counts"]["media"],
  		follows: basic_data["counts"]["follows"],
  		followed_by: basic_data["counts"]["followed_by"],
  		scope: scope,
  		token: access_token,
  	}
	  user.update_attributes(user_params)
	end

	def get_media
		user = current_user
		access_token = user.token
		media_url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=#{access_token}&count=#{COUNT}"
	  get_media_from_url(user, media_url, access_token)

	  flash[:notice] = "Successfully fetched the posts."
	  redirect_to user_contents_path
	end #END OF METHOD

	def get_media_from_url(user, media_url, access_token)
		user_recent_media_uri = media_url
		puts media_url
		puts "-----------------------------------------------------------------------------"
	  response_media = HTTParty.get(user_recent_media_uri).parsed_response
	  media_data = response_media["data"]
	  if media_data.present?
	  	save_media_data(user, media_data)
	  	last_id = media_data.last["id"]
	  	repeat_media_url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=#{access_token}&count=#{COUNT}&max_id=#{last_id}"
	  	get_media_from_url(user, repeat_media_url, access_token)
	  else
	  end #END OF MEDIA PRESENT CHECK
	end

	def save_media_data(user, media_data)
		media_data.each do |media|
  		# SETTING VARIABLES
  		latitude = 0.0
  		longitude = 0.0
  		media_id = media["id"]
  		
  		user_media = UserContent.where(media_id: media_id).first
  		media_params = {
  			user_id: user.id,
	  		media_id: media_id,
	  		json_body: 	media.to_json,
  		}
  		if user_media.present?
  			user_media.update_attributes(media_params)
  		else
  			UserContent.create(media_params)
  		end #END OF USER MEDIA IF
  	end #END OF MEDIA LOOP
	end

	def index
	end

	def search
		# flash[:notice] = "Successfully"
	end

	def search_api
		search_content = params[:search_content]
		search_type = params[:search_type]
		access_token = current_user.token	
		@partial_name = ""	
		if search_type == "users"
			url = "https://api.instagram.com/v1/users/search?q=#{search_content}&access_token=#{access_token}"
			@partial_name = "user"
		elsif search_type == "tags"
			url = "https://api.instagram.com/v1/tags/search?q=#{search_content}&access_token=#{access_token}"
			@partial_name = "tag"
		end
		response_content = search_url(url)
		if response_content.present?
			@content = response_content["data"]
		end
	end

	def search_url(url)
		HTTParty.get(url).parsed_response
	end
end
