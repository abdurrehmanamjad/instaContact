class AddInsUserIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :ins_user_id, :string
  end
end
