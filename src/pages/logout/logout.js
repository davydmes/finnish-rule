import React, { Component } from 'react';
import './logout.css';
import {fetchApi} from '../../services/api'



class logout extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginId: "",
            loginPassword: "",
            

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
        let payload = {
            "loginId": this.state.loginId,
            "loginPassword": this.state.loginPassword,
            "rememberMe":false,
            "customerId": localStorage.getItem("customerId"),
            
            

        }
        
        fetchApi("/login/login", "POST", payload)
        .then(response=> {
            
            console.log(response);
            if(response.data.message == "success") {
                localStorage.setItem("userData", JSON.stringify(response.data.userData));
                this.props.history.push('/');
            }
        })
        .catch(err => {
            console.log(err);
        })
        

    }









    render() {
        return (
         
              
                    <div id="login_wrapper">
                      <div id="login_page">
                       <div>
                          <table id="login_table"><input name="customer_id" type="hidden" id="customer_id" defaultValue="neemia" /><tbody><tr>
                                <td>Käyttäjätunnus</td>
                                <td><input autoComplete="off" name="username" type="text" value={this.state.loginId}    onChange= { (e) => {this.setState({loginId: e.target.value})} } id="username" size={20} /></td>
                              </tr>
                              <tr>
                                <td>Salasana</td>
                                <td><input name="password" type="password" value={this.state.loginPassword} onChange={(e)=> {this.setState({loginPassword: e.target.value})}} id="textfield2" size={20} /></td>
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

export default logout;