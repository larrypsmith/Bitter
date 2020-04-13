import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

export default ({ isHidden }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal());
  }

  let className = "backdrop";
  if (isHidden) className += "hidden";

  return (
    <div className={className} onClick={handleClick} />
  )
}