export const getCheckinsByUser = ({ entities: { checkins }}, user) => (
  Object.values(checkins)
        .filter(checkin => checkin.user_id === user.id)
)

export const getBeersByBrewery = ({ entities: { beers } }, brewery) => (
  Object.values(beers)
        .filter(beer => beer.brewery_id === brewery.id)
)