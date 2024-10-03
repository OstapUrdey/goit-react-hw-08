import css from './Contact.module.css';
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import EditContactForm from '../EdidtContactForm/EditContactForm.jsx';

export default function Contact ({name, number, id}) {

    const dispatch = useDispatch();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditForm, setOpenEditForm] = useState(false);

    const handleDelete = () => {
        dispatch(deleteContact(id));
        toast.success("Contact deleted successfully!");
        setOpenDeleteDialog(false);
    };

    const handleClickOpenDelete = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseDelete = () => {
        setOpenDeleteDialog(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEditForm(true);
    };

    const handleCloseEdit = () => {
        setOpenEditForm(false);
    };

    return (
        <li className={css.contactItem}>
            <p>{name}: {number}</p>
            <Button variant="outlined" color="primary" onClick={handleClickOpenEdit}>
                Edit
            </Button>
            <Button variant="outlined" color="error" onClick={handleClickOpenDelete}>
                Delete
            </Button>

            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDelete}
            >
                <DialogTitle>{"Confirm deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this contact?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {openEditForm && (
                <div className="modal">
                    <EditContactForm
                        currentName={name}
                        currentNumber={number}
                        id={id}
                        onClose={handleCloseEdit}
                    />
                </div>
            )}
        </li>
    );
}