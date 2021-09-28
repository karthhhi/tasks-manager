import React, { useState, Fragment } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import task from '../modal/Task';

export default function TaskForm({getValues}) {
    const [formValue, setFormValue] = useState({...task});

    const onFormFieldChange = (e) => setFormValue((prev) => {
        return {
            ...prev, 
            [e.target.name]: e.target.value
        }
    });
    const handleSubmit = () => getValues(formValue);
    const handleReset = () => setFormValue({...task});

    return (
        <Fragment>
            <h2>Create Task</h2>

            <TextField
                name='taskName'
                onChange={onFormFieldChange}
                value={formValue.taskName}
                label={"Task Name"}
            />

            <TextField
                name='project'
                onChange={onFormFieldChange}
                value={formValue.project}
                label={"Project"}
            />

            <TextField
                name='comments'
                onChange={onFormFieldChange}
                value={formValue.comments}
                label={"Comments"}
            />

            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
        </Fragment>
    );
};