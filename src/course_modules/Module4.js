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
    return (
        <div>
            <h2>Dynamic Bot Manager Component</h2>
            <div className='Bot-Inputs'>
                <h3>Bot Creation</h3>
                {/* Bot input fields */}
            </div>
            <div className='Bots-Display'>
                <h3>Current Bot list</h3>
                <ul className='Listing'>
                    {bots.map(bot => (
                        <li key={bot.id}>{bot.id}-{bot.name}, Status: {bot.status}</li>
                    ))}
                </ul>
                
                {/* Bot display case */}
            </div>
        </div>
    )
}

export default ModuleFourPage;