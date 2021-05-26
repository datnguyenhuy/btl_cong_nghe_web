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

export default class Admin extends Component{
  render(){
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

