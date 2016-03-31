class AddProfileColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :bio, :string
    add_column :users, :profile_picture, :string
    add_column :users, :website, :string
    add_column :users, :media, :integer
    add_column :users, :follows, :integer
    add_column :users, :followed_by, :integer
    add_column :users, :token, :string
    add_column :users, :scope, :string
    add_column :users, :user_id, :string
  end
end
