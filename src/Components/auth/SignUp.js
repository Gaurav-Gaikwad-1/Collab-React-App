import React, { Component } from 'react'

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
        console.log(this.state);
    }


    render() {
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
                   
                </form>
                
            </div>
        )
    }
}

export default SignUp;
