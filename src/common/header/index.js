import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

const Header = class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              <i className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
};

const mapStateToProps = state => {
  return {
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  };
};
const mapDispatch = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(Header);
