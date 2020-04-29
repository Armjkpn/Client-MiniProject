import React, { Component } from 'react';
import fire from '../firebase/Config';
import "./Login.css"
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div class ="login">
        <div class="login2">
            <h1 >JSS Network Company</h1><hr />
            <h2>Login</h2>
          <input 
              value={this.state.email}  
              type="email" 
              name="email"  
              placeholder="Email address"
              style={{ width: "60%"}}
              class="form-control"
              onChange={this.handleChange}
          />
      
        <input 
            value={this.state.password} 
            type="password" 
            name="password"  
            placeholder="Password"
            style={{ width: "60%", marginTop: "20px"}}
            class="form-control"
            onChange={this.handleChange}  
        /><br /> 
    
      <button 
          type="button" 
          onClick={this.login}
          class="form-control2"
          style={{ width: "30%", marginTop: "15px" }}>
            Login
      </button><br />

      <button
          type="button" 
          onClick={this.signup}
          class="form-control3" 
          style={{ width: "30%", marginTop: "15px" }}>
            Register
      </button><br /><hr />
      <h4 >Login with facebook :</h4>
      <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
      </div>
    </div>
    );
  } 
}

export default Login;
