export const getCheckinsByUser = ({ entities: { checkins }}, user) => (
  Object.values(checkins)
        .filter(checkin => checkin.user_id === user.id)
)