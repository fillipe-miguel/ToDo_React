import React from "react";
import DoneIcon from "./DoneIcon";

function ListItem(props) {
    return (
        <li
            className={props.item.done ? "done item" : "item"}
            key={props.item.id}
        >
            {props.item.text}

            {/* Div para separar os botões do texto */}
            <div>
                {/* Botão DONE */}
                <button
                    onClick={() => {
                        props.onDone(props.item);
                    }}
                >
                    <DoneIcon done={props.item.done}></DoneIcon>
                </button>

                {/* Botão DELETE */}
                <button
                    onClick={() => {
                        props.onDeletedItems(props.item);
                    }}
                >
                    <img width="95%" src="./assets/lixo.png" alt="Delete"></img>
                </button>
            </div>
        </li>
    );
}

export default ListItem;
