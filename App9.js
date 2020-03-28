//FETCHING DATA FROM API
import React, { Component } from "react"

class App9 extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            planet: {}
        }
    }

    componentDidMount() {
        //this.state.isLoading=true
        this.setState({isLoading:true})
        fetch("https://swapi.co/api/planets/1/")
         .then(response => response.json())
         .then(data => {
             this.setState
            ({
                isLoading: false,
                planet: data 
            })
         })

        }
    

    render(){
        const displayText = this.state.isLoading ? "Loading .." : this.state.planet.name
        return(
               <h1>Planet Name from starwars - {displayText}</h1>
        )
    }
}
export default App9