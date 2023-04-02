import React from "react";

export default function List(props){

    return(
        <div className="list-row">
            <p>{props.item}</p>
            <button onClick={_event => {props.handleClose(_event, props.id)}}>REMOVE</button>
        </div>
    )
}