import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import { deleteList } from '../actions/list_actions';
import { openModal, closeModal } from '../actions/modal_actions';
import ConfirmationForm from './confirmation_form';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import TrashIcon from './trash_icon';
import Typography from './typography';

const BeerListListItem = ({ list, beerId, onClick }) => {
  const listsBeers = useSelector(state => stateFilter({
    state,
    key1: 'listsBeers',
    key2: 'list_id',
    value: list.id
  }))

  const dispatch = useDispatch();

  const onClickTrashIcon = (e) => {
    e.stopPropagation();

    const onSubmitDelete = (e) => {
      e.stopPropagation();

      dispatch(deleteList(list.id))
      dispatch(closeModal())
    }

    dispatch(openModal({
      component: <ConfirmationForm onSubmit={onSubmitDelete}/>,
      title: 'Delete List'
    }))
  }

  const beerIdsInList = Object.values(listsBeers)
    .map(listsBeer => listsBeer.beer_id);

  const count = listsBeers.length;
  const word = count === 1 ? 'item' : 'items';

  let classNames = ['BeerListListItem'];
  if (beerIdsInList.includes(beerId)) classNames.push('inactive');

  return(
    <li className={classNames.join(' ')} onClick={onClick}>
      <FlexParent>
        <FlexChild>
          <Typography size="md">{list.name}</Typography>
          <Typography color="lightGray">{count} {word}</Typography>
        </FlexChild>

        <FlexChild align="center">
          <TrashIcon onClick={onClickTrashIcon}/>
        </FlexChild>
      </FlexParent>
    </li>
  )
};

export default BeerListListItem;