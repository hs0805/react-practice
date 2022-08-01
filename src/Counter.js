import React from 'react';
import useCustomCounter from './CustomHook';

const Counter = () => {
    const data = useCustomCounter();

    return(
        <React.Fragment>
            <h1> Count : {data.count} </h1>
            <button  onClick= {data.handlIncrement} > increment Me</button>
        </React.Fragment>
  
    );
}

export default Counter;