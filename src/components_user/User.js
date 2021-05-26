import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderUser from './HeaderUser'
import RoutingUser from './RoutingUser'
import {DataProvider} from './Context.js'

export default class User extends Component{
    render(){
      return(
          <DataProvider>
          <div className="user">
                <Router>
                    <HeaderUser/>
                    <RoutingUser/>
                </Router>
          </div>
          </DataProvider>
      );    
    }
  }