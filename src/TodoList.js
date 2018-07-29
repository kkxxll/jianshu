import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';

import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction
} from './store/actionCreator';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 当store变化时，触发handleStoreChange
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, idx) => (
            <List.Item onClick={this.handleDel.bind(this, idx)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
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
