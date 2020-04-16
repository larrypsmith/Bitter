import React, { useEffect } from 'react'
import Brewery from './brewery';
import List from './list';
import ListItem from './list_item';
import ListTitle from './list_title'
import Typography from './typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreweries } from '../actions/brewery_actions';

const BreweryIndex = () => {
  const breweries = useSelector(state => state.entities.breweries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreweries())
  }, [dispatch])

  if (!breweries) return null;
  return(
    <div className="BreweryIndex">
      <ListTitle>
        <Typography size="lg">
          Breweries
        </Typography>
      </ListTitle>
      <List>
        {
          Object.values(breweries).map((brewery, idx) => (
            <ListItem key={idx}>
              <Brewery brewery={brewery} />
            </ListItem>
          ))
        }
      </List>
    </div>
  )
};

export default BreweryIndex;