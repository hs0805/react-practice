import React, { Component } from "react";
import User from './User'
import Guest from "./Guest";

class App extends Component {

    render() {

        const arr = [10, 20, 30, 40, 50, 60];
        const newArr = arr.map((num) => {
            return <li> {num*2} </li>
        })

        return (
            <div>
                <ul>{newArr}</ul>
                <br></br>
                <ul>
                    {
                        arr.map((num) => {
                           return <li>{num}</li>
                        })
                    }
                </ul>
            </div>
        )
    
    }


}

export default App;