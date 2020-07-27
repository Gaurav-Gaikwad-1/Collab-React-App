import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export const createProject = (project) => {
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        //make async call to database
        const firestore= getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'net',
            authorLastName:'ninja',
            authorId:12345,
            createdAt: new Date()
        }).then( ()=>{
            dispatch({ type:'CREATE_PROJECT', project });
          }).catch((err)=>{
            dispatch({ type:'CREATE_PROJECT_ERROR', err});
          })
        
    }
};

//here we return a function we use thunk to do that we get acces tio dispatch getstate & inside {getFirebase,getFirestore} we r pausing dispatch
//while we do this asynchronous stuff  so we r getting firestore then we r adding a new document to projects collection based on the prohject that we
//recieve from the state of createproject component so this adding of data is async so it takes time so we r adding then method  & then fires a dispatch 
//when its complete
//now go to projectReducer