class RemoveNullConstraintFromSubtypeInBeers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :beers, :subtype, :true
  end
end
