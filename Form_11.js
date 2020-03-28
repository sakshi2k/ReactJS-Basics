import React, {Component} from "react"

class Form_11 extends Component{
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            destination:"",
            //dietaryRestriction:{
                lactoseIntolerant:false,
                diabetic:false,
                peanutsAllergic:false
            //}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({[name]: checked}) :
            this.setState({[name]: value}) 

    }

    render() {
        return(
            <form >
                <input 
                type="text" 
                name="firstName"
                placeholder="FIRST NAME" 
                value={this.state.firstName} 
                onChange={this.handleChange}
                /><br/>

                <input 
                type="text" 
                name="lastName"
                placeholder="LAST NAME" 
                value={this.state.lastName} 
                onChange={this.handleChange}
                /><br/><br/>
                
                <input 
                type="text" 
                name="age"
                placeholder="AGE" 
                value={this.state.age} 
                onChange={this.handleChange}
                /><br/><br/>

                <label><input 
                type="radio" 
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={this.state.gender === "male"}
                />MALE</label>
                <br/>

                <label><input 
                type="radio" 
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={this.state.gender === "female"}
               />FEMALE</label>
                <br/><br/>

                <select 
                name="destination" 
                onClick={this.handleChange}>
                value={this.state.destination}
                    <option value="___">--CHOOSE DESTINATION--</option>    
                    <option value="France">FRANCE</option>    
                    <option value="Germany">GERMANY</option>    
                    <option value="London">LONDON</option>    
                    <option value="India">INDIA</option>    
                </select>
                <br/><br/>

                <h3>Dietary Restriction</h3><br/>
                <label><input 
                    type="checkbox" 
                    name="lactoseIntolerant" 
                    value="this.state.lactoseIntolerant" 
                    checked={this.state.lactoseIntolerant}
                    onChange={this.handleChange}
                    />Lactose Intolerance</label>
                    <br/>

                    <label><input 
                    type="checkbox" 
                    name="diabetic" 
                    value="this.state.diabetic" 
                    checked={this.state.diabetic}
                    onChange={this.handleChange}
                    />Diabetic</label>
                    <br/>

                    <label><input 
                    type="checkbox" 
                    name="peanutsAllergic" 
                    value="this.state.peanutsAllergic"
                    checked={this.state.peanutsAllergic}
                    onChange={this.handleChange}
                    />Peanut Allergies</label>
                    <br/><br/>

                <button>Submit</button>
                <hr/>
                <h2>Entered Information :</h2>
                <h3>Your name: {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your age: {this.state.age}</h3>
                <h3>You are : {this.state.gender}</h3>
                <h3>Your Destination : {this.state.destination}</h3>
                <h3>Your Dietary Restriction : <br/> <font face="Cambria" size='4'>
                    {this.state.lactoseIntolerant ? "Lactose Intolerant  " : " "}  
                    {this.state.diabetic ? "Diabetic  " : " "}
                    {this.state.peanutsAllergic ? "PeanutsAllergic  " : " "}
                    </font></h3>
            </form>
        )
    }

}

export default Form_11