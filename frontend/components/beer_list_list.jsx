import React from 'react';
import BeerListListItem from './beer_list_list_item';

const BeerListList = ({ lists, beerId }) => {
  return(
   <ul className="BeerListList">
     {
      lists.map(list => (
        <BeerListListItem
          list={list}
          key={list.id}
          beerId={beerId}
          />
      ))
     }
   </ul> 
  )
};

export default BeerListList;