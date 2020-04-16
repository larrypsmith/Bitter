import React, { useEffect } from 'react';
import Banner from './banner';
import Checkin from './checkin';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCheckinsByUser, getBeersByCheckins, getBreweriesByBeers} from '../reducers/selectors';
import { fetchUser } from '../actions/user_actions';

const UserShow = ({ match: { params: { id }}}) => {
  const user = useSelector(state => state.entities.users[id]);
  const checkins = useSelector(state => getCheckinsByUser(state, user));
  const beers = useSelector(state => getBeersByCheckins(state, checkins));
  const breweries = useSelector(state => getBreweriesByBeers(state, beers));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id))
  }, [dispatch, id])

  if (!user) return null;
  return(
    <div className="user-show">
      <Banner
        user={user}
        fetchUser={fetchUser}
      />

      <div className="index">
        <h1>Recent Checkins</h1>

        <ul>
          {
            checkins.map((checkin, idx) => {
              const beer = beers[checkin.beer_id];
              const brewery = breweries[beer.brewery_id]
              return(
                <Checkin
                  checkin={checkin}
                  user={user}
                  beer={beer}
                  brewery={brewery}
                  key={idx}
                />
                )
              })
            }
        </ul>
      </div>
    </div>
  )
};

export default withRouter(UserShow);