export const fetchCheckins = () => (
  $.ajax({
    url: 'api/checkins'
  })
)

export const fetchCheckin = checkinId => (
  $.ajax({
    url: `api/checkins/${checkinId}`
  })
)