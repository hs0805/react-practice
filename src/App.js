import React, { Component } from "react";
import { Teacher, Student } from "./Student";
class App extends Component {
    render() {
        // return React.createElement("h1", null, "Hello Happy"); // Normal code  (type, props, children)
        return <React.Fragment>
            <Student>These are children</Student>
            <Student>Happy, kaushik, Vishwa</Student>
            </React.Fragment>
    }
}

export default App;