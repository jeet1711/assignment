import React,{Component} from 'react';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import './Login.css';

class Login extends Component {

  render(){
    return(
      <div>
        <Nav />
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Start Learning</button>
        </form>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71muFgw3oPL._SL1500_.jpg" align="right" alt="Mobile"/>

      </div>
  );
}
}

export default Login;
