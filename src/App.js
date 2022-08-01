import React, { Component } from "react";
import pic1 from "./pic1.jpg";    //Import like this if it is in src folder or use 
import Image from "./Image"
import Error from "./Error";

class App extends Component {

    render() {
        return (
            <div>

                <Error>
                    <Image source= {pic1} />
                </Error>

                <Error>
                    <Image source= "NoImage" />
                </Error>

           </div>
        )
    }


}

export default App;