class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :name
      t.text :description
      
      # Adding paperclip columns for polymorphic assossiations
      t.string :imageable_id
      t.string :imageable_type

      t.timestamps null: false
    end

    # Adding paperclip columns
    add_attachment :pictures, :image

  end
end
