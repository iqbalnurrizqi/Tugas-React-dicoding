import React from "react";
import FormItem from "./FormItem";

function FormList({ Contacts }) {
  return (
    <div className="note-app__body ">
      <h1>ini bagian atas</h1>
      <div className="notes-list">
        {Contacts.map((contact) => {
          return (
            <FormItem
              key={contact.id}
              id={contact.id}
              onDelete={onDelete}
              {...contact}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FormList;
