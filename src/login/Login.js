import React, {Component} from 'react';
import querystring from 'querystring';
import './login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios'
import Admin from '../components_admin/Admin';
import User from '../components_user/User';
import Cookies from 'js-cookie';
export default class Login extends Component{
    state={
     username:"",
     password:"",
	}

    handleChange=(event)=>{
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit= (event)=>{
        event.preventDefault();

        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        try{
            console.log(this.state.username);
            let body = {
                email: this.state.username,
                password: this.state.password
            };
            let headers = {
                    'Access-Control-Allow-Origin': '*'
			};
            body = querystring.stringify(body);
            axios.post('http://localhost:3000/signin',body,headers)
            .then(res=>{

                // save token
                Cookies.set('token',res.data.token);
                console.log("saved token ",res.data.token);
                if(res.data.isAdmin===0)
                    {
                        this.props.history.push('/user');
                    }
                else this.props.history.push('/admin');
            })
            .catch((error)=>{
                alert('Đăng nhập không thành công. Vui lòng đăng nhập lại !');
                this.props.history.push('/');
            }
            );

		} catch(e){
            console.log(e);  
		}
    }


    render(){

     return(
      <div className='login'>
          <label id='log'>LOGIN</label>

        <form onSubmit={this.handleSubmit}>

            <br></br>

            <div id='userpass'>
            <label>
                Username:
                <input id='user' type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
            </label>

            <br></br>

            <label>
                Password : 
                <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
            </label>
            </div>

            <br></br>

            <input id='button' type='submit' value='Login'/>
        </form>
     </div>
	 )
	}
}
