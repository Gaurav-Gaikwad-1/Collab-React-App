import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer;

//so in background this firestore reducer is automstically sink this property on state obj to our data in database is going to retrieve
//that data for us & that data is going to be dependent on which component is currently active at that time & what data that component needs
//that is the data tat will be synced in state y this reducer

//now second step is to connect a component with final collection so we have firestore rducer which will sink our firestore data with store state but we also
//need to say inside our component that we want to connect to a certain collection inside firestore database