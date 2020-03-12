export const getCheckinsByUser = ({ entities: { checkins }}, user) => (
  Object.values(checkins)
        .filter(checkin => checkin.user_id == user.id)
)

export const getBeersByBrewery = ({ entities: { beers } }, brewery) => (
  Object.values(beers)
        .filter(beer => beer.brewery_id == brewery.id)
)

export const getBeersByCheckins = (state, checkins) => {
  let beers = [];
  let beer
  checkins.forEach(checkin => {
    beer = state.entities.beers[checkin.beer_id];
    if (!beers.includes(beer)) beers.push(beer);
  })
  return beers;
}

export const getBreweriesByBeers = (state, beers) => {
  let breweries = [];
  let brewery
  beers.forEach(beer => {
    brewery = state.entities.breweries[beer.brewery_id];
    if (!breweries.includes(brewery)) breweries.push(brewery);
  })
  return breweries;
}