import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

import './style'
import './statics/iconfont/iconfont'
import App from './App';

const Index = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDOM.render(Index, document.getElementById('root'))