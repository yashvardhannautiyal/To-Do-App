import React from "react";

const Items = (props)=>{ //used props: acts as passing parameter to the React component
    return (
        <li className="todo-item">
        <span>
        {props.completed ?  <></> :<input type="checkbox" />} {/*conditional rendering*/}
        <span className="itemsText">{props.text}</span> {/*used span as span is inline elements and p is block element */}
        </span>
        <p>...</p>
        </li>
    );
}
export default Items;