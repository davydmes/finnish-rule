import React, { Component } from 'react';
import './users.css'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import {Link} from 'react-router-dom';

import Table from '../../../components/table';
import { fetchApi } from '../../../services/api';
class Users extends Component {
    constructor(props){
        super(props)

        this.onLoad()
        this.state = {
            head: ["Logo", "Name", "Email Address", "GSM","User Groups"],
            body: [{
              "username": "",
              "name":"",
              "email":"",
              "mobile":"",
              "newRoles": ""
              
            }
            
          ]
          }
        }


        onLoad=()=>{
          let header = {
            authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
          }
          let payload ={
            "username": {}
          }
          let responseData = [];

          fetchApi("/profile/loadUsers", "POST", payload , header)
          .then(response => {
            console.log("ye h resp",response);
            if(response.data.data){
            responseData =  response.data.data.map((obj)=>{
              return({
                "username": <span><Link to ={{pathname: '/settings/users/usercustom', query: obj}} >{obj.username}</Link></span> ,
              "name":<span><Link to ={{pathname: '/settings/users/usercustom', query: obj}} >{obj.userInfo.firstName}</Link></span> ,
              "email":obj.userEmail,
              "mobile":obj.mobile,
              "newRoles": <span>{obj.newRoles.toString()}<Link to = {{pathname: '/useredit', query: {username:obj.username,roles:obj.newRoles}}}>[Edit]</Link></span> 
              })
            });
          }
            console.log("---->  ",responseData);
            this.setState({
              "body" : responseData
            })
          
          })
        }
    
    render() {
        return (
            
              <div className= "padding-30">
             


      <div id="menu_level2">
                        <ul className="buttons_navigate_lvl_2">
                          <li >
                          <Link to= "/settings/company"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Company</font></font></span></Link>
                          </li>
                          <li className="selected_item">
                          <Link to= "/settings/users"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Users</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/työjonohaut"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Työjonohaut</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/pricelist"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price list</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/settings1"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Settings</font></font></span></Link>
                          </li>
                        </ul>
                      </div>
    

                      <Table head={this.state.head} body={this.state.body} heading= "Users"/>

                      
                     
                    </div>

                  );
    }
}

export default Users;