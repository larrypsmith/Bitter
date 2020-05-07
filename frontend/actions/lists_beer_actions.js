import * as ListsBeerApiUtil from '../util/lists_beer_api_util';
import { openSnackbar } from './snackbar_actions';

export const RECEIVE_LISTS_BEER = 'RECEIVE_LISTS_BEER';

const receiveListsBeer = (payload) => ({
  type: RECEIVE_LISTS_BEER,
  payload
});

export const createListsBeer = (listsBeer) => (dispatch) => ListsBeerApiUtil.createListsBeer(listsBeer)
  .then(payload => {
    dispatch(receiveListsBeer(payload))
    dispatch(openSnackbar('Beer added to list!'))
  });