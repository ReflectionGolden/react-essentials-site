import './App.css';

function NavigationBar({ChangePage}) {
    return (
        <div className='Nav-bar'>
            <ModuleButton ChangePage={ChangePage} module="2"/>
            <ModuleButton ChangePage={ChangePage} module="3"/>
            <ModuleButton ChangePage={ChangePage} module="4"/>
            <ModuleButton ChangePage={ChangePage} module="5"/>
            <ModuleButton ChangePage={ChangePage} module="6"/>
            <ModuleButton ChangePage={ChangePage} module="7"/>
            <ModuleButton ChangePage={ChangePage} module="8"/>
            <ModuleButton ChangePage={ChangePage} module="9"/>
        </div>
    );
}

function ModuleButton({module, ChangePage}) {
    return (
        <button className='Nav-button' onClick={() => ChangePage(module)}>Module {module}</button>
    );
}

export default NavigationBar;