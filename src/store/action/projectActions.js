import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export const createProject = (project) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        //make async call to database
        const firestore= getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,                                              //so project we get here is from props which contains the state of project including title,content so we r spreading it
            authorFirstName: profile.firstName,
            authorLastName:profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then( ()=>{                                                   //we r putting dispatch method in then method bcoz firestore.add is asyn call which weill take time & we dont want to dispatch the function so here we do only if data is added then call dispatch action
            dispatch({ type:'CREATE_PROJECT', project });
          }).catch((err)=>{
            dispatch({ type:'CREATE_PROJECT_ERROR', err});
          })
        
    }
};
//here we destructure getfirebase getfirestore bt they did not kow abt the project so we need to tell this getFirestore,getFirebase which we have imported in index.js
//from index.js to connect with our firebase project config

//here we return a function we use thunk to do that we get acces tio dispatch getstate & inside {getFirebase,getFirestore} we r pausing dispatch
//while we do this asynchronous stuff  so we r getting firestore then we r adding a new document to projects collection based on the prohject that we
//recieve from the state of createproject component so this adding of data is async so it takes time so we r adding then method  & then fires a dispatch 
//when its complete
//now go to projectReducer