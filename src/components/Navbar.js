import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Navbar(){

    return(
        <nav>
            
            <ul class ="nav-links">
                
                <Link to="/Admin">
                    <h1>JSS Network Company</h1>
                </Link>
                <Link to="">
                    <h2>Logout</h2>
                </Link>
                

            </ul>
        </nav>
    );
}
export default Navbar;