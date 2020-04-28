import React, { Component } from 'react';
import fire from '../firebase/Conf';
import Admin from './Admin';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav   from './Navbar';

class Main extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        <Router>
        <form>
        <div className="">
        <Nav />
        <Switch>
        <Route   path="/Admin" exact component={Admin}/>
        <botton onClick={this.logout} style={{marginLeft: '25px'}} class="btn btn-danger" >Logout</botton>
        </Switch>
        
        </div>
        </form>  
        </Router>
        );
    }

}

export default Main;