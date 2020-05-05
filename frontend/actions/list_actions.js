import * as ListAPIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";

const receiveLists = (payload) => ({
  type: RECEIVE_LISTS,
  payload
})

export const fetchUserLists = (userId) => (dispatch) => ListAPIUtil.fetchUserLists(userId)
  .then(payload => dispatch(receiveLists(payload)));