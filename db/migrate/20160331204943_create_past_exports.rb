class CreatePastExports < ActiveRecord::Migration
  def change
    create_table :past_exports do |t|
      t.integer :user_id
      t.text :content,    limit: 4294967296

      t.timestamps null: false
    end
  end
end
