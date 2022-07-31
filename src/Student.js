import React, { Component } from 'react'

class Student extends Component {
    
    state = {
        name: "Happy",
        roll: this.props.roll
    }

    handleClick = () => {
        this.setState({ name: "Ghost", roll: "1"});
        this.setState( (state, props) => {
            console.log(state.name);
            console.log(state.roll);
            console.log(props);
        })
    }

    render() {
        return (
            <div>
                <h1> Name is : {this.state.name} </h1>
                <h1> roll number is : {this.state.roll} </h1>
                <button onClick= {this.handleClick}> Click Me </button>
            </div>
        )
    }
}

export default Student;