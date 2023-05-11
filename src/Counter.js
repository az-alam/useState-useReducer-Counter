import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        if (count < 10) setCount(count + 1);
    }

    function decrement() {
        if (count > 0) setCount(count - 1);
    }
    const styles={
        backgroundColor:"#faa316",
        color:"#ff",
        fontSize:"20px",
        borderRadius:"0.5rem"
    };
    return (
        <>
            <button onClick={increment} style={styles}>Increment</button>
            <p>Count = {count}</p>
            <button onClick={decrement} style={styles}>Decrement</button>
        </>
    )
}