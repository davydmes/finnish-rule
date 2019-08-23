import React, { Component } from 'react';
import './customer.css';
import {Link} from 'react-router-dom'


class customer extends Component {
    constructor(props){
        super(props)

        if(this.props.location.track){
            this.state = {
              invoice : this.props.location.query
            }
            console.log(this.props.location.query)
          }
          else{
            this.state = {
              invoice:{
                "billId":"", 
                "subscriber":"",
                "billingAddress":"",
               
              }
            }
          }
        }
      
    
    render() {
        return (


            <div id="div_innercontent" className= "padding-30">
                {/* Submenu. */}
                <div id="menu_level2">
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
                <div id="div_content">
                    <table className="basic" bgcolor="#000000" id="TABLE_1">
                    <tbody>
                    <tr className="tyootsikot">
                    <td width="25%" height={39} bgcolor="#FF7D00" style={{ cursor: 'pointer' }}>

                    <Link to={{ pathname: '/billing/openthe/customer', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>customer Information</font>
                    </font>
                    </div>
                    </Link>
                    
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
                   
                   
                    <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } }">

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
                                        <td><div align="center">
                                            <link type="text/css" rel="stylesheet" href="css/flexselect.css" />
                                            <table border={0} id="TABLE_3">
                                                <tbody><tr>
                                                    <td colSpan={2} height="30px"><h3 align="center"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Customer information</font></font></h3></td>
                                                </tr>
                                                    <tr>
                                                        <td colSpan={2}><div><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Search and select a customer or enter a private customer name:</font></font><br /><br /></div></td>
                                                    </tr>
                                                    <tr><input name="job_id" id="job_id" type="hidden" defaultValue={60} /><input name="customer_id" type="hidden" defaultValue={735} /><td><a href="#" onclick="autoSug()"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Change customer</font></font></a></td><td><div><strong id="customer"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Neemia Oy</font></font></strong><input name="customer_id" type="hidden" defaultValue={735} /><input name="job_id" id="job_id" type="hidden" defaultValue={60} />	<div id="search-wrap_reskontra">
                                                        <div className="inputParent"><input className="searchPlugin" name="search-q" id="search-q" type="text" style={{ display: 'none', margin: '5px 0px' }} autoComplete="off" /><span className="loadingicon" style={{ left: '193px', top: '3px', display: 'none' }} /></div>
                                                    </div>
                                                        <input name="yritys" type="hidden" defaultValue="Neemia Oy" /></div></td></tr><tr>
                                                        <td width="200px"><div className="asiakasth"><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Client:</font></font></strong></div></td>
                                                        <td>
                                                            <div align="left">
                                                                <label><input name="tilaaja" type="text" id="tilaaja" size={36} value={this.state.invoice.subscriber} />
                                                                </label><span style={{ visibility: 'hidden' }} className="alert"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>*</font></font></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Billing address:</font></font></strong></div></td>
                                                        <td>
                                                            <div align="left"><textarea name="laskutusosoite" cols={35} rows={4} value={this.state.invoice.billingAddress} /></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Delivery address</font></font></strong></div></td>
                                                        <td>
                                                            <div align="left"><textarea onkeyup="uncheck_checkbox()" name="toimitusosoite" cols={35} rows={4} value={this.state.invoice.billingAddress}/><br /><input name="las_os" type="checkbox" id="las_os" defaultValue={1} /><strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> Same as Billing address</font></font></strong></div>
                                                        </td>
                                                    </tr></tbody></table>
                                        </div></td>
                                    </tr>
                                    </tbody></table>
                            </td>
                        </tr>
                    </tbody></table></div>
            </div>

        );
    }
}

export default customer;