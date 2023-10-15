import React from "react";

import FormTitle from "./FormTitle";
import FormBody from "./FormBody";
import FormCreatedAt from "./FormCreatedAt";
import DeleteButton from "./DeleteButton";

function FormItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item__content note-item" >
      <FormTitle title={title} />
      <FormCreatedAt createdAd={createdAt} />
      <FormBody body={body} />
      <DeleteButton  id={id} onDelete={onDelete}/>
    </div>
  );
}

export default FormItem;
