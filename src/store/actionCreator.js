import {
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  INIT_LIST
} from './actionTypes';

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});
export const getDelItemAction = idx => ({
  type: DEL_TODO_ITEM,
  idx
});
export const initListAction = data => ({
  type: INIT_LIST,
  data
});
