class AddMediaIdToUserContents < ActiveRecord::Migration
  def change
    add_column :user_contents, :media_id, :string
  end
end
