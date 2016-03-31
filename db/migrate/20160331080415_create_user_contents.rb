class CreateUserContents < ActiveRecord::Migration
  def change
    create_table :user_contents do |t|
      t.text :json_body,    limit: 4294967296

      t.timestamps null: false
    end
  end
end
