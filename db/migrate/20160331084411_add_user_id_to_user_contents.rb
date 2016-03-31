class AddUserIdToUserContents < ActiveRecord::Migration
  def change
    add_column :user_contents, :user_id, :integer
  end
end
