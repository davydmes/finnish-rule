import React from 'react';
import './recording.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import {fetchApi} from '../../../services/api'
import {Component} from 'react'


class recording extends Component{
  constructor(props) {
    super(props);
      this.onRecord();

    this.state = {
      time : {
        "today": 0,
        "thisWeek": 0,
        "lastWeek": 0,
        "thisMonth": 0,
        "lastMonth":0
      },
      status:{
        "checked": false
      }
      
    }
    
  }
  

 
startWorkTime=()=>{

  let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

   fetchApi("/checkin/startWorkingHours", "POST", {} , header )
  .then(response => {
    console.log(response.data.message);
    if(response.data.message == 'Checked in') {
     console.log("checked in")
      this.setState({status:{"checked": true}
        
      })
      
      
    }
    else{
      this.setState({status:{"checked": false}
    })}
  });

  }






  onRecord= () =>{
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

  fetchApi("/checkin/totals", "GET", {} , header )
  .then(response => {
    if(response.data.success) {
      this.setState({time: response.data.data})
      
    }
    console.log(response);
  })}
  
  render(){
    return (
      

    

      <div>
         
        <div id="div_innercontent" className= "padding-30">
          {/* Submenu. */}
          <div id="menu_level2">
                    <ul className="buttons_navigate_lvl_2">
                      <li className="selected_item">
                        <Link to = "/timecard/record"><span>Työajan kirjaus</span></Link>
                      </li>
                      <li >
                        <Link to = "/timecard/hourspecification"><span>Tuntierittely</span></Link>
                      </li>
                      <li>
                        <Link to="/timecard/hourlyreport"><span>Tuntiraportit</span></Link>

                                              </li>
                    </ul>
                  </div>
          {/* Notification */}
          {/* Content. */}
          <div id="div_content">
            {/* Sivun otsikko */}
            <div className="page_header">
              <h2>Time Card</h2>
            </div>
            {/* Kellokortti */}
            <div id="div_timecard">
              <table id="TABLE_1">
                <tbody><tr>
                    <td>Employee</td>
                    <td>Tomi Salmi</td>
                  </tr>
                  <tr>
                    <td>Logged in today</td>
                    <td>2019-07-19 12:39:13 - 2019-07-19 12:39:16<br /></td>
                  </tr>
                  <tr>
                    <td>Total working hours today</td>
                    <td>{this.state.time.today}</td>
                  </tr>
                  <tr>
                    <td>Total working hours this week</td>
                    <td>{this.state.time.thisWeek}</td>
                  </tr>
                  <tr>
                    <td>Total working hours last week</td>
                    <td>{this.state.time.lastWeek}</td>
                  </tr>
                  <tr>
                    <td>Total working hours this month</td>
                    <td>{this.state.time.thisMonth}</td>
                  </tr>
                  <tr>
                    <td>Total working hours last month</td>
                    <td>{this.state.time.lastMonth}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span>
                        <Link className="button blockButton positive" href="logworktime.php" id="worktime_start" onClick={this.startWorkTime}>{
                           this.state.status.checked == true ? <span> Stop Work Time</span>: <span>Start work time</span>
                        } 
                          

                        </Link>
                        
                      </span>
                    </td>
                  </tr>	</tbody></table>
            </div>
            {/* Unohtuneet uloskirjautumiset */}
            <div id="div_logout_pending">
              <table id="TABLE_2">
              </table>
            </div>
          </div>
        </div>
      
      </div>
  );}
}
  

export default recording;