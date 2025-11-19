import man from './man-silhouette.png';
import woman from './woman-silhouette.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Essentials Site</h1>
        <p>This project is here to demonstrate the use of ReactJS for the creation of a website.</p>
      </header>
      <div>
        <h2>Profile Card component</h2>
        <p>These "Profile Cards" make use of a reusable component, showcasing componenets and their ability to be reused for display purposes. They make use of Props to be able to send through images, names, job titles, and a bio for the person being referenced. Due to these being examples, I have chosen to use silhouette heads for the images and Lorem Ipsum text for the bios.</p>
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
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id enim sed lectus sagittis tincidunt id eget risus. Curabitur id nibh rutrum, laoreet neque eu, sollicitudin eros. Nam in nunc egestas, porta metus non, mollis diam. Donec accumsan tellus purus, et ultrices est tristique ut."
        skills={["Test skill", "Example 2", "Another example"]}
        />
      </div>
    </div>
  );
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

export default App;
