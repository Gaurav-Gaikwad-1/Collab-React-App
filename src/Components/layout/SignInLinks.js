//This component is shown on navbar when user has Signed in to account
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {signOut} from '../../store/action/authActions';


const SignInLinks = (props) => {
        const initials = props.profile.initials;
        return(
            <ul className='right'>
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><a onClick={props.signOut}>Logout</a></li>
                <li><NavLink to='/' className='btn btn-floating pink'>{initials}</NavLink></li>
            </ul>
                
        )
}

const mapsDispatchToProps = (dispatch) => {
        return{
            signOut: () => dispatch(signOut())
        }
}

export default connect(null,mapsDispatchToProps)(SignInLinks);