import React from "react";

export default function Alert(props) {
    // const capitalize = (word) => {
    //     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // }

    return (
        <div style={{ height: "50px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>Success: </strong>{props.alert.message}
            </div>}
        </div>
    );
}