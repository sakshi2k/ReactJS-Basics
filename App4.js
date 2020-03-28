// HANDLING EVENTS

import React from "react"

function App4(){
    return(
        <div>
            <br/><br/><br/>
            <img onMouseOver={() => console.log("Hovered")}
            src = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png" alt="Mickey"/>
            <br/>
            <button onClick={() => console.log("Mickey says hello")}>Click me</button>
        </div>
    )
}
export default App4