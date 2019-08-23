import { resolveSoa } from "dns";

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Table from '../../../../components/table';
import {fetchApi} from '../../../../services/api'


class Usergroups extends Component{
constructor(props){
    super(props)
    this.onLoad();
    

    this.state={
    head:["The name of the user group"],
    data:[]
    }

}




onLoad=()=>{
    
    let header = {
        "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId
      }
      fetchApi("/roles/loadRoles", "GET", {}, header)
      .then(response => {
        console.log("====>", response);
        var roles = [] 
        let data1=[]
        data1 = response.data
       
        if(data1 && data1.length>0){
        data1.map((value)=>{
        roles.push({"role":<Link to={{pathname: "/editinguser", query: value}} >{value.role}</Link>})
            
        })
        this.setState({
        data: roles
        })
}
  
}

)


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
   
    <Table head={this.state.head} body={this.state.data} heading="User Groups" />
  </div>
</div>
</div>
)}




}
export default Usergroups;