import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // 只有当content变化时更新数据
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }

  }

  render() {
    console.log('child update')
    const { content, test } = this.props
    return (
      <div
        onClick={this.handleClick}
      >
        {content} - {test}
      </div>
    )
  }
  handleClick() {
    const { handleItemDelete, index } = this.props 
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  handleItemDelete: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem;
