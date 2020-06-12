import React,{Component} from 'react';
import './Page1.css';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';


class Page1 extends Component {

  render(){
    return(
      <div>
      <Nav />
      <NavLink to="/Login">
        <button class="working-button">Try free microskill</button>
      </NavLink>
        <button class="download-buttons">Download Android</button>
        <button class="download-buttons">Download ios</button>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71muFgw3oPL._SL1500_.jpg" align="right" alt="Mobile"/>
      </div>
  );
}
}

export default Page1;
