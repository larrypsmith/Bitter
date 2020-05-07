import * as ListApiUtil from '../util/list_api_util';
import { openSnackbar } from './snackbar_actions';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';

const receiveLists = (payload) => ({
  type: RECEIVE_LISTS,
  payload
});

const receiveList = (payload) => ({
  type: RECEIVE_LIST,
  payload
});

export const fetchUserLists = (userId) => (dispatch) => ListApiUtil.fetchUserLists(userId)
  .then(payload => dispatch(receiveLists(payload)));

export const createList = (list) => (dispatch) => ListApiUtil.createList(list)
  .then(payload => {
    dispatch(receiveList(payload));
    dispatch(openSnackbar('List created!'));
  });