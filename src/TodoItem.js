import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
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
