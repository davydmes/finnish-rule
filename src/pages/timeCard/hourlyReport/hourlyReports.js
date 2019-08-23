import React from 'react';
import './hourlyReports.css';
import {Component} from 'react'
import {fetchApi} from '../../../services/api'

import { Link } from 'react-router-dom';


class hourlyReports extends Component{
  constructor(props) {
    super(props)
    this.onReport();


    this.state = {
      time: []
    }
  }


  onReport = ()=>{
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

  fetchApi("/checkin/hourlyreports", "GET", {} , header )
  .then(response => {
    if(response.data.success) {
      this.setState({time: response.data.data})
      
    }
    console.log(response);
  })
  }
  render(){
    return (
      
          <div>

        
                <div id="div_innercontent" className= "padding-30">
                  {/* Submenu. */}
                  <div id="menu_level2">
                    <ul className="buttons_navigate_lvl_2">
                      <li>
                        <Link to = "/timecard/record"><span>Työajan kirjaus</span></Link>
                      </li>
                      <li>
                        <Link to = "/timecard/hourspecification"><span>Tuntierittely</span></Link>
                      </li>
                      <li className="selected_item">
                        <Link to="/timecard/hourlyreport"><span>Tuntiraportit</span></Link>

                         </li>
                    </ul>
                  </div>
                  {/* Notification */}
                  {/* Content. */}
                  <div id="div_content">
                    <div className="page_header">
                    <h2>
                    <font style={{verticalAlign: 'inherit'}}>
                    <font style={{verticalAlign: 'inherit'}}>Hourly reports</font>
                    </font>
                    </h2>
                    </div>
                    <table width={594} border={1} id="TABLE_1">
                      <tbody>

                      <tr>
                          <td>
                          
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Worker</font>
                          </font>
                          </td>
                            
                            
                          {this.state.time.map(value =>{
                            return(
                        
                          <td>
                          <Link to = "/timecard/hourspecification">

                                
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>{value.userData?value.userData.username:""}</font>
                          </font>
                          </Link>
                          </td>
                            )
                          })}
                         
                        
                         
                          <td>
                          </td></tr>
                        <tr>



                          <td>
                          
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Working hours this month</font>
                          </font>
                          </td>

                          <td>
                            {this.state.time.map(value=>{
                              return(<font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>{value.thisMonth}</font>
                          </font>)
                            })}
                          
                          </td>

                          
                          </tr>

                        <tr>
                          <td>
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Working hours last month</font>
                          </font>
                          </td>


                          <td>
                          {this.state.time.map(value=>{
                              return(<font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>{value.lastMonth}</font>
                          </font>)
                            })}
                          </td>



                         </tr>


                        <tr>
                          <td>
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Working hours this week</font>
                          </font>
                          </td>
                          
                          <td>
                          {this.state.time.map(value=>{
                              return(<font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>{value.thisWeek}</font>
                          </font>)
                            })}
                          </td>

                        
                        </tr>

                        <tr>
                          <td>
                          <font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>Working hours last week</font>
                          </font>
                          </td>

                          <td>
                          {this.state.time.map(value=>{
                              return(<font style={{verticalAlign: 'inherit'}}>
                          <font style={{verticalAlign: 'inherit'}}>{value.lastWeek}</font>
                          </font>)
                            })}
                          </td>

                         
                          
                         
                        </tr>
                      </tbody></table></div>
                </div>
                
                </div>
              );
            }
};

export default hourlyReports;