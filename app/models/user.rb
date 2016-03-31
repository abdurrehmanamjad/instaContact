class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise 	:database_authenticatable, 
					:registerable,
     			# :recoverable, :rememberable,
         	:trackable, :validatable

  has_many :pictures, as: :imageable, dependent: :destroy

  has_many :user_contents
  has_many :past_exports
end
