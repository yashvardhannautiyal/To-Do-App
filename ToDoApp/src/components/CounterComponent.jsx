import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(27839);
    const [value, setValue] = useState("yash");
    console.log(count); // value in console is updated as in state whenever a value is updatated the app is re-rendered with updated value


    return(
        <div>
            <p>Count Component - {count}</p>
            <h5>Value is {value}</h5>
            <button onClick={() => setValue("React")}>Change</button>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default CounterComponent;