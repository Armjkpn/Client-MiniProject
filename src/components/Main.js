import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav   from './MainNav';
import StaffList from './List'
import AddJss from './AddJss'

class Main extends Component {

    render() {
        return (
        <Router>
        <div>
        <Nav />
        <h2>JSS Network Family</h2>
        <StaffList/>  
        <AddJss/>
        </div>
        </Router>
        );
    }

}

export default Main;
