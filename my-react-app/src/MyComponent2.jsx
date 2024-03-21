//update function = A function passed as an argument to setState() usually
                // ex. setYear(arrow function)
                // Allow for safe updates based on the previous state
                // Used with multiple state updates and asynchronous functions
                // Good practice to use updater functions

import React, {useState} from 'react';

function MyComponent2() {

    const [count, setCount] = useState(0);

    function increment() {

        // Takes the PENDING state to calculate the NEXT state
        // React puts your updater function in a queue (waitin in line)
        // During the next render, it will call them in the same order

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    function reset() {
        setCount(prevCount => 0);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent2;