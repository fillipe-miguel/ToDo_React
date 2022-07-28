import React, { useState } from "react";

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAdd(text);
            setText("");
        }
    }

    return (
        <form>
            <input
                className="input_item"
                onChange={handleChange}
                type="text"
                value={text}
            ></input>
            <button className="add_button" onClick={addItem}>
                <img height="100%" src="./assets/add.png" alt="Feito"></img>
            </button>
        </form>
    );
}

export default TodoForm;
