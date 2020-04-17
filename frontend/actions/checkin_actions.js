import * as CheckinAPIUtil from '../util/checkin_api_util';

export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN"

const receiveCheckins = payload => ({
  type: RECEIVE_CHECKINS,
  payload
});

const receiveCheckin = payload => ({
  type: RECEIVE_CHECKIN,
  payload
});

const removeCheckin = payload => ({
  type: REMOVE_CHECKIN,
  payload
});

export const fetchCheckins = () => dispatch => (CheckinAPIUtil.fetchCheckins())
  .then(payload => dispatch(receiveCheckins(payload)));

export const fetchCheckin = checkinId => dispatch => (CheckinAPIUtil.fetchCheckin(checkinId))
  .then(payload => dispatch(receiveCheckin(payload)));

export const createCheckin = checkin => dispatch => (CheckinAPIUtil.createCheckin(checkin))
  .then(payload => dispatch(receiveCheckin(payload)));

export const updateCheckin = checkin => dispatch => (CheckinAPIUtil.updateCheckin(checkin))
  .then(payload => dispatch(receiveCheckin(payload)));

export const deleteCheckin = checkinId => dispatch => (CheckinAPIUtil.deleteCheckin(checkinId))
  .then(payload => dispatch(removeCheckin(payload)));