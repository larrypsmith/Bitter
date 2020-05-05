import React, { useEffect } from 'react';
import Brewery from './brewery';
import Container from './container';
import ListTitle from './list_title';
import ListItem from './list_item';
import Beer from './beer';
import Tile from './tile';
import { withRouter } from 'react-router-dom';
import { fetchBrewery } from '../actions/brewery_actions';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import Typography from './typography';

const BreweryShow = ({ match: { params: { id } } }) => {
  const brewery = useSelector(state => state.entities.breweries[id]);
  const beers = useSelector(state => stateFilter({
    state,
    key1: 'beers',
    key2: 'brewery_id',
    value: JSON.parse(id)
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrewery(id));
  }, [dispatch, id]);
  
  if (!brewery) return null;
  return (
    <Container maxWidth="md">
      <Tile>
        <Brewery brewery={brewery} />
      </Tile>
      <Tile>
        <ListTitle>
          <Typography size="xxl">
            Beer List
          </Typography>
        </ListTitle>
        {
          beers.map((beer, i) => (
            <ListItem key={i}>
              <Beer beer={beer} />
            </ListItem>
          ))
        }
      </Tile>
    </Container>
  )
}

export default withRouter(BreweryShow);