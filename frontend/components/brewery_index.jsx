import React, { useEffect } from 'react'
import Brewery from './brewery';
import Container from './container';
import List from './list';
import ListItem from './list_item';
import ListTitle from './list_title';
import Tile from './tile';
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
    <Container maxWidth="md">
      <Tile>
        <ListTitle>
          <Typography size="xxl">
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
      </Tile>
    </Container>
  )
};

export default BreweryIndex;