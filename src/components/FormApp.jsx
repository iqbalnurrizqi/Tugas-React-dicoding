import React from "react";
import FormList from "./FormList";
import { getInitialData } from "../utils";
import Coba from "./Coba";

class FormApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
         Contacts : getInitialData(),
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
        const Contacts = this.state.Contacts.filter(contact => contact.id !== id);
        this.setState({ Contacts })
    }

    render() {
    return (
        <div>
            <h1>daftar Todo</h1>
            <FormList Contacts={this.state.Contacts} onDelete={this.onDelete} />
            <Coba />
            
        </div>
    );
}}

export default FormApp;
