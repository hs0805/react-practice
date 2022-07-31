import React, { Component, Fragment} from "react";

class App extends Component {
    render() {
        // return React.createElement("h1", null, "Hello Happy"); // Normal code  (type, props, children)
        return <React.Fragment>
            <h1>Hello Happy</h1>
            <h1>Hello Ghost</h1>
            </React.Fragment>
    }
}

export default App;