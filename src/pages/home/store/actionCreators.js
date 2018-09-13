import axios from 'axios';
import * as actionTypes from './actionTypes';
import '../../../mock/home';
import { fromJS } from 'immutable';

const changeHomeData = result => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list.articleList),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home').then(res => {
      const result = res.data.home;
      // console.log(result);
      dispatch(changeHomeData(result));
    });
  };
};
export const getMoreList = page => {
  return dispatch => {
    axios.get('/api/home').then(res => {
      const result = res.data.homeList;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toogleTopShow = (show) => ({
  type: actionTypes.TOOGLE_SCROLL_TOP,
  show
})
