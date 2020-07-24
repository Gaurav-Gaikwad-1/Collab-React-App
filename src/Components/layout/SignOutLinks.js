//This component is shown on navbar when user has Signed in to account
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
        return(
                <ul className='right'>
                    <li><NavLink to='/'>Sign In</NavLink></li>
                    <li><NavLink to='/'>Sign Up</NavLink></li>
                </ul>
        )
}

export default SignOutLinks;