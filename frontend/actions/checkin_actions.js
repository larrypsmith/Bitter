import * as CheckinAPIUtil from '../util/checkin_api_util';

export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";

const receiveCheckins = payload => ({
  type: RECEIVE_CHECKINS,
  payload: payload
})

export const fetchCheckins = () => dispatch => (CheckinAPIUtil.fetchCheckins())
  .then(payload => dispatch(receiveCheckins(payload)))