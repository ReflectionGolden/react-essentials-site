import { useState } from 'react';
import '../App.css';

function ModuleFourPage() {
    return (
        <div>
            <h1>Module Four Components</h1>
            <div className='Component-Container'>
                <DynamicBotManager/>
            </div>
        </div>
    );
}

function DynamicBotManager() {
    const [bots, setBots] = useState([
        {id: "01", name: "EmailBot", status: "Active"},
        {id: "02", name: "DataBot", status: "Inactive"}
    ]);
    const [idVal, setIdVal] = useState("");
    const [nameVal, setNameVal] = useState("");
    const [statusVal, setStatusVal] = useState("");

    const handleIdChange = (event) => {
        let id = event.target.value;
        setIdVal(id);
    }

    const handleNameChange = (event) => {
        let name = event.target.value;
        setNameVal(name);
    }

    const handleStatusChange = (event) => {
        let status = event.target.value;
        setStatusVal(status);
    }

    function handleValidation() {
        let formIsValid = true;

        // Id validation
        if (idVal === "") {
            formIsValid = false;
            alert("The ID field cannot be empty.");
        }

        // Name validation
        if (nameVal === "") {
            formIsValid = false;
            alert("The Name field cannot be empty.");
        }else if (!nameVal.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            alert("The Name field should only include letters.");
        }

        //Status Validation
        if (statusVal === "") {
            formIsValid = false;
            alert("The Status field cannot be empty.");
        }else if (!statusVal.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            alert("The Status field should only include letters.");
        }

        return formIsValid;
    }

    function handleSubmission(e) {
        /* Submition handling */
        e.preventDefault();
        if (handleValidation()) {
            setBots([...bots, {id: idVal, name: nameVal, status: statusVal}]);
            setIdVal("");
            setNameVal("");
            setStatusVal("");
            alert("Bot submitted");
        }
    }

    function handleDelete(id) {
        setBots(bots.filter(bot => id !== bot.id));
    }

    return (
        <div>
            <h2>Dynamic Bot Manager Component</h2>
            <p>
                This component showcases the use of the state of a component to create a dynamic listing of "bots" for a hypothetical system, with the ability to add and delete bots to expand or trim down the list. It also makes use of conditional rendering by setting the colour of the bot in the display list based on the status it has.
            </p>
            <div className='Bot-Inputs'>
                <h3>Bot Creation</h3>
                <form onSubmit={e => handleSubmission(e)}>
                    <input
                        type="text"
                        value={idVal}
                        placeholder='Enter ID'
                        onChange={handleIdChange}
                    />
                    <input
                        type="text"
                        value={nameVal}
                        placeholder='Enter Name'
                        onChange={handleNameChange}
                    />
                    <input 
                        type="text" 
                        value={statusVal}
                        placeholder='Enter Status'
                        onChange={handleStatusChange}
                    />
                    {<p>Bot input: {idVal !== "" ? idVal : "null"}-{nameVal !== "" ? nameVal : "null"}, Status: {statusVal !== "" ? statusVal : "null"}</p>}
                    <button className='Generic-button' id="submit">Submit</button>
                </form>
            </div>
            <div className='Bots-Display'>
                <h3>Current Bot list</h3>
                <ul className='Listing'>
                    {bots.map(bot => (
                        <BotDisplayItem bot={bot} handleDelete={handleDelete} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function BotDisplayItem(props) {
    return (
        <li key={props.bot.id} 
            style={{color: props.bot.status === 'Active' ? "green" : props.bot.status === 'Pending' ? "yellow" : props.bot.status === 'Inactive' ? "red" : "white"}}>
            {props.bot.id}-{props.bot.name}, Status: {props.bot.status}
            <button onClick={() => props.handleDelete(props.bot.id)}>Delete</button>
        </li>
    );
}

export default ModuleFourPage;