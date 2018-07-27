const defaultState = {
  inputValue: '',
  list: []
};

// reducer 不可修改state
export default (state = defaultState, action) => {
  // state 上一次的state
  // action 为传入的action
  console.log(state, action);
  if (action.type === 'change_input_value') {
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'del_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.idx, 1)
    return newState
  }

  return state;
};
