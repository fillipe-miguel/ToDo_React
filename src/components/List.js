import React from "react";
import ListItem from "./ListItem";

function List(props) {
    return (
        <ul>
            {props.items.map((item) => (
                <ListItem
                    onDone={props.onDone}
                    onDeletedItems={props.onDeletedItems}
                    item={item}
                ></ListItem>
            ))}
        </ul>
    );
}

export default List;
