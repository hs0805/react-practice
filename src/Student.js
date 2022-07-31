import React, { Component } from "react";
import "./App.css"
import PropTypes from "prop-types";

const Student = props => {
    return (<>
            <h1>Hello {props.name} and children of  this are {props.children } </h1>
            <h1>Roll No: {props.roll}</h1>
        </>);
}

Student.propType = {
    name: PropTypes.string,
    roll: PropTypes.number
}

Student.defaultProps = {
    name : "Happy"
}


class Teacher extends Component {
    render() {
        return <h1 className="bg"> Teacher name is : {this.props.name} and teacher id is : {this.props.teacherId}</h1>
    }
}

Teacher.propType = {
    name: PropTypes.string,
    teacherId: PropTypes.number
}


export {Student, Teacher};