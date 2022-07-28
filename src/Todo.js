import React, { useEffect, useState } from "react";
import Item from "./item";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";

function Todo() {
    const [items, setItens] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem("savedItems"));
        if (savedItems) {
            setItens(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("savedItems", JSON.stringify(items));
    }, [items]);

    function onAddItem(text) {
        let item = new Item(text);

        //Colocando o obj no array de objetos!

        setItens([...items, item]);
    }

    function onDeletedItems(item) {
        let filtredItems = items.filter((it) => {
            // eslint-disable-next-line
            return it.id != item.id;
        });

        setItens(filtredItems);
    }

    function onDone(item) {
        let updatedItems = items.map((it) => {
            if (it.id === item.id) {
                it.done = !it.done;
            }

            return it;
        });

        setItens(updatedItems);
    }

    return (
        <div className="container">
            <h1>TO-DO</h1>

            <TodoForm onAdd={onAddItem}></TodoForm>

            <List
                onDone={onDone}
                onDeletedItems={onDeletedItems}
                items={items}
            ></List>
        </div>
    );
}

export default Todo;
