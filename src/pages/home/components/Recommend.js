import React, { Component } from 'react';

import { connect } from 'react-redux';

import { RecommendItem, RecommendWrapper } from '../style';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => (
          <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(
  mapState,
  null
)(Recommend);
