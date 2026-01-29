
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ModuleEightPage() {
    return (
        <div>
            <h1>Module 8: Password Generator App</h1>
            <div className='Component-Container'>
                <h2>Password Generator</h2>
                <p>
                    The Password Generator has been created as a separate project at my <a className='App-link' href="" target='_blank'>password-gen-project</a><a className='App-link' href="" target="_blank"><FontAwesomeIcon icon={faGithub}/></a> based on the lessons and practical activities provided within module 8 of the ITOL React Essentials course.
                </p>
            </div>
        </div>
    );
}

export default ModuleEightPage;