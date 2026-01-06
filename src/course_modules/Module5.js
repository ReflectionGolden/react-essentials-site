import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import './module_styles/Module5.css';

//Font Awesome Icons
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';


function ModuleFivePage() {
    return (
        <div>
            <h1>Module Five Components</h1>
            <div className='Component-Container'>
                <JobForm/>
            </div>
        </div>
    );
}

function JobForm() {
    const [jobs, setJobs] = useState([]);
    const [idVal, setIdVal] = useState("");
    const [nameVal, setNameVal] = useState("");
    const [typeVal, setTypeVal] = useState("");
    const [statusVal, setStatusVal] = useState("");

    const handleIdChange = (event) => {
        let id = event.target.value;
        setIdVal(id);
    }

    const handleNameChange = (event) => {
        let name = event.target.value;
        setNameVal(name);
    }

    const handleTypeChange = (event) => {
        let type = event.target.value;
        setTypeVal(type);
    }

    const handleStatusChange = (event) => {
        let status = event.target.value;
        setStatusVal(status);
    }

    function handleValidation() {
        let formIsValid = true;

        //ID validation
        if (idVal === "") {
            formIsValid = false;
            alert("The ID field cannot be empty.");
        }

        //Name validation
        if (nameVal === "") {
            formIsValid = false;
            alert("The Name field cannot be empty.");
        }

        //Type validation
        if (typeVal === "") {
            formIsValid = false;
            alert("Please select a job type.");
        }

        //Status validation
        if (statusVal === "") {
            formIsValid = false;
            alert("Please select a status.");
        }

        return formIsValid;
    }

    function handleSubmission(e) {
        e.preventDefault();
        if (handleValidation()) {
            setJobs([...jobs, {id: idVal,name: nameVal, type: typeVal, status: statusVal}]);
            console.log(jobs[jobs.length-1]);
            setIdVal("");
            setNameVal("");
            setTypeVal("");
            setStatusVal("");
        }
    }

    function handleDelete(id) {
        setJobs(jobs.filter(job => id !== job.id));
    }
    
    return (
        <div>
            <h2>Job Form Component</h2>
            <p>
                This component demonstrates the use of multiple input types through the use of a job creation form including a number input with a built in minimum, a text input, a radio button selection, and a dropdown selection. It also includes validation for fields to be required, and clears the inputs when a job is successfully created.
                <br />
                I have also styled the form using a separate css file to make it visually better than just having the different inputs stacked on top of each other, and also increased input sizes for better readability.
            </p>
            <form className='Form-Container' onSubmit={e => handleSubmission(e)}>
                <div className='idInput'>
                    <label htmlFor="jobID">Job ID: </label>
                    <input type="number" min="0" id='jobID' value={idVal} placeholder='Enter ID' onChange={handleIdChange}/><br /><br />
                </div>

                <div className='titleInput'>
                    <label htmlFor="jobTitle">Job Title: </label>
                    <input type="text" id='jobTitle' value={nameVal} placeholder='Enter Job Title' onChange={handleNameChange}/><br /><br />
                </div>

                <div className='typeInput'>
                    <div>
                        <label htmlFor="jobType">Job Type: </label><br />
                        <div>
                            <TypeRadio typeLabel="Read Emails" typeID="readEmails" typeVal={typeVal} value="readEmailsJob" handleTypeChange={handleTypeChange}/><br />
                            <TypeRadio typeLabel="Send Emails" typeID="sendEmails" typeVal={typeVal} value="sendEmailsJob" handleTypeChange={handleTypeChange}/><br />
                            <TypeRadio typeLabel="Web Parsing" typeID="webParse" typeVal={typeVal} value="webParseJob" handleTypeChange={handleTypeChange}/><br />
                        </div>
                    </div>
                </div>
                
                <div className='statusInput'>
                    <div>
                        <label htmlFor="jobStatus">Job Status: </label><br />
                        <select name="jobStatus" id="jobStatus" value={statusVal} onChange={handleStatusChange}>
                            <option value="" disabled>Select a Status</option>
                            <option value="pending">Start Pending</option>
                            <option value="running">Running</option>
                            <option value="completed">Completed</option>
                            <option value="stopped">Stopped</option>
                        </select><br />
                    </div>
                </div>

                <div className='jobPreview'>
                    <p>
                        <span style={{textDecoration: "underline"}}>Job Preview:</span> <br />
                        ID: {idVal} <br />
                        Name: {nameVal} <br />
                        Type: {typeVal} <br />
                        Status: {statusVal}
                    </p>
                </div>

                <div className='jobSubmit'>
                    <button className='Generic-button' id="submit">Submit</button>
                </div>
            </form>
            <div>
                <h2>Current Jobs List</h2>
                <ul className='Listing'>
                    {jobs.map(job => (
                        <JobDisplayItem job={job}>
                            <p>ID: {job.id}, Name: {job.name}, Job Type: {job.type}, Status: {job.status}<StatusIcon Status={job.status}/></p>
                            <button style={{marginLeft: "5px"}} onClick={() => handleDelete(job.id)}>Delete</button>
                        </JobDisplayItem>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function JobDisplayItem(props) {
    return (
        <li key={props.job.id}>
            {props.children}
        </li>
    );
}

function TypeRadio({typeLabel, typeId, typeVal, value, handleTypeChange}) {
    return (
        <>
            <input type="radio" name="jobType" id={typeId} checked={typeVal === value} value={value} onChange={handleTypeChange}/>
            <label htmlFor={typeId}>{typeLabel}</label>
        </>
    );
}

function StatusIcon({Status}) {
    function StatIcon(Status) {
        switch (Status) {
            case "pending":
                return(<FontAwesomeIcon icon={faClipboardList} style={{color: "#FFD43B",}} />);
            case "running":
                return(<FontAwesomeIcon icon={faPersonRunning} style={{color: "#74C0FC",}} />);
            case "completed":
                return(<FontAwesomeIcon icon={faCircleCheck} style={{color: "#00ff00",}} />);
            case "stopped":
                return(<FontAwesomeIcon icon={faCircleXmark} style={{color: "#ff0000",}} />);
            default:
                break;
        }
    }

    return (
        <>
            {StatIcon(Status)}
        </>
    );
}

export default ModuleFivePage;