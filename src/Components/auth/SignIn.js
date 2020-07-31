//rce
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/action/authActions';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email:'',
        password:''
    };

    handleChange = (event) => {
        
        this.setState({
            [event.target.id] : event.target.value                               //event.target.id is to know which input field is user changing ie by id email or password
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
    }


    render() {
        const { authError,auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >
                    <h4 className='grey-text'>Log In</h4>
                    <div className='input-field '>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} className='white-text' />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} className='white-text'/>
                    </div>
                    
                    <button className='waves-effect waves-light btn pink lighten-1'>Log In</button>
                    <div className='red-text center'>
                       { authError ? <p>{authError}</p> : null }
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    } 
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
