import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import { openModal } from '../actions/modal_actions';
import { withRouter } from 'react-router-dom'
import BeerList from './beer_list'
import BeerListListItem from './beer_list_list_item';
import ListTitle from './list_title';
import ListItem from './list_item';
import Typography from './typography';

const UserShowBeerLists = ({ match: { params: { id } } }) => {
  const lists = useSelector(state => stateFilter({
    state,
    key1: 'lists',
    key2: 'user_id',
    value: JSON.parse(id)
  }))

  const dispatch = useDispatch();

  const handleListItemClick = (e, list) => {
    e.stopPropagation();

    dispatch(openModal({
      component: <BeerList list={list} />,
      title: list.name
    }))
  }
  
  return(
    <React.Fragment>
      <ListTitle>
        <Typography size="lg">Lists</Typography>
      </ListTitle>

      <ListItem>
        {
          lists.map(list => (
            <BeerListListItem
              list={list}
              key={list.id}
              onClick={e => handleListItemClick(e, list)}
            />
          ))
        }
      </ListItem>
    </React.Fragment>
  )
};

export default withRouter(UserShowBeerLists);