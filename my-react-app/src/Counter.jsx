import React, {useState} from 'react';

function Counter () {
    const [number, setNumber] = useState(0);

    const incrementNumber = () => {
        setNumber(number+1);
    }
    const decrementNumber = () => {
        setNumber(number-1);
    }
    const reset = () => {
        setNumber(0);
    }

    return (
        <div className='counter-container'>
            <p className='counter-text'>Counter</p>
            <h2 className='counter-num'>{number}</h2>
            <button className="counter-button" onClick={decrementNumber}>-</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={incrementNumber}>+</button>
        </div>
    )
}

export default Counter;