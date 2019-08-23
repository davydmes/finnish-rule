import React, { Component } from 'react';
import './login.css'
import axios from 'axios'
import { fetchApi } from '../../services/api';


class login extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginId: "",
            loginPassword: "",
            status: "",
            customerId: "",

        }

       
    }

    componentDidMount() {
        let div_top = document.getElementById("div_top");
        div_top.style.display = 'none';
    }

    componentWillUnmount() {
        let div_top = document.getElementById("div_top");
        div_top.style.display = 'block';
    }

    onLogin= () =>{
        let header ={
            "uuid":Math.random().toString(10).substr(2)
        } 
        
        
        if(this.state.loginId !== "" && this.state.loginPassword !=="" && this.state.customerId != "" ){
            // let header = {"uuid" : ((Math.random()+1.25)*200.675 + "-ABCD").toString()}
        let payload = {
            "loginId": this.state.loginId,
            "loginPassword": this.state.loginPassword,
            "rememberMe":false,
            "customerId": this.state.customerId
        }
        fetchApi("/login/login", "POST", payload, header)
        .then(response=> {
            console.log(response);
            if(response.data.message == "success") {
                var d = response.data.userData;
                console.log(d.settings.paybackOptions);
                d.settings.paybackOptions = d.settings.paybackOptions.toString();
                localStorage.setItem("userData", JSON.stringify(d));
                localStorage.setItem("customerId", payload.customerId);
                this.props.history.push('/');
            }
           else  {
                    this.setState({errorMsg: response.data.message})
           }
            


        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
else{
    this.setState({errorMsg: "Username/Password cannnot be empty"})
}}
    render() {
        return (
            
              
                    <div id="login_wrapper">
                      <div id="login_page">
                        <div>
                        <div className="positioning">
                              <p className= "statusCheck"> {this.state.errorMsg} </p></div>
                          <table id="login_table"><tbody><tr>
                                <td>Asiakastunnus</td>
                                <td><input autoComplete="off" value= {this.state.customerId} onChange={(e)=>{this.setState({customerId: e.target.value})}}  name="customer_id" type="text" id="customer_id" size={20} /></td>
                              </tr><tr>
                                <td>Käyttäjätunnus</td>
                                <td><input autoComplete="off" value={this.state.loginId} onChange={(e) => {this.setState({loginId: e.target.value})}} name="username" type="text" id="username" size={20} />
                                </td>
                              </tr>
                              
                              <tr>
                                <td>Salasana</td>
                                <td><input name="password"  value={this.state.loginPassword} onChange={(e) => {this.setState({loginPassword: e.target.value})}} type="password" id="textfield2" size={20} /></td>
                              </tr>
                              <tr>
                                <td />
                                <td><button id="kirjaudu" type="submit" name="kirjaudu" onClick={this.onLogin} className="basicButton whiteButton">Kirjaudu</button></td>
                              </tr>
                            </tbody></table>
                        </div>
                      </div>
                    </div>
                  
        );
    }
}

export default login;