import React, { Component, Fragment } from 'react';
// Fragment 为占位符

import './style.css';

import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['111']
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* htmlFor表示 for属性 */}
          <label htmlFor="insertArea">输入区域</label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(val) => {this.inputA = val}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.renderList()}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    // const value = e.target.value
    const value = this.inputA.value
    this.setState(() => ({
      // 最好把e相关的定义在外面
      inputValue: value
    }), () => {
      console.log('callback')
    })
  }
  handleBtnClick() {
    // this.setState({
    //   inputValue: '',
    //   list: [...this.state.list, this.state.inputValue]
    // });
      
    // 新版 react的setState
    this.setState((prevState) => ({
      // prevState 等于 this.state
      list: [...prevState.list, this.state.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete(idx) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(idx, 1);
      return {
        list
      }
    })
  }
  renderList() {
    // console.log(this) //TodoList
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          {/* <li 
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          >
          </li> */}
          {/* onClick的this绑定只能通过bind，不能在constructor中指定this指向 */}
          {/* dangerouslySetInnerHTML 表示不转译html标签 */}
          <TodoItem
            content={item}
            index={index}
            handleItemDelete={this.handleItemDelete}
          />
        </Fragment>
      );
    });
  }
}

export default TodoList;
