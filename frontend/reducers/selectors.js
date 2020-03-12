export const getCheckinsByUser = ({ entities: { checkins }}, user) => (
  Object.values(checkins)
        .filter(checkin => checkin.user_id == user.id)
)

export const getBeersByBrewery = ({ entities: { beers } }, brewery) => (
  Object.values(beers)
        .filter(beer => beer.brewery_id == brewery.id)
)

export const getBeersByCheckins = (state, checkins) => {
  let beers = {};
  let beer
  checkins.forEach(checkin => {
    beer = state.entities.beers[checkin.beer_id];
    beers[beer.id] = beer;
  })
  return beers;
}

export const getBreweriesByBeers = (state, beers) => {
  let breweries = {};
  let brewery
  Object.values(beers).forEach(beer => {
    brewery = state.entities.breweries[beer.brewery_id];
    breweries[brewery.id] = brewery;
  })
  return breweries;
}