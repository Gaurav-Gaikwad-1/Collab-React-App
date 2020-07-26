import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from './Components/projects/CreateProject';//grey darken-4">

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/projects/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
