import '../App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderAdmin from './HeaderAdmin'
import SectionProduct from './section/RoutingAdmin'
import {DataProvider} from './Context.js'

import Cookies from 'js-cookie';
export default class Admin extends Component{
  render(){
    console.log("admin token ",Cookies.get('token'));
    return(
        <DataProvider>
        <div className="admin">
              <Router>
                  <HeaderAdmin/>
                  <SectionProduct/>
              </Router>
        </div>
        </DataProvider>
    );    
  }
}

