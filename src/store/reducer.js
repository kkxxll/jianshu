import { ADD_TODO_ITEM, DEL_TODO_ITEM, CHANGE_INPUT_VALUE} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
};

// reducer 不可修改state
export default (state = defaultState, action) => {
  // state 上一次的state
  // action 为传入的action
  //  console.log(state, action);
  // 使用actionTypes时，由于action.type===某个变量，变量写错时会报错（未定义）
  // 不使用actionTypes，写错时无法追踪到错误
  // if (action.type === 'change_input_value')
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DEL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.idx, 1);
    return newState;
  }

  return state;
};
