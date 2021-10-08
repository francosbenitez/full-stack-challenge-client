import React, {useState} from 'react';
import Form from "../components/operations/Form"

const Add = () => {
    const [operation, setOperation] = useState({
        concept: "", 
        amount: "",
        date: "",
        category: "",
        type: "",
        user_id: ""
    })
    return (
        <div>
            <p>Add</p>
            <Form operation={operation} setOperation={setOperation} />
        </div>
    );
};

export default Add;