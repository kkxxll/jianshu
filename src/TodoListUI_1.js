import React, { Component } from 'react';

import { Input, Button, List } from 'antd';

export const TodoListUI = props => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <Input
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: '300px', marginRight: '10px' }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, idx) => (
          <List.Item
            onClick={idx => {
              props.handleDel(idx);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
