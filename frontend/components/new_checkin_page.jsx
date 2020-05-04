import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../actions/beer_actions';
import Container from './container';
import Tile from './tile';

const NewCheckinPage = () => {
  const breweries = useSelector(state => state.entities.breweries);
  const beers = useSelector(state => state.entities.beers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch])


  if (!breweries || !beers) return null;
  return(
    <Container maxWidth="md">
      <Tile>
        <select>
          {
            
          }
        </select>
      </Tile>
    </Container>
  )
}

export default NewCheckinPage;