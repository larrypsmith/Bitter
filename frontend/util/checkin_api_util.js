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

export const updateCheckin = checkin => (
  $.ajax({
    url: `api/checkins/${checkin.id}`,
    method: 'PATCH',
    data: { checkin }
  })
)

export const deleteCheckin = checkinId => (
  $.ajax({
    url: `/api/checkins/${checkinId}`,
    method: 'DELETE'
  })
)