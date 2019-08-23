import React, { Component } from 'react';
import './addJob.css'
import {Link} from 'react-router-dom';
import Image from '../../../../kuvat/28.JPG'
import Table from '../../../../components/table';
import {fetchApi} from '../../../../services/api'

class addjob extends Component {
  constructor(props){
    super(props)
    this.onLoad();
    this.state = {
      invoice : "",
      head:["Job",
      "Name of the work",
      "deadline",
      "fullOrder",
      "qty",
      "jobDone"],
      body:[]
    }

    if(this.props.location.track){
      
      this.setState({
        invoice:this.props.location.query
      })
    }
    

}

onLoad=()=>{
  let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
  fetchApi("/jobs/loadJobs", "POST", {} , header )
  .then(response => {
  console.log("myQueue" ,response.data.data);
}
  
  )}
    render() {
        return (
            
              
                    <div id="div_innercontent" className= "padding-30">
                      {/* Submenu. */}
                      <div id="menu_level2">
        <ul className="buttons_navigate_lvl_2">
          <li className="selected_item">
          <Link to ="/billing/billable"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billable</font></font></span></Link>
          </li>
          <li >
            <Link to ="/billing/newbill"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>New bill</font></font></span></Link>
          </li>
        </ul>
      </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content">
                        <table className="basic" bgcolor="#000000" id="TABLE_1"><tbody>
                        
                        <tr className="tyootsikot">
                          <td width="25%" height={39} style={{cursor: 'pointer'}} bgcolor="#525252">
                      
                      <Link to={{ pathname: '/billing/openthe/customer', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>customer Information</font>
                    </font>
                    </div>
                    </Link>

                        </td>
                        <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} >
                    <Link to={{ pathname: '/billing/openthe/addjob', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Add job / edit job details</font>
                    </font>
                    </div>
                    </Link>
                    </td>
                              <td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} >

                                <Link to={{ pathname: '/billing/openthe/jobs', query: this.props.location.query, track: this.props.location.track }}>
                              <div align="center" className="mustateksti">
                              <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Jobs</font>
                              </font>
                              </div>
                              </Link>
                              </td>


                              <td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} >
                              <Link to={{ pathname: '/billing/openthe/openbilling', query: this.props.location.query, track: this.props.location.track }}>
                              <div align="center" className="mustateksti">
                              <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>billing</font>
                              </font>
                              </div>
                              </Link>
                              </td>

                              </tr>
                            <tr bgcolor="#FFFFFF">
                              <td colSpan={4}>
                                <table width="100%" border={0} className="workk" id="TABLE_2">
                                  <tbody><tr>
                                      <td><div align="center" className="mustateksti"><table border={0} style={{width: '99%'}} id="TABLE_3">
                                            <tbody><tr>
                                                <td colSpan={4}><div style={{textAlign: 'center'}}><strong><h3 style={{marginBottom: '15px'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This order includes:</font></font></h3></strong></div></td></tr></tbody></table>


                                                <Table head={this.state.head} body={this.state.body} heading ="This job includes:"/>

                                           



                                                <table className="basic jono1 sort01 table-stripeclass:alternate table-autosort:2" id="TABLE_4">
                                            <thead>
                                              <tr>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Job</font></font></strong></th>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></strong></th>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>deadline</font></font></strong></th>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Full order dl</font></font></strong></th>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Qty</font></font></strong></th>
                                                <th><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Job is done</font></font></strong></th>
                                              </tr>
                                            </thead>

                                      

                                          
                                            <tbody><tr className /></tbody><tfoot className="table-nosort">
                                              <tr>
                                                <td colSpan={3} align="right" />
                                                <td colSpan={3}><input type="radio" name="dl" defaultValue="0000-00-00" onclick="radioDl(this.value)" style={{verticalAlign: 'middle'}} /> <strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Do not use a common deadline</font></font></strong></td>
                                              </tr>
                                              <tr>
                                                <td colSpan={6}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The order contains 1 job</font></font></td>
                                              </tr>
                                            </tfoot>
                                          </table>
                                          
                                          <br /><hr /><table className="blue" id="TABLE_5">
                                            <tbody><tr><td>&nbsp;</td></tr>
                                              <tr>
                                                <td className="blue"><div align="center"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add and edit items in this order:</font></font></strong></div></td>
                                              </tr>
                                            </tbody></table>
                                          <table width="95%" border={0} align="center" id="TABLE_6">
                                            {/* is this necessary? <tr>
                      <td colspan='5' class='blue'><h3 align='center'>Työn lisäys</h3></td>
                  </tr> */}
                                            <tbody><tr><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div >
                                                  <Link to={{ pathname: '/billing/openthe/addjob/cd_dvd', query: this.props.location.query, track: this.props.location.track }}>
                                                      <img src={require('../../../../kuvat/28.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" style={{opacity: 1}} />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/kayntikortti-v.jpg") no-repeat'}}>
                                                  <Link to={{ pathname: "/billing/openthe/addjob/kayntikortti", query: this.props.location.query, track: this.props.location.track }}>
                                                  <img src={require('../../../../kuvat/33.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" style={{opacity: 1}} />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/tulostustyo-v.jpg") no-repeat'}}>
                                                  <Link to={{ pathname:"/billing/openthe/addjob/tulostustyo", query: this.props.location.query, track: this.props.location.track }}>
                                                  <img src={require('../../../../kuvat/25.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/suurtuloste-v.jpg") no-repeat'}}>
                                                  <Link to={{ pathname:  "/billing/openthe/addjob/suurtuloste" , query: this.props.location.query, track: this.props.location.track }}>
                                                  <img src={require('../../../../kuvat/23.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/lehti-v.jpg") no-repeat'}}>
                                                  <Link to={{ pathname:  "/billing/openthe/addjob/lehti" , query: this.props.location.query, track: this.props.location.track }}>
                                                  <img src={require('../../../../kuvat/20.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                   </Link></div>
                                                </td></tr><tr>
                                                <td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/kirja-v.jpg") no-repeat'}}>

                                                  <Link to={{ pathname:  "/billing/openthe/addjob/kirja" , query: this.props.location.query, track: this.props.location.track }}>
                                                  <img src={require('../../../../kuvat/16.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link>
                                                    
                                                    </div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/viimeistely-v.jpg") no-repeat'}}>
                                                  <Link to={{ pathname:  "/billing/openthe/addjob/viimeistely" , query: this.props.location.query, track: this.props.location.track }}>
                                                
                                                  <img src={require('../../../../kuvat/94.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" style={{opacity: 1}} />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/suunnittelu-v.jpg") no-repeat'}}>

                                                  <Link to={{ pathname:  "/billing/openthe/addjob/suunnittelu" , query: this.props.location.query, track: this.props.location.track }}>
                                                    
                                                  <img src={require('../../../../kuvat/12.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link>
                                                    
                                                    </div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/tarjouspyynto-v.jpg") no-repeat'}}>
                                                    <Link to ="/billing/openthe/addjob/tarjouspyynto">
                                                    <img src={require('../../../../kuvat/11.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/postituspalvelut-v.jpg") no-repeat'}}>
                                                    <Link to = "/billing/openthe/addjob/postituspalvelut">
                                                    <img src={require('../../../../kuvat/10.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td></tr><tr>
                                                <td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/alihankinta-v.jpg") no-repeat'}}>
                                                   <Link to = "/billing/openthe/addjob/alihankinta">
                                                   <img src={require('../../../../kuvat/8.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/tavaran-myynti-v.jpg") no-repeat'}}>

                                                  <Link to={{ pathname: "/billing/openthe/addjob/tavaran" , query: this.props.location.query, track: this.props.location.track }}>
                                                 
                                                  <img src={require('../../../../kuvat/6.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/kuvapankki-v.jpg") no-repeat'}}>
                                                    <Link to = "/billing/openthe/addjob/kuvapankki">
                                                    <img src={require('../../../../kuvat/4.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/koulutuspalvelut-v.jpg") no-repeat'}}>
                                                    <Link to ="/billing/openthe/addjob/koulutuspalvelut">
                                                    <img src={require('../../../../kuvat/2.JPG')} width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td><td className="tyotyypit" style={{margin: '2px', padding: '0px'}}>
                                                  <div style={{background: 'url("kuvat/tehtavat-v.jpg") no-repeat'}}>
                                                    <Link to ="/billing/openthe/addjob/tehtavat">
                                                    <img src={require('../../../../kuvat/3.JPG')}  width={161} height={161} onmouseover="Over(this);" onmouseout="Out(this);" />
                                                    </Link></div>
                                                </td></tr></tbody></table><table border={0} style={{width: '99%'}} id="TABLE_7" />
                                        </div></td></tr>
                                  </tbody>
                                </table><br /></td></tr><tr><td colSpan={2} height={10} /></tr>
                            <tr>
                              <td colSpan={2}>
                                <form id="form" name="form" method="post" action="popuptilaus.php?step=3&job_id=60&toimita=1">
                                  <div align="left">
                                    <input name="id" type="hidden" defaultValue={60} />
                                    <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}

                                    ><Link to = "/billing/openthe/addjob/markdeliveries"><input type="submit" name="button" id="button" Value="Mark the deliveries" /></Link></font></font></font></font>
                                  </div></form></td></tr></tbody></table><br /></div>
                    </div>
                  
        );
    }
}

export default addjob;