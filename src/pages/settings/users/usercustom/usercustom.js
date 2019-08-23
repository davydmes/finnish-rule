import React, { Component } from 'react';
import './usercustom.js'
import { fetchApi } from '../../../../services/api'

class usercustom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      userInfo: {}
    }
  }


  componentDidMount() {
    if (this.props.location && this.props.location.query) {
      console.log(this.props.location.query);
      var quObj = this.props.location.query;

      this.setState({
        data: quObj,
        userInfo: {
          "name": quObj.userInfo.firstName,
          "street": quObj.userInfo.area,
          "zip": quObj.userInfo.pincode,
          "postOffice": quObj.userInfo.postOffice,
          "accountNumber": quObj.userInfo.accountNumber,
          "taxRate": quObj.userInfo.taxRate,
          "language": quObj.userInfo.language,

        }
      }, () => {
        console.log("setstate", this.state.userInfo)
      })
    }
  }

  

  onSave = () => {

    let header = {
      "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId,
    }
    let payload = {

      "userId": this.state.data.userId,
      "username": this.state.data.username,
      "userEmail": this.state.data.userEmail,
      "oldPassword": this.state.oldPassword,
      "password": this.state.password,
      "mobile": this.state.data.mobile,
      "name": this.state.userInfo.name,
      "street": this.state.userInfo.street,
      "zip": this.state.userInfo.zip,
      "postOffice": this.state.userInfo.postOffice,
      "accountNumber": this.state.userInfo.accountNumber,
      "language": this.state.userInfo.language,
      "taxRate": this.state.userInfo.taxRate
    }


    fetchApi("/profile/updateProfileData", "POST", payload, header)
      .then(response => {
        console.log("fetch ho gayi", response);
        console.log(this.state.userInfo, this.state.data)
        this.props.history.push("/settings/users")




      })
  }


  onCancel = ()=>{
      this.props.history.push("/settings/users")
  }

  onDelete = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "userId": this.state.data.userId
    }

    fetchApi("/profile/deleteUser", "POST", payload, header)
      .then(response => {
        if (response.data.message == "success") {
          this.props.history.push("/settings/users")
        }




      })
  }

  setKeys = (e, key) => {
    var userInfo1 = this.state.userInfo
    userInfo1[key] = e.target.value
    this.setState({
      userInfo: userInfo1
    })
  }

  setValue=(e, key)=>{
    var data1 = this.state.data
    data1[key]= e.target.value
    this.setState({
      data: data1
    })
  }






  render() {
    return (


      <div className="popup" className="padding-30">

        <input type="hidden" name="id" defaultValue={28} />
        <table style={{ border: '1px solid black', marginLeft: 'auto', marginRight: 'auto' }} align="center">
          <tbody><tr bgcolor="#525252" height="25px">
            <td className="blue" colSpan={2}><div align="center" className="valkonenteksti"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>User customization</font></font></strong></div></td>
          </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>User name</font></font></td>
              <td><input type="text" name="username" size={25} value={this.state.data.username} onChange={(e) => { this.setValue(( e,"username" ) )}} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Name</font></font></td>
              <td><input type="text" name="nimi" size={25} value={this.state.userInfo.name} onChange={(e) => { this.setKeys(e, "name") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Mobile phone</font></font></td>
              <td><input type="text" name="gsm" size={15} value={this.state.data.mobile} onChange={(e) => { this.setValue( e,"mobile")}} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>E-mail</font></font></td>
              <td><input type="text" name="email" size={25} value={this.state.data.userEmail} onChange={(e) => { this.setValue(e,"userEmail" ) }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Street address</font></font></td>
              <td><input type="text" name="katuosoite" size={25} value={this.state.userInfo.street} onChange={(e) => { this.setKeys(e, "street") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>ZIP code</font></font></td>
              <td><input type="text" name="postinro" size={10} value={this.state.userInfo.zip} onChange={(e) => { this.setKeys(e, "zip") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Post office</font></font></td>
              <td><input type="text" name="postitoimipaikka" size={15} value={this.state.userInfo.postOffice} onChange={(e) => { this.setKeys(e, "postOffice") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Account number</font></font></td>
              <td><input type="text" name="tilinumero" size={25} value={this.state.userInfo.accountNumber} onChange={(e) => { this.setKeys(e, "accountNumber") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>tax rate</font></font></td>
              <td><input type="text" name="veroprosentti" size={15} value={this.state.userInfo.taxRate} onChange={(e) => { this.setKeys(e, "taxRate") }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Language</font></font></td>
              <td>
                <select name="lang" value={this.state.userInfo.language} onChange={(e) => { this.setKeys(e, "language") }}>
                  <option value="fin" selected>Finnish</option>
                  <option value="eng">english</option>
                  <option value="swe">Sweden</option>
                  <option value="ger">Deutsch</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="hd"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Change Password:</font></font></strong></td>
              <td />
            </tr><tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Old password</font></font></td>
              <td><input type="password" name="old_password" size={10} onChange={(e) => { this.setValue(  e,"oldPassword" ) }} /></td>
            </tr><tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Password</font></font></td>
              <td><input type="password" name="new_password" size={10} onChange={(e) => { this.setValue(  e,"password" ) }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Password again</font></font></td>
              <td><input type="password" name="new_password2" size={10} onChange={(e) => { this.setValue(  e,"password" ) }} /></td>
            </tr>
          </tbody></table>
        <table align="center" style={{ border: '0px solid black', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
          <tbody><tr>
            <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" name="submit_muokkaus" id="submit_muokkaus" value="save" onClick={this.onSave} /></font></font></td>
            <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" value="Bracket" onClick={this.onCancel} /></font></font></td>
          </tr>
            <tr>
              <td colSpan={2} style={{ paddingTop: '10px' }}>

                
             <input type="submit" name="submit_poista" value="Delete the user" onClick={this.onDelete} />

              </td>
            </tr>
          </tbody></table>
      </div>

    );
  }
}

export default usercustom;