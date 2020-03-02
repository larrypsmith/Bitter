class AddNameIndexToBeers < ActiveRecord::Migration[5.2]
  def change
    add_index :beers, :name
  end
end
