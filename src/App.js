import React, { Component, Fragment } from 'react'

import './style.css'
import { CSSTransition } from 'react-transition-group'


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
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToogle}>toogle</button>
            </Fragment>
        )
    }
    handleToogle() {
        this.setState({
            show: this.state.show ? false:true
        })
        console.log(this.state.show)
    }
}

export default App