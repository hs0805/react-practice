import React, { Component, Fragment} from "react";
import { Teacher, Student } from "./Student";
class App extends Component {
    render() {
        // return React.createElement("h1", null, "Hello Happy"); // Normal code  (type, props, children)
        return <React.Fragment>
            <Teacher name="Teacher"/>
            <Student name="Student"/>
            </React.Fragment>
    }
}

export default App;