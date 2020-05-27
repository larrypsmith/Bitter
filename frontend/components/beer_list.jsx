import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors'
import { fetchList } from '../actions/list_actions';
import BeerListItem from './beer_list_item';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import ListItem from './list_item';


const BeerList = ({ list }) => {
  const listsBeers = useSelector(state => stateFilter({
    state,
    key1: 'listsBeers',
    key2: 'list_id',
    value: list.id
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(list.id))
  }, [dispatch, list.id]);
  
  if (!listsBeers.length) return (
    <ListItem>
      <FlexParent justify="center">
        <FlexChild>
          No beers in thist list yet!
        </FlexChild>
      </FlexParent>
    </ListItem>
  );

  return(
    <div className="BeerList">
      {
        Object.values(listsBeers).map((listsBeer, i) => (
          <BeerListItem
            key={i}
            listsBeer={listsBeer}
          />
        ))
      }
    </div>
  )
};

export default BeerList;