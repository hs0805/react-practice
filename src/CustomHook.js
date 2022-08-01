import { useState } from "react";

const useCustomCounter = () => {
    const [count, changeCount] = useState(0);

    const handlIncrement = () => {
        changeCount(count + 1);
    }

    return (
        {
        count,
        handlIncrement
        }
    );
}

export default useCustomCounter;