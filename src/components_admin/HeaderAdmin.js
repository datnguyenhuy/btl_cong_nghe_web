import React, {Component} from 'react'
import './css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cookie from 'js-cookie';
import axios from 'axios';

class Header extends Component{
    static contextType = DataContext

    state={
        name:[]
    }

    getInfo=()=>{

        if(Cookie.get('token') != null)
        {
            let header={
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': Cookie.get('token')
            }
    
            axios.get('http://localhost:3000/user',{headers:header})
            .then(res=>this.setState({name:res.data.fullName}))
            .catch(error=>console.log(error));
        }
    }

    render(){
        const {cart} = this.context

        
        this.getInfo();

        return(
            <header>
                <div className="logo">
                    <h1><Link to="/admin">TĐ TECH SHOP</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/admin">Product Manage</Link></li>
                        <li><Link to="/admin">User Manage</Link></li> 
                        <li id='name'>{this.state.name}</li>                  
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;