export const fetchBreweries = () => (
  $.ajax({
    url: 'api/breweries'
  })
);

export const fetchBrewery = breweryId => (
  $.ajax({
    url: `api/breweries/${breweryId}`
  })
);