import React from 'react';

const ProjectDetails = () => {
    return(
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title</span>
                    <p>lorem Here you can add a card that reveals more information once clicked. Just add the card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.</p>
                    <div class="card-action">
                        <div>Posted by net Ninja</div>
                        <div>At wednesday 12:30pm</div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;