import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login/Login'
import Admin from './components_admin/Admin'
import {DataProvider} from './components_user/Context'
import RoutingApp from './components_admin/RoutingApp'
import User from './components_user/User'
import Laptop from './components_user/section/Laptop'
import Product from './components_user/section/Product'
import RoutingUser from './components_user/RoutingUser'

class App extends Component{
  render(){
    return(
      <DataProvider>
        <div className="App">
          <Router>
            <RoutingApp/>
            {/* <RoutingUser/> */}
          </Router>
        </div>
        </DataProvider>
    );    
  }
}

export default App;
