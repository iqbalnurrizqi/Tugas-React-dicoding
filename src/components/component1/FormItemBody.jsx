import React from "react";

function FormItemBody({title, createdAd, body}) {
    return (
       
        <div className="note-item__content note-item">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{createdAd}</p>
            <p className="note-item__body">{body}</p>
        </div>
       
    )
}

export default FormItemBody;