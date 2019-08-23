import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../services/api'

class UserEdit extends Component{
    constructor(props){
        super(props)
        this.onLoad();

this.state={
    "alldata":[],
    "roles":[],
    "username":""
}
        
     }
     componentDidMount(){
        if(this.props.location.query){
          var quObj = this.props.location.query;
          console.log("kjhhjhj",quObj)
        this.setState({
            roles: quObj.roles,
            username: quObj.username

        },()=>{
            
        })
        }
    }

    onCancel=()=>{
        this.props.history.push("/settings/users")
    }
          


     onLoad=()=>{
    
        let header = {
            "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId, 
          }
          fetchApi("/roles/loadRoles", "GET", {}, header)
          .then(response => {
           
            var data1 = response.data;
           
            if(data1 && data1.length>0){
            this.setState({
                alldata: data1
            }
            )      
  }})}
  onSave=()=>{
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload={
        "username": this.state.username,
        "roles": this.state.roles
       
    }

    fetchApi("/roles/assignRoles", "POST", payload , header )
  .then(response => {
  console.log("assign waali",response);
  if(response.data.message== "success"){
      this.props.history.push("/settings/users")
  }
  })
}

tickThis=(e,value)=>{
    var roles = this.state.roles;

    if(e.target.checked){
        roles.push(value.role);
    }
    else{
        var i =  roles.indexOf(value.role);
        roles.splice(i,1);
    }
    this.setState({
        roles:roles
    },()=>{
        console.log(this.state.roles);
    })
}

    render(){
        return(
     <div id="div_innercontent">
     {/* Submenu. */}
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
     {/* Notification */}
     {/* Content. */}


     <div id="div_content">
       <input className="original_value" type="hidden" name="id" defaultValue={61} />
       <div className="page_header">
         <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>user groups</font></font></h2>
       </div>
       <table id="TABLE_1">
         <tbody><tr>
             <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>User</font></font></td>
             <td><b><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kiia Suvanen</font></font></b></td>
           </tr>
           <tr>
             <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>user groups</font></font></td>
           </tr>
         </tbody></table>

        
       <table id="TABLE_2">
       {this.state.alldata.map((value)=>{
           return(
                <tr>
                <td><input type="checkbox" checked={this.state.roles.includes(value.role)} name="membership_group_1" id="membership_group_1" onChange={(e)=>{this.tickThis(e,value)}} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> {value.role}</font></font></td>
              </tr>
       )})}
            </table>
           
           <tr>
             <td>
               <button id="button_save" className="c-save_form basicButton whiteButton noshadow" onClick={this.onSave}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>save</font></font></button>
               <button id="button_cancel_edit" className="c-hide_form basicButton whiteButton noshadow" onClick={this.onCancel}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cancel</font></font></button>
             </td>
           </tr>
      
     </div>
   </div>
   
    
        )}
    
    
    }
    export default UserEdit;