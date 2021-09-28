import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Table from '../components/Table';
import Modal from '../components/Modal';
import TaskForm from './TaskForm';
import useTasks from '../hooks/useTasks';

export default function Tasks() {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, handleTask] = useTasks();

    const editTask = (taskId) => (
        <IconButton
            edge="start"
            color="inherit"
            id={taskId}
            onClick={(e)=>{ console.log(e.currentTarget.id)}}
        >
            <EditIcon />
        </IconButton>
    );

    
    const deleteTask = (taskId) => (
        <IconButton
            edge="start"
            color="inherit"
            id={taskId}
            onClick={(e)=>{ console.log(e.target)}}
        >
            <DeleteForeverIcon />
        </IconButton>
    );

    const columns = [
        { key: 'taskId', label: 'Task Id' },
        { key: 'taskName', label: 'Task Name' },
        { key: 'project', label: 'Project' },
        { key: 'comments', label: 'Comments' },
        { key: 'taskEdit', label: 'Task Edit', content: (taskId) => editTask(taskId) },
        { key: 'taskDelete', label: 'Task Delete', content: (taskId) => deleteTask(taskId) },
    ];

    const showAddTask = () => {
        setModalOpen(true);
    };

    const handleAddTask = (task) => {
        handleTask(task);
    }

    const handleEditTask = (task) => {
        handleTask(task);
    }

    const handleDeleteTask = (task) => {
        handleTask(task);
    }

    return (
        <Fragment>
            <Button variant="contained" onClick={showAddTask}>Add task</Button>
            {modalOpen &&
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                >
                    <TaskForm
                        getValues={(formVal) => handleAddTask(formVal)}
                    />
                </Modal>
            }
            <Table
                headers={columns}
                data={tasks}
            />
        </Fragment>
    );
}
