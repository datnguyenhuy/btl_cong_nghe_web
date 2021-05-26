import React, {Component} from 'react';
import querystring from 'querystring';
import './login.css'
import {useCookies} from 'react-cookie';
import {WrappedComponet} from 'react';
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

                console.log(res.data.isAdmin);
                if(res.data.isAdmin===0)
                    {
                        this.props.history.push('/user');
                    }
                else this.props.history.push('/admin');
            })
            .catch((error)=>{}
            );

		} catch(e){
            console.log(e);  
		}
    }

    // handleToken = ()=>{
    //     try{
            
    //         axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
    //         let headers = {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 'token': Cookies.get('token')
	// 		};
    //         // axios.get('http://localhost:3000/user','',headers) //,{headers: headers})
    //         axios({
    //             method: 'GET',
    //             url: 'http://localhost:3000/user',
    //             headers: headers
    //         })
    //         .then(res=>{
    //             console.log(res);
    //             if(res.data.isAdmin===0)
    //                 {
    //                     this.setState({redirect:0})
    //                 }
    //             else this.setState({redirect:1})
    //         })
    //         .catch((error)=>{console.log(error)}
    //         );

	// 	} catch(e){
    //         console.log(e);  
	// 	}
    // }

    render(){

    // if (Cookies.get('token')){
    //     this.handleToken();
    // } else {
    //     Cookies.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiIwc250dXluX2RuZzgyQHlhaG9vLmNvbSIsImZ1bGxOYW1lIjoiVGjhur8gSHXhuqVuIETGsMahbmciLCJpc0FkbWluIjoxLCJpYXQiOjE2MjE4NzcxMjQsImV4cCI6MTYyMTg4NzEyNH0.baaKV1CMOJT1JWC0yZgvBngbfvpI-VemrRW96o6Gn-M');
    // }

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
