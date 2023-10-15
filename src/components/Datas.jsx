import React from "react";
import { getInitialData } from "../utils";

function Datas() {
    const items = getInitialData();

    return (
        <div>
            <div className="notes-list">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="note-item__content note-item">
                        <h1 className="note-item__title">{item.title}</h1>
                        <p className="note-item__date">{item.createdAt}</p>
                        <p className="note-item__body">{item.body}</p>
                        <div className="note-item__action">
                        <button onClick={() => handleDelete(item.id)} className="note-item__delete-button">Delete</button>
                        <button onClick={() => handleArchev(item.id)} className="note-item__archive-button">archive</button>
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default Datas;

