//THIS SECTION WILL BE ON DASHBOARD WITH NOTIFICATION
import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>
            { projects && projects.map(project => {
                return(
                    <Link to={`/project/${project.id}`}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                    
                )
            })}
        </div>
    )
}

export default ProjectList;
//here we recieve props inside this components called from dashboard we use  destructuring to directly grab projects and grab  projects property
//that we recieve inside this component and then we can cyle through this projects and output them one by one by passing into  Project Summary