//STATE PRACTICE 2 
import React, { Component } from "react"

class App3 extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn :false
        }
    }
    render(){
        let show = (this.state.isLoggedIn ? 'IN': 'Out')
        return(
            <div>
                <h1>You are currently Logged  {show}</h1>
            </div>
        )
    }
}

export default App3