import React, { useState } from 'react'

const Teacher = () => {

    const changeName = () => {
        // changeName("Ghost");
        arr[1]("Ghost Singh");
        changeRoll("105");
    }

    const arr = useState("Happy Singh");   // use state returns two values
    const [roll, changeRoll] = useState("101");
    
    return <React.Fragment>
        <h1> name : { arr[0] } </h1>
        <h1> roll : { roll }</h1>
        <button onClick={ changeName }> change</button>
    </React.Fragment>
};


export default Teacher;