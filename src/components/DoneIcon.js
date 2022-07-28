import React from "react";

function DoneIcon(props) {
    if (props.done) {
        return <img width="100%" src="./assets/on.png" alt="Feito"></img>;
    } else {
        return <img width="100%" src="./assets/off.png" alt="Por Fazer"></img>;
    }
}

export default DoneIcon;
