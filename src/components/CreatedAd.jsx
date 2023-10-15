import React from "react";


function CreatedAd({ item }) {
    const createdAd = new Date(item.createdAt).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return <p className="note-item__created-at">{createdAd}</p>
}

export default CreatedAd;