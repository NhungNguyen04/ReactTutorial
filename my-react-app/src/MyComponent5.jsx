import React, {useState, useEffect, useRef} from 'react';

function MyComponent5() {

    const ref = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef1);
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.background = "yellow";
        inputRef1.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef1.current.style.background = "";
    }

    return(
        <>
            <button onClick={handleClick1}>Click Me 1!</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click Me 2!</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click Me 3!</button>
            <input ref={inputRef3}/>
        </>
    )
}

export default MyComponent5;