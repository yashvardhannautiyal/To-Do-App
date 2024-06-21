import React, {useState} from "react";

const CounterComponent = () => {
    const val = useState(0);
    console.log(val);

    return(
        <div>
            <p>Count Component</p>
        </div>
    );
}

export default CounterComponent;