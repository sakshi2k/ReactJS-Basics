import React, { Component } from "react"

class App8 extends Component{
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    } 

    render() {
        let status = this.state.isLoggedIn ? "LOGOUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
        return(
        <div>
            <button onClick={this.handleClick}>{status}</button>
            <h1>{displayText}</h1>
        </div>
    )}
}

export default App8