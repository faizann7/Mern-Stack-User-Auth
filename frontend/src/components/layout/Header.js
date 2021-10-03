import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

class Header extends Component {
   
    render() { 
        return ( 
            <header className="header">
                {/* <Link to="/"><h1 className="title">Web Dev</h1></Link> */}
                <Link className="navbar-brand" to={"/"}>Web Dev</Link>
                <AuthOptions />
            </header>
         );
    }
}
 
export default Header;