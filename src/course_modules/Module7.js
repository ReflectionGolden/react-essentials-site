
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ModuleSevenPage() {
    return (
        <div>
            <h1>Module 7: Investment Calculator App</h1>
            <div className='Component-Container'>
                <h2>Investment Calculator</h2>
                <p>
                    The Investment Calculator has been created as a separate project at my <a className='App-link' href="https://reflectiongolden.github.io/investment-calc-project/" target='_blank'>investment-calc-project</a><a className='App-link' href="https://github.com/ReflectionGolden/investment-calc-project" target="_blank"><FontAwesomeIcon icon={faGithub}/></a> based on the skeleton app provided within the ITOL React Essentials course, provided within the practical activity following Module 6 Lesson 7, and following the lessons and practical activities within Module 7.
                </p>
            </div>
        </div>
    );
}

export default ModuleSevenPage;