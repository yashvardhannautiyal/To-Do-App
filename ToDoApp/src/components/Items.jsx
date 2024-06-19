import React from "react";

const Items = ()=>{
    return (
        <li className="todo-item">
        <span>
        <input type="checkbox" />
        <span className="itemsText">Eat</span> {/*used span as span is inline elements and p is block element */}
        </span>
        <p>...</p>
        </li>
    );
}
export default Items;