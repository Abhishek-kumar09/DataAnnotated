//This is step 2 in Create Task

import React from 'react';
import "./style.css";
import Navbar from '../../components/Navbar';
import CreateTaskForm from '../../components/CreateTaskForm';

const CreateTaskInfo = () => {
    return (
        <>
            <Navbar />
            {/*
            <div className="container">
                
                <h1 className="title">Basic Info</h1>

                <h2 className="sub-title" >Task Name</h2>
                <CreateTaskForm />
                
                <h2 className="sub-title" >Task-Specific Inputs </h2>
                
                    
            </div>
            */}
            <CreateTaskForm />
        </>
    )
}

export default CreateTaskInfo;