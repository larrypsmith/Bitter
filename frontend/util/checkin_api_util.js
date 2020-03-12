export const fetchCheckins = () => (
  $.ajax({
    url: 'api/checkins'
  })
)