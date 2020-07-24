import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App blue-grey darken-3">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
