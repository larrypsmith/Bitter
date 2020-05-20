import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stateFilter } from '../reducers/selectors';
import { fetchUser } from '../actions/user_actions';
import { fetchUserLists } from '../actions/list_actions';
import Banner from './banner';
import Checkin from './checkin';
import Container from './container';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import List from './list';
import ListItem from './list_item';
import ListTitle from './list_title';
import Tile from './tile';
import Typography from './typography';
import UserShowBeerLists from './user_show_beer_lists';

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
    dispatch(fetchUser(id));
    dispatch(fetchUserLists(id));
  }, [dispatch, id])

  if (!user) return null;
  return(
    <Container maxWidth="lg">
      <Banner user={user} />
      
      <FlexParent>
        <FlexChild>
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
        </FlexChild>

        <FlexChild>
          <Tile>
            <UserShowBeerLists />
          </Tile>
        </FlexChild>
      </FlexParent>

    </Container>
  )
};

export default withRouter(UserShow);