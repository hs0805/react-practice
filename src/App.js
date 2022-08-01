import React, { Component } from "react";
import User from './User'
import Guest from "./Guest";

class App extends Component {

    render() {

        const arr = [
            { id: "101", name: "Happy Singh", district: "SGNR"},
            { id: "102", name: "Saksham Singh", district: "KKR"},
            { id: "103", name: "Aaditya Sinha", district: "PATNA"},
    ];
        const newArr = arr.map((num) => {
            return <li> {num*2} </li>
        })

        return (
            <div>
                <ul>
                    {
                        arr.map((user) => {
                           return <li key={user.id}>name : {user.name}  State: {user.district}</li>
                        })
                    }
                </ul>
            </div>
        )
    
    }


}

export default App;