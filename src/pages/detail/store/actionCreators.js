import axios from 'axios';
import * as actionTypes from './actionTypes';
import '../../../mock/detail';
// import { fromJS } from 'immutable';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
  return dispatch => {
    // 由于mock不能params，所以注释
    axios.get('/api/detail', {
      // params: {
      //   id
      // }
    }).then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    });
  };
};
