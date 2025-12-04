import { useState } from 'react';
import man from './man-silhouette.png';
import woman from './woman-silhouette.png';
import './App.css';
import ModuleThreePage from './course_modules/Module3';
import ModuleFourPage from './course_modules/Module4';
import NavigationBar from './Navigation';

function App() {
  const [currentPage, setPage] = useState("4");

  function ChangePage(Module) {
    setPage(Module);
  }

  function SetModulePage(Module) {
    switch (Module) {
      case "2":
        return(<ModuleTwoPage/>);
      case "3":
        return(<ModuleThreePage/>);
      case "4":
        return(<ModuleFourPage/>);
      default:
        return(<ModuleTwoPage/>);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Essentials Site</h1>
        <p>This project is here to demonstrate the use of ReactJS for the creation of a website.</p>
      </header>
      <NavigationBar ChangePage={ChangePage}/>
      {SetModulePage(currentPage)}
    </div>
  );
}

function ModuleTwoPage() {
  return (
    <div>
      <h1>Module Two Components</h1>
      <p>The components you see here were created in accordance with Module 2 of the React Essentials course by ITOL.</p>
      <div className='Component-Container'>
        <h2>Profile Card component</h2>
        <p>These "Profile Cards" make use of a reusable component, showcasing componenets and their ability to be reused for display purposes. They make use of Props to be ableto send through images, names, job titles, and a bio for the person being referenced. Due to these being examples, I have chosen to use silhouette heads for the imagesand Lorem Ipsum text for the bios.</p>
        <ProfileCard 
          img={man} 
          name="John Smith"
          jobTitle="Manager"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim orci, fermentum at malesuada at, tincidunt ac neque. Vestibulum vulputate eget tellus ac sollicitudin. Donec quis magna non mauris viverra luctus aliquet ac metus. Fusce consequat vestibulum mi eu dictum. Aenean id metus a ipsum luctus commodo ut quis ipsum."
          skills={["Communication", "Problem-solving", "Leadership"]}
        />
        <ProfileCard 
          img={woman}
          name="Jane Doe"
          jobTitle="Head of HR"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim sed lectus sagittis tincidunt id eget risus. Curabitur id nibh rutrum, laoreet neque eu sollicitudin eros. Nam in nunc egestas, porta metus non, mollis diam. Donec accumsan tellus purus, et ultrices est tristique ut."
          skills={["Test skill", "Example 2", "Another example"]}
        />
      </div>
      <div className='Component-Container'>
        <VariableDisplay/>
      </div>
      <div className='Component-Container'>
        <JobBoard/>
      </div>
    </div>
  )
}

function ProfileCard(props) {
  return (
    <div className='Profile-card'>
      <div className='header'>
        <h3>{props.name}</h3>
      </div>
      <div className='skills'>
        <h4>Skills:</h4>
        <p>{props.skills.join(", ")}</p>
      </div>
      <div className='image'>
        <img src={props.img} alt="" />
      </div>
      <div className='content'>
        <div>
          <h3>Job Title: {props.jobTitle}</h3>
          <p>Bio: {props.bio}</p>
        </div>
        <p></p>
      </div>
    </div>
  )
}

function VariableDisplay() {
  let stringVar = "Hello World";
  let numVar = 42;
  let boolVar = true;
  let strArrayVar = ["Element 1", "Element 2", "Another Element"];
  let objVar = {name: "Josh", age: 28, hairColour: "Black"};

  return (
    <div>
      <h2>Variable Display</h2>
      <p>This component is here to showcase the way to make use of variables within JSX, as they need to be inside curled brackets to be read as JavaScript before the value is displayed.</p>
      <p>String Variable: {stringVar}</p>
      <p>Number Variable: {numVar}</p>
      <p>Boolean variable: {boolVar.toString()}</p>
      <p>String Array Variable: {strArrayVar.join(", ")}</p>
      <h3>Object Properties</h3>
      <p>Object Name: {objVar.name}</p>
      <p>Object Age: {objVar.age}</p>
      <p>Object Hair Colour: {objVar.hairColour}</p>
    </div>
  )
}

function JobBoard() {
  let jobCount = Math.floor(Math.random() * 10);
  let companyName = "Lorem Ipsum Ltd.";

  const getJobMessage = () => {
    if (jobCount === 0) {
      return("No Jobs for scheduling today.");
    }
    else if (jobCount > 0 && jobCount <= 5) {
      return(`Number of jobs in the Job Board: ${jobCount}`);
    }
    else {
      return(`There are ${jobCount} jobs in the Job Board, better get scheduling!`);
    }
  }

  const getExpectedJobs = () => {
    if (jobCount === 0) {
      return("No jobs expected next week.");
    }
    else {
      return(`Expected number of Jobs next week: ${Math.ceil(jobCount * 1.5)}`);
    }
  }

  return (
    <div>
      <h2>Job Board</h2>
      <p>This component is set up to showcase the use of JSX expressions and conditional rendering. The number of jobs is randomised upon component loading, in order to demonstrate different conditions.</p>
      <h2>{companyName}</h2>
      <p>{getJobMessage()}</p>
      <p>{getExpectedJobs()}</p>
    </div>
  )
}



export default App;
