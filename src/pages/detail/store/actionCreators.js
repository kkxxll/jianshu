import axios from 'axios';
import * as actionTypes from './actionTypes';
import '../../../mock/detail';
// import { fromJS } from 'immutable';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = () => {
  return dispatch => {
    axios.get('/api/detail').then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    });
  };
};
