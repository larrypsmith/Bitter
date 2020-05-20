export const createListsBeer = listsBeer => (
  $.ajax({
    url: 'api/lists_beers',
    method: 'POST',
    data: { lists_beer: listsBeer }
  })
)

export const deleteListsBeer = listsBeerId => (
  $.ajax({
    url: `api/lists_beers/${listsBeerId}`,
    method: 'DELETE'
  })
)