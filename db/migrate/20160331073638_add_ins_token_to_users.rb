class AddInsTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :ins_token, :string
  end
end
