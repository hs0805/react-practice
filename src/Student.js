import React, { Component } from "react";
import "./App.css"

const Student = (props) => {
    return <h1 className="bg">Hello {props.name}</h1>
}

class Teacher extends Component {
    render() {
        return <h1 className="bg"> Hello {this.props.name}</h1>
    }
}

export {Student, Teacher};