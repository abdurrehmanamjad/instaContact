class AddFileNameToPastExports < ActiveRecord::Migration
  def change
    add_column :past_exports, :file_name, :string
  end
end
