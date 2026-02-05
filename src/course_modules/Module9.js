import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ModuleNinePage() {
    return (
        <div>
            <h1>Module 9&10: Movie Review App</h1>
            <div className='Component-Container'>
                <h2>Password Generator</h2>
                <p>
                    The Movie Review App has been created as a separate project at my <a className='App-link' href="https://reflectiongolden.github.io/movie-review-project/" target='_blank'>movie-review-project</a><a className='App-link' href="https://github.com/ReflectionGolden/movie-review-project" target="_blank"><FontAwesomeIcon icon={faGithub}/></a> based on the lessons and practical activities provided within module 9 of the ITOL React Essentials course.
                </p>
            </div>
        </div>
    );
}

export default ModuleNinePage;