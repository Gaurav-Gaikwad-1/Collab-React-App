import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
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
                    <h4 className='grey-text'>Creat New Project</h4>
                    <div className='input-field '>
                        <label htmlFor='title'>Project Title</label>
                        <input type='text' id='title' onChange={this.handleChange} className='white-text' />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <textarea id='content' onChange={this.handleChange} className='materialize-textarea white-text'/>
                    </div>
                    
                    <button className='waves-effect waves-light btn pink lighten-1'>Create Project</button>
                   
                </form>
                
            </div>
        )
    }
}

export default CreateProject;
