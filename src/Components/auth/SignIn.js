//rce
import React, { Component } from 'react'

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
        console.log(this.state);
    }


    render() {
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
                   
                </form>
                
            </div>
        )
    }
}

export default SignIn;
