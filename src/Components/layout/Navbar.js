import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth,profile } = props;
    //console.log(auth);
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks />;
    return(
        <nav className='nav-wrapper'>
            <div className='container'>
                <Link to='/' className='brand-logo left' id='apptitle'>Bloggers</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);