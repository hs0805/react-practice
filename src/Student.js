import React, { Component } from 'react'

class Student extends Component {
    state = {
        name: "Happy",
        roll: this.props.roll
    }

    render() {
        return (
            <h1> Hello {this.state.name} and roll no. is : {this.state.roll} </h1>
        )
    }
}

export default Student;