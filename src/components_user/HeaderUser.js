import React, {Component} from 'react'
import '../components_admin/css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class HeaderUser extends Component{
    static contextType = DataContext
    render(){
        const {cart} = this.context
        return(
            <header>
                <div className="logo">
                    <h1><Link to="/user">TĐ TECH SHOP</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/user/laptop">Laptop</Link></li>
                        <li><Link to="/user/phone">Phone</Link></li>
                        <li><Link to="/user/pc">PC</Link></li>                
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderUser;
