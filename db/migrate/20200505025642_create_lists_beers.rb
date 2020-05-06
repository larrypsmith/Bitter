class CreateListsBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :lists_beers do |t|
      t.integer :list_id, null: false
      t.integer :beer_id, null: false
      t.timestamps
    end
    add_index :lists_beers, :list_id
    add_index :lists_beers, :beer_id
  end
end
