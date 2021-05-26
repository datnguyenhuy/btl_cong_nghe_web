import React , {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Product from './section/Product'
import Laptop from './section/Laptop'
import Phone from './section/Phone'
import PC from './section/PC'
import Detail from './section/Detail'


class RoutingUser extends Component{
    render(){
        return(
            <section>
                <Switch>
                <Route path="/user/phone" component={Phone} exact></Route>
                <Route path="/user" component={Product} exact></Route>
                <Route path="/user/product/:id" component={Detail} exact></Route>
                <Route path="/user/laptop" component={Laptop} exact></Route>
                
                <Route path="/user/pc" component={PC} exact></Route>
                </Switch>
            </section>
        );
    }
}
export default RoutingUser;