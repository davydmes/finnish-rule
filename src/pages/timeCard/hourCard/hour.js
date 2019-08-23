import React from 'react';
import './hour.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import {Component} from 'react'
import {fetchApi} from '../../../services/api'

let totalHours = 0;
class hour extends Component{

  constructor(props) {
    super(props)
    this.hourSpecify();

    this.state = {
      time: []
    }
  }

formatTime= (time)=>{
 let d = new Date(time);
 let hour = d.getHours();
 let minutes = d.getMinutes();
 let seconds = d.getSeconds();


 if(hour>= 0 && hour< 10){
   hour = "0"+ hour;
 }
 if(minutes>= 0 && minutes< 10){
  minutes = "0"+ minutes;
}
if(seconds>= 0 && seconds< 10){
  seconds = "0"+ seconds;
}

  return (hour + ":" + minutes + ":" + seconds);
}

formatDate= (date)=>{
  let t = new Date(date);
  let week = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];
  let day = t.getDay();
  let date1 = t.getDate();
  let month = t.getMonth();

  if(date1>0 && date1<10){
    date1 = "0" + date1;
  }
  if(month>0 && month<10){
    month = "0" + month
  }
  return (date1 + ":" + month + ":" + week[day]);
}






getHours= (checkout, checkin) =>{
 let h = new Date(checkout) - new Date(checkin);
 
  let t = h/(60*60*1000);
  let hours = t.toFixed(2) ;
  totalHours += parseFloat(hours);

return t.toFixed(2);
}

getInTotal=() =>{
  return totalHours;
}

  hourSpecify = ()=>{
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

  fetchApi("/checkin/loadCheckins", "POST", {} , header )
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
                      <li className="selected_item">
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
                    <div className="page_header">
                    <h2>Tuntierittely</h2>
                    </div><table width={630} border={0} align="center" id="TABLE_1">
                      <tbody>
                      <tr>
                          <td><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=6&ayear=2019&lyear=2019&lday=30&lmonth=6">Previous month</a></td><td align="center"><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=7&ayear=2019&lyear=2019&lday=22&lmonth=7&modify=1">Modify work time entries</a></td><td align="right"><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=8&ayear=2019&lyear=2019&lday=31&lmonth=8">Next month</a></td></tr></tbody></table><table width={630} border={1} align="center" id="TABLE_2">
                      <tbody><tr>
                          <td width={120}>User</td>
                          <td colSpan={4} width={430}>tomi</td></tr><tr><td colSpan={3}>1.7.2019 - 22.7.2019</td>
                          <td colSpan={2}><b>Heinäkuu 2019</b></td></tr><tr>
                          <td>Date</td>
                          <td>Login time</td>
                          <td>Logout time</td>
                          <td>Hours</td>
                          <td>Description</td>
                          
                        </tr>
                        {this.state.time.map(value=>{
                                return(
                                  <React.Fragment>
                                  <tr bgcolor="#E6FFE1">
                              

                          <td>Week</td>
                          <td colSpan={4}>29</td></tr><tr bgcolor="#E6FFE1">
                          <td>{this.formatDate(value.checkin)}</td>
                          
                          <td>{this.formatTime(value.checkin)}</td>
                          <td>{this.formatTime(value.checkout)}</td>
                          <td>{this.getHours(value.checkout , value.checkin)}</td>
                          <td>&nbsp;</td>
                         
                        

                        </tr>
                        <tr bgcolor="#E7DFF7">
                              

                              <td colSpan= {3}>In Total</td>
                             

                             <td>{this.getInTotal(value.checkin , value.checkout)}</td>
                              <td colSpan={2}></td>
                              </tr>

                        </React.Fragment>
                                )
                              })}

                        <tr bgcolor="#E7DFF7">
                          <td colSpan={3}>Total</td>
                          <td colSpan={2}>50:26</td></tr><tr>
                          <td>Total hours</td>
                          <td><strong>50:27</strong></td>
                          <td>Total working days</td>
                          <td colSpan={2}><strong>7</strong> (56h)</td>
                        </tr></tbody></table><table width={630} border={0} align="center" id="TABLE_3">
                      <tbody><tr>
                          <td><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=6&ayear=2019&lyear=2019&lday=30&lmonth=6">Previous month</a></td><td align="center"><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=7&ayear=2019&lyear=2019&lday=22&lmonth=7&modify=1">Modify work time entries</a></td><td align="right"><a href="index.php?page=worktime_details&worker_id=48&aday=1&amonth=8&ayear=2019&lyear=2019&lday=31&lmonth=8">Next month</a></td></tr></tbody></table>
                  </div>
                </div>

               <br/>
               <br/>
               <br/>
                </div>
              
            
          
    );
  }
  }


export default hour;