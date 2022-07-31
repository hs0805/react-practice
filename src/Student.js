import React, { Component } from 'react'

class Student extends Component {
    
    // binding of this with function
    constructor( props ) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()  {
        console.log("Button is clicked", this);
    }

    handleRedirect = (e) => {
        e.preventDefault();
        console.log("Link is clicked", this);
    }
    // OR
    // USE ARROW FUNCTION


    // handleClick = () => {
    //     console.log("Button is clicked", this);
    // }

    render() {
        return (
            <div>
                <h1> Hello Event </h1>
                <button onClick= {this.handleClick}> Click Me </button>
                <a href='https://github.com/hs0805/react-practice' onClick={ this.handleRedirect }> Github repo </a>
            </div>
        )
    }
}

export default Student;