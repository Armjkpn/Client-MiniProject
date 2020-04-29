import React, { Component } from 'react';
import fire from '../firebase/Config';
import './Login.css';
import {Link} from 'react-router-dom';

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return(
      <nav>
          <h1> JSS Network Company</h1>
          <ul className ="nav-links">

              <Link to="/">
                  <li><h4 class="btn btn-danger">Home</h4></li>
              </Link>
              <Link to="">
                  <li><h4 onClick={this.logout}  >Logout</h4></li>
              </Link>

          </ul>
      </nav>
  );
}
}

export default MainNav;
