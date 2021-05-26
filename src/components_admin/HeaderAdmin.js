import React, {Component} from 'react'
import './css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    static contextType = DataContext
    render(){
        const {cart} = this.context
        return(
            <header>
                <div className="logo">
                    <h1><Link to="/admin">TĐ TECH SHOP</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/admin">Product Manage</Link></li>
                        <li><Link to="/admin">User Manage</Link></li>                       
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;