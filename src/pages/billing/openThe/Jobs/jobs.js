import React, { Component } from 'react';
import './jobs.css';
import {Link } from 'react-router-dom';
import {fetchApi} from '../../../../services/api'
import Cd_dvd from '../addJob/cd-dvd/cd_dvd';
import Kayntikortti from '../addJob/kayntikortti/kayntikortti';
import Tulostustyo from '../addJob/tulostustyo/tulostustyo';
import Suurtuloste from '../addJob/suurtuloste/suurtuloste';
import Lehti from '../addJob/lehti/lehti';
import Kirja from '../addJob/kirja/kirja';
import Viimeistely from '../addJob/viimeistely/viimeistely';
import Suunnittelu from '../addJob/suunnittelu/suunnittelu';
import Tavaran from '../addJob/tavaran/tavaran';

class jobs extends Component {
  constructor(props){
    super(props);

    this.onLoad();
    console.log(this.props.location);
   
    // data = false;
    if(this.props.location.track && this.props.location.query){
      // console.log(thi)
      this.state = {
        data : true,
        data1:[{
          "component":""
        }]
      }
    }
    else{
      this.state = {
        data : false,
        data1:[]

      }
    }
  }


  onLoad=()=>{
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
    let payload={

    }
    fetchApi("/jobs/loadJobs", "POST", {} , header )
          .then(response => {
            console.log("===>",response)
            this.setState({
              "data1":response.data.data
            })
          })
  }
    render() {
        return (
            
              
                    <div id="div_innercontent" className= "padding-30">
                      {/* Submenu. */}
                      <div id="menu_level2">
                      {/* <cd_dvd /> */}
                    <ul className="buttons_navigate_lvl_2">
                        <li className="selected_item">
                           <Link to = "/billing/billable"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>billable</font></font></span></Link>
                        </li>
                        <li>
                            <Link to = "/billing/newbill"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New bill</font></font></span></Link>
                        </li>
                    </ul>
                </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content" className="mustateksti">
                        <table className="basic" bgcolor="#000000" id="TABLE_1"><tbody><tr className="tyootsikot">
                    <td width="25%" height={39} bgcolor="#525252" style={{ cursor: 'pointer' }}>
                   
                    <div align="center" className="mustateksti">
                    <Link to={{ pathname: '/billing/openthe/customer', query: this.props.location.query, track: this.props.location.track }}>
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>customer Information</font>
                    </font>
                    </Link>
                    </div>
                    
                    </td>
                    
                    <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } }">
                    <Link to={{ pathname: '/billing/openthe/addjob', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Add job / edit job details</font>
                    </font>
                    </div>
                    </Link>
                    </td>
                   
                   
                    <td width="25%" bgcolor="#FF7D00" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } }">

                    <Link to={{ pathname: '/billing/openthe/jobs', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Jobs</font>
                    </font>
                    </div>
                    </Link>
                    </td>

                        <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=4&job_id=60'">
                        <Link to={{ pathname: '/billing/openthe/openbilling', query: this.props.location.query, track: this.props.location.track }}>
                        <div align="center" className="mustateksti">
                        <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>billing</font>
                        </font>
                        </div>
                        </Link>
                        </td>
                        </tr>
                            <tr bgcolor="#FFFFFF">
                              <td colSpan={4}>
                                <table width="100%" border={0} className="workk" id="TABLE_2">
                                  <tbody><tr>
                                      <td><div align="center">        <link type="text/css" rel="stylesheet" href="css/cal.css" />
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "table.workk input:focus, table.workk select:focus, table.workk textarea:focus { background-color:#EDF2DF; }" }} />
                                          <style dangerouslySetInnerHTML={{__html: "#ui-datepicker-div {\tbackground-color: #DADADA; }" }} />
                                          <table className="basic color-black" id="TABLE_3"><tbody>
                                          
                                            {this.state.data1.length>0?this.state.data1.map((comp)=>{
                                                switch(comp.component){
                                                  case "CD/DVD": return (
                                                    <Cd_dvd hideMenu={true} component={comp}/>
                                                    
                                                  )

                                                  case "Businesss Card": return (
                                                    <Kayntikortti hideMenu={true} component={comp} />
                                                    
                                                  )

                                                  case "Increaseprintjobs": return (
                                                    <Tulostustyo hideMenu={true} component={comp}/>
                                                    
                                                  )

                                                  case "largeprintjob": return (
                                                    <Suurtuloste hideMenu={true} component={comp} />
                                                    
                                                  )

                                                  case "magzinesupplement": return (
                                                    <Lehti hideMenu={true} component={comp} />
                                                    
                                                  )

                                                  case "Addingabook": return (
                                                    <Kirja hideMenu={true} component={comp} />
                                                    
                                                  )

                                                  case "fileFinishing": return (
                                                    <Viimeistely hideMenu={true} component={comp} />
                                                    
                                                  )

                                                  case "Deisgn": return (
                                                    <Suunnittelu hideMenu={true} component={comp}/>
                                                    
                                                  )

                                                  case "tavaran": return (
                                                    <Tavaran hideMenu={true} component={comp}/>
                                                    
                                                  )

                                                 
                                                }
                                            }):null}
                                            <tr>
                                                <td>
                                                 
                                                    <div style={{textAlign: 'right'}}>
                                                      <button id="orders-button-tarjous" className="whiteButton"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Print your order confirmation</font></font></button>
                                                      <button id="orders-button-shipping-list" className="whiteButton"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Packing list</font></font></button>
                                                      <input name="id" type="hidden" defaultValue={60} />
                                                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" className="whiteButton" id="button" defaultValue="Mark the deliveries" /></font></font>
                                                    </div></td></tr></tbody></table></div></td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table></div>
                    </div>
                  
        );
    }
}

export default jobs;