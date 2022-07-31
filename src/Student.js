import React, { Component } from 'react'

class Student extends Component {
    
    state = {
        name: "Happy",
        roll: this.props.roll
    }

    handleClick = (arg, e) => {
        this.setState({ name: "Ghost", roll: "1"});
        this.setState( (state, props) => {
            console.log(state.name);
            console.log(state.roll);
            console.log(props);
            console.log("Event is :", e);
        })
    }

    handleClickArg = (e) => {
        console.log("Clicked through argumented method");
        this.handleClick(this.handleClick(this.state.id, e));
    }

    automaticallyCalled = (id) => {
        console.log("Function called auomatically :", id);
    }

    render() {
        return (
            <div>
                <h1> Name is : {this.state.name} </h1>
                <h1> roll number is : {this.state.roll} </h1>
                {/* bind method */}
                <button onClick= { 
                    this.handleClick.bind(this, this.state.id)
                }
                > 
                binded pass
                 </button>

                 {/* using argumented method */}
                 <button onClick={this.handleClickArg}>
                    argumented pass
                 </button>

                 {/* using anonumous pass */}
                 <button onClick={
                    e => {
                        this.handleClick(this.state.roll, e);
                    }
                 }>
                    anonumous
                 </button>
                <button onClick= {this.automaticallyCalled("101")}> Automatic call </button>
            </div>
        )
    }
}

export default Student;