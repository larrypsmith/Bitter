class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.integer :brewery_id, null: false
      t.string :name, null: false
      t.string :type, null: false
      t.string :subtype, null: false
      t.integer :abv, null: false
      t.integer :ibu, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :beers, [:brewery_id, :name], unique: true
  end
end
