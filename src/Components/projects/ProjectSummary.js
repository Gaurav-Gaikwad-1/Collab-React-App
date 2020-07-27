import React from 'react';

const ProjectSummary = ({project}) => {                                   //Instead of manually puting these 4-5 times for card in project List we create template here and use it in ProjectList
    return (
        <div className='card z-depth 0 project-summary'>
            <div className='card-content'>
                <span className='card-title'>{project.title}</span>
                <p>Posted by net Ninja</p>
                <p>At wednesday 12:30pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;