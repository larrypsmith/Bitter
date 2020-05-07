import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stateFilter } from '../reducers/selectors';
import { fetchUser } from '../actions/user_actions';
import Banner from './banner';
import Checkin from './checkin';
import Container from './container';
import List from './list';
import ListItem from './list_item';
import ListTitle from './list_title';
import Tile from './tile';
import Typography from './typography';

const UserShow = ({ match: { params: { id } } }) => {
  const user = useSelector(state => state.entities.users[id]);
  const checkins = useSelector(state => stateFilter({
    state,
    key1: 'checkins',
    key2: 'user_id',
    value: JSON.parse(id)
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id))
  }, [dispatch, id])

  if (!user) return null;
  return(
    <Container maxWidth="lg">
      <Banner user={user} />
      <Tile>
        <ListTitle>
          <Typography size="lg">
            Recent Checkins
          </Typography>
        </ListTitle>
        
        <List>
          {
            checkins
              .reverse()
              .map((checkin, idx) => (
                <ListItem key={idx}>
                  <Checkin checkin={checkin} />
                </ListItem>
              ))
          }
        </List>
      </Tile>
    </Container>
  )
};

export default withRouter(UserShow);