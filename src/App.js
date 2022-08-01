import React, { Component } from "react";
import User from './User'
import Guest from "./Guest";
import pic1 from "./pic1.jpg";    //Import like this if it is in src folder or use 

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
                           return <li key={user.id}>
                            <img src={pic1} height="20" width="20"/>
                            name : {user.name}  State: {user.district}
                            <img src={process.env.PUBLIC_URL+"/images/pic.jpg"} height="20" width="20"/>
                           </li>
                        })
                    }
                </ul>
            </div>
        )
    
    }


}

export default App;