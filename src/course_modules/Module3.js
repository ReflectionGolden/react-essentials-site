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

export default ModuleThreePage;