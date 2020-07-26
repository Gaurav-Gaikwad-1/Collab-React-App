//This component is shown on navbar when user has Signed in to account
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
        return(
                <ul className='right'>
                    <li><NavLink to='/create'>New Project</NavLink></li>
                    <li><NavLink to='/'>Logout</NavLink></li>
                    <li><NavLink to='/' className='btn btn-floating pink'>GG</NavLink></li>
                </ul>
        )
}

export default SignInLinks;