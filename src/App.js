import React, { Component, Fragment } from 'react'

import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.handleAddList = this.handleAddList.bind(this)
    }
    
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                appear={true}
                                key={index}
                            >
                                <div>
                                    {item}
                                </div>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                <button onClick={this.handleAddList}>add</button>
            </Fragment>
        )
    }
    handleAddList() {
        this.setState((prevState) => {
            return {
                list: [ ...prevState.list, 'item']
            }
        })
    }
}

export default App