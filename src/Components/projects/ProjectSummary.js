import React from 'react';
import moment from 'moment';


const ProjectSummary = ({project}) => {                                   //Instead of manually puting these 4-5 times for card in project List we create template here and use it in ProjectList
    return (
        <div className='card z-depth 0 project-summary'>
            <div className='card-content white-text'>
                <span className='card-title' id='title'>{project.title}</span>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;