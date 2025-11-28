import { useState } from 'react';
import '../App.css';

function ModuleThreePage() {
    return (
        <div>
            <h1>Module Three Components</h1>
            <p>The components you see here were created in accordance with Module 3 of the React Essentials course by ITOL.</p>
            <div className='Component-Container'>
                <InlineStyle />
            </div>
            <div className='Component-Container'>
                <JobCounter />
            </div>
        </div>
    );
}

function InlineStyle() {
    const [isDisabled, setDisabled] = useState(false);
    const headingStyle = {
        color: "yellow",
        backgroundColor: "rgba(25, 128, 53, 0.5)"
    }
    const buttonStyle = {
        margin: "10px",
        fontSize: "x-large",
        color: "Red"
    }
    const buttonStyle2 = {
        margin: "10px",
        fontSize: "x-large",
        color: "Green"
    }

    function HandleClick() {
        setDisabled(!isDisabled);
    }

    return (
        <div>
            <h2 style={headingStyle}>Inline Style Component</h2>
            <button style={buttonStyle} disabled={isDisabled} onClick={HandleClick}>Button 1</button>
            <button style={buttonStyle2} disabled={!isDisabled} onClick={HandleClick}>Button 2</button>
            <p>
                This component is showing the use of variables within a component to do inline styling by showing a heading and two buttons with different styling to ones in other areas. The buttons are set up so that one is disabled and the other isn't, but when either is clicked they switch which one is disabled.
            </p>
        </div>
    );
}

function JobCounter() {
    const [isProduction, setEnv] = useState(true);
    function ToggleEnv() {
        setEnv(!isProduction);
    }
    return (
        <div>
            <h2>Job Counter Component</h2>
            <p>Current Environment: {isProduction ? "Production" : "UAT"}</p>
            <button className='Generic-button' onClick={ToggleEnv}>Toggle Environment</button>
            <ProdCounter isHidden={isProduction}/>
            <UATCounter isHidden={!isProduction}/>
            <p>
                This component shows the use of states and events to increment, decrement, or reset a number upon a button-click, including making use of useState so that the rendered counter updates to show the new value. This functionality is also demonstrated by the different module pages and the buttons to swap between them, seen in the navigation at the top of the page.
                <br />
                I have also implemented toggling between two separate "environments" which will save their individual job counts when toggled, so Production can have jobs added (until it is, for example, at 8 jobs) then you can switch to UAT and add more jobs (for example, up to 23) and when you toggle back to Production it will show the 8 jobs that were added to Production (and toggling to UAT again will show its count of 23).
            </p>
        </div>
    );
}

function ProdCounter({isHidden}) {
    const [jobCountProd, setJobCountProd] = useState(0);
    function AddJobProd() {
        setJobCountProd(jobCountProd+1);
    }
    function RemoveJobProd() {
        setJobCountProd(jobCountProd-1);
    }
    function ResetJobsProd() {
        setJobCountProd(0);
    }
    return (
        <div hidden={isHidden}>
            <p>Current Job Count: {jobCountProd}</p>
            <button className='Generic-button' onClick={AddJobProd}>Add Job</button>
            <button className='Generic-button' onClick={RemoveJobProd}>Remove Job</button>
            <button className='Generic-button' onClick={ResetJobsProd}>Reset Job Count</button>
        </div>
    );
}

function UATCounter({isHidden}) {
    const [jobCountUAT, setJobCountUAT] = useState(0);
    function AddJobUAT() {
        setJobCountUAT(jobCountUAT+1);
    }
    function RemoveJobUAT() {
        setJobCountUAT(jobCountUAT-1);
    }
    function ResetJobsUAT() {
        setJobCountUAT(0);
    }
    return (
        <div hidden={isHidden}>
            <p>Current Job Count: {jobCountUAT}</p>
            <button className='Generic-button' onClick={AddJobUAT}>Add Job</button>
            <button className='Generic-button' onClick={RemoveJobUAT}>Remove Job</button>
            <button className='Generic-button' onClick={ResetJobsUAT}>Reset Job Count</button>
        </div>
    );
}

export default ModuleThreePage;