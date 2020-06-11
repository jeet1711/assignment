import React from 'react';
import Page1 from './Page1/Page1';
import Login from './Page1/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import SideDrawer from './SideDrawer/SideDrawer';
import history from './Page1/history';


function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
      <SideDrawer/>
      <Switch>
        <Route path="/" exact component={Page1}/>
        <Route path="/Login" component={Login}/>

      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
