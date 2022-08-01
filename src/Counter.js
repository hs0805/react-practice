import React, { Component, useState, useEffect } from 'react';


const Counter = () => {

    const [count, changeCount] = useState(0);
    const [internalCount, changeInternalCount] = useState(0);

    const handlIncrement = () => {
        changeCount(count+1)
    };

    const handleDecrement = () => {
        changeCount(count-1);
 
    }
    
    const handleInternalIncrement = () => {
        changeInternalCount(internalCount+1);
    }

    const handleInternalDecrement = () => {
        changeInternalCount(internalCount-1);
    }

    useEffect(() => {       // Gets called after every render, update, mount, and unmount
        console.log("useEffect called");    
    }, [count, internalCount]);     // Monitors the count only  IMPORTANT

    return(
        <React.Fragment>
            <h1> Count : {count} </h1>
            <button  onClick= {handlIncrement} > increment Me</button>
            <button  onClick= {handleDecrement} > Decrement Me</button>

            <h1> Count2 : {internalCount} </h1>
            <button  onClick= {handleInternalIncrement} > increment Me</button>
            <button  onClick= {handleInternalDecrement} > Decrement Me</button>
        </React.Fragment>
  
    );
}

export default Counter;