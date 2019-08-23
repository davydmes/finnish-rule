import React, { Component } from 'react';
import { fetchApi } from "../../../../services/api";

class addNewUser extends Component {
    constructor(props){
        super(props)

        this.state ={
        "username":"",
        "useremail":"",
        "password":"",
        "mobile":"",
        "name":"",
        "street":"",
        "zip":"",
        "postOffice":"",
        "accountNumber":"",
        "language":"",
        "taxRate":""
        }
    }


    onMore=()=>{
        let Header = {
            authorization: "token " + JSON.parse( localStorage.getItem("userData")).sessionId
        }

        let payload = {
        "username":this.state.username,
        "useremail":this.state.usermail,
        "password":this.state.password,
        "mobile":this.state.mobile,
        "name":this.state.name,
        "street":this.state.street,
        "zip":this.state.zip,
        "postOffice":this.state.postOffice,
        "accountNumber":this.state.accountNumber,
        "language":this.state.language,
        "taxRate" : this.state.taxRate
        }


        fetchApi("/signup/addUser", "POST", payload, Header)
        .then(response=> {
            console.log(response);
            if(response.data.message == "success") {
                this.props.history.push("/settings/users")
            }
            else  {
                this.setState({errorMsg: response.data.message})
       }
                
    })
}

    render() {
        return (
 <div className="popup">
  <div>
    <table style={{border: '1px solid black', marginLeft: 'auto', marginRight: 'auto'}} align="center">
      <tbody><tr bgcolor="#525252" height="25px">
          <td className="blue" colSpan={2}><div align="center" className="valkonenteksti">
              <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new user</font></font></strong>
            </div></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>User name</font></font></td>
          <td><input type="text" name="username" value= {this.state.username} onChange={(e)=> {this.setState({username: e.target.value})}} size={25} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name</font></font></td>
          <td><input type="text" name="nimi" size={25} value= {this.state.name} onChange= {(e)=>{this.setState({name: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mobile phone</font></font></td>
          <td><input type="text" name="gsm" size={15} value= {this.state.mobile} onChange= {(e)=> {this.setState({mobile: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>E-mail</font></font></td>
          <td><input type="text" name="email" size={25} value= {this.state.useremail} onChange={(e)=>{this.setState({useremail: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Street address</font></font></td>
          <td><input type="text" name="katuosoite" size={25} value={this.state.street} onChange= {(e)=> {this.setState({street: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>ZIP code</font></font></td>
          <td><input type="text" name="postinro" size={10} value={this.state.zip} onChange={(e)=>{this.setState({zip: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Post office</font></font></td>
          <td><input type="text" name="postitoimipaikka" size={15} value={this.state.postOffice} onChange={(e)=> {this.setState({postOffice: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Account number</font></font></td>
          <td><input type="text" name="tilinumero" size={25} value={this.state.accountNumber} onChange={(e)=>{this.setState({accountNumber: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>tax rate</font></font></td>
          <td><input type="text" name="veroprosentti" size={15} value={this.state.taxRate} onChange={(e)=>{this.setState({taxRate: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Language</font></font></td>
          <td>
            <select name="lang" onChange= {(e)=>{this.setState({language: e.target.value})}}><option value="fin">Finnish</option><option value="eng">english</option><option value="swe">Sweden</option><option value="ger">Deutsch</option></select>
            
          </td>
         
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Password</font></font></td>
          <td><input type="password" name="new_password" size={10} value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}} /></td>
        </tr>
        <tr>
          <td className="hd"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Password again</font></font></td>
          <td><input type="password" name="new_password2" size={10}  value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}}/></td>
        </tr>
      </tbody></table>
    <table align="center" style={{border: '0px solid black', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
      <tbody><tr>
          <td>
          <font style={{verticalAlign: 'inherit'}}>
          <font style={{verticalAlign: 'inherit'}}>
          <button name="submit_uusi" id="submit_uusi" onClick = {this.onMore} >More</button>
          </font>
          </font>
          </td>
          <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><button type="submit" Value="Bracket" onclick="if(confirm('Kaikki tallentamattomat muutokset menetetään! Jatka?'))window.close();return false;" >Brackets</button></font></font></td>
        </tr>
      </tbody></table>
  </div></div>

        );
    }
}

export default addNewUser;