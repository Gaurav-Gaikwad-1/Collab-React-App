import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/action/authActions'

class SignUp extends Component {
    state = {
        firstName:'',
        lastName:'',
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
        this.props.signUp(this.state);
    }


    render() {
        const { auth ,authError} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h4 className='grey-text'>Register</h4>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={this.handleChange} className='white-text' />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange={this.handleChange} className='white-text'/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} className='white-text'/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} className='white-text'/>
                    </div>
                    
                    <button className='waves-effect waves-light btn pink lighten-1'>Sign Up</button>
                    <div className='red-text center'>
                       { authError ? <p>{authError}</p> : null }
                    </div>
                   
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
