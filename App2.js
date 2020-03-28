//STATE PRACTICE 1
import React, { Component } from "react"

class App2 extends Component{
    constructor(){
        super()
        this.state = {
            fname : "Sakshi ",
            lname : "Choudhary ",
            age : 19
        }
    }
    render(){
        return (
            <div>
                <h1>{this.state.fname + this.state.lname}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }    
}

export default App2