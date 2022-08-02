import React, { useState, useEffect } from 'react'

function Counter() {
    const [counter, setCounter] = useState();

    useEffect(() => {
        console.log(counter);
    }, [counter])

    useEffect(() => {
        // console.log("mount phase");
        // return () => {
        //     console.log("unmount");
        // }

        let arr = fetch("url").then(data => data.json).then(data => data.value);
        setCounter(arr);
    }, [])

    // useEffect(() => {
    //     console.log("naam nehi pata")
    // })

    return (
        <div>
            {counter}
            <br></br>
            <button onClick={() => {
                setCounter(prevState => prevState + 1)
                // console.log(counter);
            }}>Click</button>
        </div>
    )
}

export default Counter

