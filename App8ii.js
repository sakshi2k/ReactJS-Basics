import React, { Component } from "react"

class App8ii extends Component{
    constructor() {
        super()
        this.state = {
            isLoggedin: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedin: !prevState.isLoggedin
            }
        })
    }

    render(){
        let buttonText = (this.state.isLoggedin ? "Log In" : "Log Out")
        let displayText = (this.state.isLoggedin? "Logged Out" : "Logged In")
        return(
        <div>
            <br></br><br></br>
            <button onClick={this.handleClick}>{buttonText}</button>
            <h2>{displayText}</h2>
        </div>
        )
    }
}

export default App8ii