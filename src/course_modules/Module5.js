import { useState } from 'react';
import '../App.css';

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
            </p>
            <form onSubmit={e => handleSubmission(e)}>
                <label htmlFor="jobID">Job ID: </label>
                <input type="number" min="0" id='jobID' value={idVal} placeholder='Enter ID' onChange={handleIdChange}/><br /><br />

                <label htmlFor="jobTitle">Job Title: </label>
                <input type="text" id='jobTitle' value={nameVal} placeholder='Enter Job Title' onChange={handleNameChange}/><br /><br />

                <label htmlFor="jobType">Job Type: </label><br />
                <input type="radio" name="jobType" id="readEmails" checked={typeVal === "readEmailsJob"} value={"readEmailsJob"} onChange={handleTypeChange}/>
                <label htmlFor="readEmails">Read Emails</label><br />
                <input type="radio" name="jobType" id="sendEmails" checked={typeVal === "sendEmailsJob"} value={"sendEmailsJob"} onChange={handleTypeChange}/>
                <label htmlFor="sendEmails">Send Emails</label><br />
                <input type="radio" name="jobType" id="webParse" checked={typeVal === "webParseJob"} value={"webParseJob"} onChange={handleTypeChange}/>
                <label htmlFor="webParse">Web Parsing</label><br /><br />
                
                <label htmlFor="jobStatus">Job Status: </label><br />
                <select name="jobStatus" id="jobStatus" value={statusVal} onChange={handleStatusChange}>
                    <option value="" disabled>Select a Status</option>
                    <option value="pending">Start Pending</option>
                    <option value="running">Running</option>
                    <option value="completed">Completed</option>
                    <option value="stopped">Stopped</option>
                </select><br />

                <p>
                    <span style={{textDecoration: "underline"}}>Job Preview:</span> <br />
                    ID: {idVal} <br />
                    Name: {nameVal} <br />
                    Type: {typeVal} <br />
                    Status: {statusVal}
                </p>

                <button className='Generic-button' id="submit">Submit</button>
            </form>
            <div>
                <h2>Current Jobs List</h2>
                <ul className='Listing'>
                    {jobs.map(job => (
                        <JobDisplayItem job={job}>
                            ID: {job.id}, Name: {job.name}, Job Type: {job.type}, Status: {job.status}
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

export default ModuleFivePage;