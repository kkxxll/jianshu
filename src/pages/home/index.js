import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { connect } from 'react-redux';

import { actionCreators } from './store'

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
          ): null
        }
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent()
  }
  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeScroll)
  }
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScroll)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScroll(e) {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toogleTopShow(true))
    }else {
      dispatch(actionCreators.toogleTopShow(false))
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
