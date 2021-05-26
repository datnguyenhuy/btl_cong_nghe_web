import React , {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Product from './Product'
import Detail from './Detail'


class RoutingAdmin extends Component{
    render(){
        return(
            <section>
                <Switch>
                <Route path="/" component={Product} exact></Route>
                <Route path="/admin" component={Product} exact></Route>
                <Route path="/admin/:id" component={Detail}></Route>
                </Switch>
            </section>
        );
    }
}
export default RoutingAdmin;