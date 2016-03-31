class CreateUserContents < ActiveRecord::Migration
  def change
    create_table :user_contents do |t|
      t.text :json_body,    limit: 1073741824

      t.timestamps null: false
    end
  end
end
