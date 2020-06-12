import React,{Component} from 'react';
import Nav from './Nav';
import axios from '../axios';
import './Login.css';

class Login extends Component {

  state = {
    userId: '',
    password: ''
  }

  handleChange = (change) => {
    this.setState({[change.target.name]: change.target.value})
  }

  continueHandler = (e) => {
    e.preventDefault()
    console.log(this.state);
    axios.post('/login.json',this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

  }

  render(){
    return(
      <div>
        <Nav />
        <form onSubmit={this.continueHandler} className="form">
          <input type="text" name="userId" placeholder="Username" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          <button onClick={this.refresh} type="submit">Start Learning</button>
          </form>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71muFgw3oPL._SL1500_.jpg" align="right" alt="Mobile"/>

      </div>
  );
}
}

export default Login;
