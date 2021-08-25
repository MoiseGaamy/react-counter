import React, { useState } from "react";

function FunctionCounter() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    function handleSecond() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick} style={{backgroundColor:"green"}}>increase</button>
            <button onClick={handleSecond} style={{backgroundColor:"red"}}>decrease</button>
        </div>
        
    )
}

export default FunctionCounter;