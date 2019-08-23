import React, { Component } from 'react';
import './header.css';
import logo_new from '../../kuvat/logo_new.png'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../services/api';

class header extends Component {
  constructor(props){
    super(props);
    this.state = {
      active:[false,false,false,false,false,false,false]
    }
    console.log(this.props)

    if(localStorage.getItem("userData")){
      let Headers = {"Authorization" : "token "+ JSON.parse( localStorage.getItem("userData")).sessionId}
      fetchApi("/webindex", "GET" , {} , Headers)
      .then(response=> {

        console.log(response);
        if(response.data.userData) {
          localStorage.setItem("userData", JSON.stringify(response.data.userData))
          if(this.props.location.pathname == "/login") {
            this.props.history.push("/")
          }
        }
          else{
            this.props.history.push("/login")
            localStorage.removeItem("userData")
          }
          
        
        
        
    })
    }
    else{
      this.props.history.push("/login")
    }
  }

  onLogout=()=>{

    let header = {
        "Authorization" : "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    };
    fetchApi("/logout", "GET", {}, header)
        .then(response=> {
            console.log(response);
            if(response.data.message == "success") {
                localStorage.removeItem("userData")
            }
        });
}

  addActive = (index)=>{
    var activeArray = [];
    for(let i=0;i<=6;i++){
      if(i!=index){
        activeArray.push(false);
      }
      else if(i==index){
        activeArray.push(true);
      }
      
    }
    this.setState({
      active:[...activeArray]
    });
  }
    render() {
        return (
           
              
                    <div id="div_top" className= "padding-30">
                      <div id="div_toprow">
                        <a id="logo" href="index.php">
                         <Link to = "/"> <img src={logo_new} /></Link>
                        </a>
                        <div className="login_info"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tomi Salmi </font></font><br /> <Link to = "/logout" onClick= {this.onLogout}> <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Log out</font></font></Link>
                        </div><div id="menu_level1">
                          <ul className="buttons_navigate">
                            <li className={this.state.active[0]? "selected_item":""} onClick={()=>this.addActive(0)}>
                              <Link to='/timecard/record'><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Time Card</font></font></span></Link>
                            </li>
                            <li className={this.state.active[1]? "selected_item":""} onClick={()=>this.addActive(1)}>
                            <Link to='/clients/customerinfo'><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Clients</font></font></span></Link>
                            </li>
                            <li className={this.state.active[2]? "selected_item":""} onClick={()=>this.addActive(2)}>
                            <Link to='/orders/orderqueue'><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Orders</font></font></span></Link>
                            </li>
                            <li className={this.state.active[3]? "selected_item":""} onClick={()=>this.addActive(3)}>
                              <Link to = "/billing/billable"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billing</font></font></span></Link>
                            </li>
                            <li className={this.state.active[4]? "selected_item":""} onClick={()=>this.addActive(4)}>
                            <Link to = "/storage/warehousemanagement"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Storage</font></font></span></Link>
                            </li>
                            <li className={this.state.active[5]? "selected_item":""} onClick={()=>this.addActive(5)}>
                             <Link to= "/reports/ledgers"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign:   'inherit'}}>Reports</font></font></span></Link>
                            </li>
                            <li className={this.state.active[6]? "selected_item":""} onClick={()=>this.addActive(6)}>
                            <Link to= "/settings/company"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Settings</font></font></span></Link>
                            </li>
                          </ul>
                        </div>
                        <div className="clear" />
                      </div>
                    </div>
                  
        );
    }
}

export default header;