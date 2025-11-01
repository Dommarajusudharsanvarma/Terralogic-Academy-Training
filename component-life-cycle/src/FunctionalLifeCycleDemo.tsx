import React, { useState, useEffect } from 'react';


const FunctionalLifeCycleDemo: React.FC= () => {
    const [ count, setCount ] = useState<number>(0);

    useEffect(() =>{ 
        console.log(" Component Mounted");
        return () => {
            console.log(" Component Unmounted");
        };
}, []);
    useEffect(() => {
        console.log(" Component Updated: Count changed to", count);
    }, [count]);
  return (
    <div>
        <h2>Functional LifeCycle Demo</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>

  )
}

export default FunctionalLifeCycleDemo