export const createListsBeer = listsBeer => (
  $.ajax({
    url: 'api/lists_beers',
    method: 'POST',
    data: { lists_beer: listsBeer }
  })
)