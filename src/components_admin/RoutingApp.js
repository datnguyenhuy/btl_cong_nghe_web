import React , {Component} from 'react'
import './css/Section.css'
import {Route, Switch} from 'react-router-dom'
import Admin from './Admin'
import User from '../components_user/User'
import Login from '../login/Login'


class Section extends Component{
    render(){
        return(
            <section>
                <Switch>
                <Route path="/" component={Login} exact></Route>
                {/* <Route path="/productmanage" component={Product} exact></Route>
                <Route path="/productmanage/:id" component={Detail}></Route> */}
                <Route path="/admin" component={Admin} exact></Route>
                <Route path="/user" component={User} exact></Route>
                </Switch>
            </section>
        );
    }
}
export default Section;