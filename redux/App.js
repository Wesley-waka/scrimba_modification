import React from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// https://react-redux.js.org/api/connect#connect

export default connect(state => ({count: state}), {increment, decrement})(App)