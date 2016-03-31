class RemoveInsUserIdFromUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :ins_user_id
  end
end
