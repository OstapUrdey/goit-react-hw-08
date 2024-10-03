// import css from './EditContactForm.module.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { Button, TextField } from "@mui/material";

export default function EditContactForm({currentName, currentNumber, id}) {
    const [name, setName] = useState(currentName);
    const [number, setNumber] = useState(currentNumber);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(updateContact({id, updateData: {name, number} }));
        onclose();
    };

    return (
        <div>
            <TextField 
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> 
            <TextField 
                label="Number"
                value={number}
                onChange={(e) => setNumber(e.currentTarget.value)}
            />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Updete Contact
            </Button>
        </div>
    )
}