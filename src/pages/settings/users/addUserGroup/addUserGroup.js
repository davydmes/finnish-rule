import { resolveSoa } from "dns";

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from '../../../../components/table';
import {fetchApi} from '../../../../services/api'


class AddUserGroup extends Component{
constructor(props){
    super(props)

    this.state={
        "role": "",
        "modules":[]
    }
    
    

}

onSave=()=>{

    let header = {
        "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId, 
      }
      let payload={
        "role": this.state.role,
        "modules":[]
      }

      fetchApi("/roles/createRole", "POST", payload, header)
      .then(response => {
        console.log("====>", response.data.success,response.data.data.roleId);
        if(response.data.success && response.data && response.data.data && response.data.data.roleId){
            let header = {
                "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId, 
              }
              let payload={
                "roleId":response.data.data.roleId,
                "modules":this.state.modules
              }

              fetchApi("/roles/updateRightsByModule", "POST", payload, header)
              .then(response => {
                console.log("====>", response);
                if(response.data.success){
                    this.props.history.push("/usergroups")
                }
                else{
                    alert("Error occured");
                }
            },err=>{
                alert("Error occured");
            })
        }
    
    })
}

setKeys=(e,value)=>{
  var modules = this.state.modules;

  if(e.target.checked){
      modules.push(value);
  }
  else{
      var i =  modules.indexOf(value);
      modules.splice(i,1);
  }
  modules = Array.from(new Set(modules));
  this.setState({
      modules:modules
  },()=>{
      console.log(this.state.modules);
  })
}

cancel=()=>{
  this.props.history.push("/usergroups");
}


render(){
  return(
      <div className= "padding-30">
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
      <input className="original_value" type="hidden" name="id" defaultValue={2} />
      <input className="original_value" type="hidden" name="group_name" defaultValue="Käyttäjät" />
      <input className="original_value" type="hidden" name="permission_timecard" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_hourentries_read_own" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_hourentries_read_all" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_hourentries_modify_own" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_hourentries_modify_all" defaultValue={0} />
      <input className="original_value" type="hidden" name="permission_customers" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_orders" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_invoicing" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_stock" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_reports" defaultValue={1} />
      <input className="original_value" type="hidden" name="permission_administration" defaultValue={0} />
      <div className="page_header">
        <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adding a new user group</font></font></h2>
      </div>
      <table id="TABLE_1">
        <tbody><tr>
            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The name of the group</font></font></td>
            <td>
              <input type="text" name="group_name" id="group_name" value={this.state.role} onChange={(e) => { this.setState({ "role": e.target.value }) }}
  
              />
            </td>
          </tr>
          <tr>
            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>permissions</font></font></td>
          </tr>
        </tbody></table>
      <table id="TABLE_2">
        <tbody><tr>
            <td><input type="checkbox" checked={this.state.modules.includes("timecard")} name="permission_timecard" id="permission_timecard"  onChange={(e) => { this.setKeys(  e,"timecard") }}/>
            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> timecard</font></font></td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked={this.state.modules.includes("hourlynotes")} name="permission_hourentries_read_own" id="permission_hourentries_read_own"  onChange={(e) => { this.setKeys(e,"hourlynotes" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> View your hourly notes</font></font></td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked={this.state.modules.includes("vhm")} name="permission_hourentries_read_all" id="permission_hourentries_read_all" onChange={(e) => { this.setKeys( e,"vhm" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> View all hour markers</font></font></td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked={this.state.modules.includes("ehm")} name="permission_hourentries_modify_own" id="permission_hourentries_modify_own"  onChange={(e) => { this.setKeys(  e,"ehm") }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Editing your own hour markers</font></font></td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked={this.state.modules.includes("eahm")} name="permission_hourentries_modify_all" id="permission_hourentries_modify_all" onChange={(e) => { this.setKeys(e,"eahm") }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Editing all hour markers</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("customers")} name="permission_customers" id="permission_customers"  onChange={(e) => { this.setKeys( e, "customers") }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Customers</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("subscriptions")} name="permission_orders" id="permission_orders"  onChange={(e) => { this.setKeys( e,"subscriptions") }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Subscriptions</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("billing")} name="permission_invoicing" id="permission_invoicing"  onChange={(e) => { this.setKeys( e,"billing" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> billing</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("stock")} name="permission_stock" id="permission_stock" onChange={(e) => { this.setKeys( e,"stock" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Stock</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("reports")} name="permission_reports" id="permission_reports" onChange={(e) => { this.setKeys( e,"reports" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Reports</font></font></td>
          </tr>
          <tr>
            <td><input type="checkbox" checked={this.state.modules.includes("maintenance")}  name="permission_administration" id="permission_administration" onChange={(e) => { this.setKeys( e,"maintenance" ) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Maintenance</font></font></td>
          </tr>
          <tr>
            <td>
              <button id="button_save" className="c-save_form basicButton whiteButton noshadow" onClick={this.onSave}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>save</font></font></button>
              <button id="button_cancel_edit" className="c-hide_form basicButton whiteButton noshadow" onClick={this.cancel}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cancel</font></font></button>
            </td>
          </tr>
        </tbody></table>
    </div>
  </div>
  </div>
  )}
  




}
export default AddUserGroup;