import React, { Component } from 'react';

import { Input, Button, List } from 'antd';

export default class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <Input
            value={this.props.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, idx) => (
            <List.Item onClick={(idx) => {this.props.handleDel(idx)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
