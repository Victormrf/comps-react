import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
    
    // using a useEffect that runs every time the piece of state 'count' changes
    useEffect(() => {
        console.log(count)
    }, [count]); 
    
    const increment = () => {
        setCount(count + 1);
    }

    return {
        count,
        increment
    }
}

export default useCounter;