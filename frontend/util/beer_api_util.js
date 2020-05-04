export const fetchBeers = () => (
  $.ajax({
    url: 'api/beers'
  })
);