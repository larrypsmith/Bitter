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

export const createCheckin = checkin => (
  $.ajax({
    url: `api/checkins`,
    method: 'POST',
    data: { checkin }
  })
)