import React from "react";
import "./Todo.css";

function Todo() {
    return (
        <div className="container">
            <h1>TO-DO</h1>
            <form>
                <input type="text"></input>
                <button>ADD</button>
            </form>

            <ul>
                <li>Item</li>
            </ul>
        </div>
    );
}

export default Todo;
