// LIFECYCLE METHODS
import React, {Component} from "react"

class App6 extends Component {
    constructor(){
        super()
        this.state = {}
    }

    static getDerivedStateFromProps() {
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        // create a backup of existing data
    }

    componentDidMount() {
        // get the data to correctly display
        // works only once
    }
    
    // componentWillMount() {
    //     // will be deprecated in react 17
    // }

    // componentWillUpdate() {
    //     // will be deprecated in react 17
    // }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     // will be deprecated in react 17
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // rather than letting every component get re-rendered,
        // to optimise application.!
        // return true if we want it to update and false otherwise
    }

    componentWillUnmount() {
        // component disapper
        // to teardown/cleanup your code b4 component disappears
    }

    render() {
        return (
            <div>
                Code Goes Here
            </div>
        )
    }
}
export default App6