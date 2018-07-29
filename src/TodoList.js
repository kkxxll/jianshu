import React, { Component } from 'react';
import 'antd/dist/antd.css';

// import TodoListUI from './TodoListUI'
import { TodoListUI } from './TodoListUI_1'

import './mock/list'

import axios from 'axios'

import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
  initListAction
} from './store/actionCreator';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDel = this.handleDel.bind(this);
    // 当store变化时，触发handleStoreChange
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        list = {this.state.list}
        handleDel = {this.handleDel}
      />
    );
  }
  componentDidMount() {
    axios.get('/list').then(res => {
      const data = res.data
      const action = initListAction(data)
      console.log(action)
    })
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleDel(idx) {
    const action = getDelItemAction(idx);
    store.dispatch(action);
  }
}

export default TodoList;
