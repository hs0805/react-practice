import React, { Component } from "react";
import { Teacher, Student } from "./Student";
class App extends Component {
    render() {
        // return React.createElement("h1", null, "Hello Happy"); // Normal code  (type, props, children)
        return <React.Fragment>
            <Teacher name="Ghost" teacherId={43+1}/>
            <Student roll={12 + 1}/>
            </React.Fragment>
    }
}

export default App;