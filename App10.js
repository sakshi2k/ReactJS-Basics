//FORM PART 1
import React, { Component } from "react"

class App10 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
           [event.target.name]: event.target.value
          // firstName: event.target.value
        })
    }

    render() {
        return(
            <form>
            <input 
                type="text" 
                placeholder="FIRST NAME" 
                onChange={this.handleChange}
                value={this.state.firstName}
                name="firstName">
            </input>
                <br/>
            <input 
                type="text"
                placeholder="LAST NAME" 
                onChange={this.handleChange}
                value={this.state.lastName}
                name="lastName" 
                >
            </input>
                <br/>
            <h2>Name : {this.state.firstName +" "+ this.state.lastName}</h2>
            </form>
        )
    }
}

export default App10