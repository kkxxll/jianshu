import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // 异步加载当前路径下的index.js
  loader: () => import('./'),
  loading() {
      return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
