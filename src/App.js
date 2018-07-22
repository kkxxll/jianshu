import React, { Component, Fragment } from 'react'

import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToogle = this.handleToogle.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show': 'hide'}>hello</div>
                <div className={this.state.show ? 'show__item': 'hide__item'}>hello kk</div>
                <button onClick={this.handleToogle}>toogle</button>
            </Fragment>
        )
    }
    handleToogle() {
        this.setState({
            show: this.state.show ? false:true
        })
    }
}

export default App