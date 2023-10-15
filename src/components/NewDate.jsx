import React from "react";
import { showFormattedDate } from "../utils";



function NewDate() {
    const time = showFormattedDate()

    return <p>{time}</p>
}

export default NewDate;
 