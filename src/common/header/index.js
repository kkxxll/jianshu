import React from 'react';
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
  SearchWrapper
} from './style';

const Header = props => {
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
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i
            className={
              props.focused ? 'focused iconfont zoom' : 'iconfont zoom'
            }
          >
            &#xe614;
          </i>
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
};

const mapStateToProps = state => {
  return {
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused'])
  };
};
const mapDispatch = dispatch => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(Header);
