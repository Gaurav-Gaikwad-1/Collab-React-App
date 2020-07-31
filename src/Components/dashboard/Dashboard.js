//This dashboard which is shown when user has signed in to his account
import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component{
    
     render(){
        //console.log(this.props);
        const {projects,auth,notifications} =this.props;
        if(!auth.uid) return <Redirect to='/signin'  />
         return(
             <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <ProjectList projects={projects}/>
                    </div>
                    <div className='not col s12 m5 offset-m1'>
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
             </div>
         )
     }
}

const mapStatetoProps = (state) =>{
    //console.log(state);
    return{
        projects : state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

//here we r going to connect dashboard component with redux store so down here we use connect() which is a funtn which returns a HOC to 
//take in dashboard so we need to map our state somehow to the props in this component now we do that by creating funtn mapStatetoProps() 
// this functions takes in state of our store which we have aacces to & return down an obj & this obj is gonna represent which properties r attached to 
//to props of this componentso that we can acces them in our component here 

export default compose(
    connect(mapStatetoProps),
    //firestoreConnect(() => ['projects','notifications'] )           //this is used to connect to collection ie projects from firestore
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt','desc']},
        {collection: 'notifications',limit:5,orderBy: ['time','desc']}
    ])
)(Dashboard)

/*
So here we can see the projects that we have in store here in DOM
We connected our redux store and grabbing data inside our dashboard from tat store & we're passing it down
into project list & project summary comp then outputting
*/