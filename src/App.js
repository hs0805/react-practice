import React, { Component } from "react";
import User from './User'
import Guest from "./Guest";

class App extends Component {
    state = {
        isLoggedIn: true
    }

    clickLogin = () => {
        this.setState({isLoggedIn: true})
    }

    clickLogout = () => {
        this.setState({isLoggedIn: false})
    }

    render(){
        return(
            <React.Fragment>
                {(this.state.isLoggedIn && <User /> ) || (<Guest/>) }
                <button onClick={this.clickLogin}> Login </button>
                <button onClick={this.clickLogout}> Logout </button>
            </React.Fragment>
        )
    }
}

export default App;