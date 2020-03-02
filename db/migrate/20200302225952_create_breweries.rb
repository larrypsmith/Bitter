class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :breweries, :name, unique: true
  end
end
