import React from "react";

function Modal(props) {
    function hideModal(e) {
        let target = e.target;
        if (target.id === "modal") {
            props.onHideModal();
        }
    }

    return (
        <div
            id="modal"
            onClick={hideModal}
            className={props.show ? "modal" : "hide"}
        >
            <div className="item card_modal">{props.children}</div>
        </div>
    );
}

export default Modal;
