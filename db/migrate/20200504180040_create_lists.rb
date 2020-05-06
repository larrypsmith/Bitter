class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false, limit: 50
      t.string :description, limit: 300
      t.timestamps
    end

    add_index :lists, :user_id
  end
end
