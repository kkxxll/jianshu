import React, { Component } from 'react';
// import store from './store'
import { connect } from 'react-redux';

const TodoList = props => {
  const {
    inputValue,
    list,
    changeChangeInput,
    handleClick,
    handleDelete
  } = props;
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeChangeInput} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, idx) => {
          return (
            <li key={idx} onClick={handleDelete.bind(this, idx)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// 把store的state映射成props
const mapStateProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

// store.dispatch 映射到props
const mapDispatchToProps = dispatch => {
  return {
    changeChangeInput(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    },
    handleDelete(idx) {
      const action = {
        type: 'del_item',
        idx
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(TodoList);
