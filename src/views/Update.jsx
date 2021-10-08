import React, {useState} from 'react';
import Form from "../components/operations/Form"

const Update = ({operations, setListUpdated}) => {
    const [operation, setOperation] = useState({
        concept: "", 
        amount: "",
        date: "",
        category: "",
        type: "",
        user_id: ""
    })
    const handleUpdate = id => {
        const requestInit = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(operation)
        }
        fetch('http://localhost:5000/operation/update/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setOperation({
            concept: "", 
            amount: "",
            date: "",
            category: "",
            type: "",
            user_id: ""
        })
        setListUpdated(true)
    }
    return (
        <div>
            <p>Update</p>
            <Form operation={operation} setOperation={setOperation} />
        </div>
    );
};

export default Update;