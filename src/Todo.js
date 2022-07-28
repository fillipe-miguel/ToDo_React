import React, { useEffect, useState } from "react";
import Item from "./item";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";

function Todo() {
    const [showModal, setShowModal] = useState(false);
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
        onHideModal();
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

    function onHideModal() {
        setShowModal(false);
    }

    return (
        <div className="container">
            {/*  */}

            <header className="header">
                <h1>TO-DO</h1>
                <button
                    className="add"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    +
                </button>
            </header>

            <List
                onDone={onDone}
                onDeletedItems={onDeletedItems}
                items={items}
            ></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAdd={onAddItem}></TodoForm>
            </Modal>
        </div>
    );
}

export default Todo;
