import React, { Component } from 'react';
import '../salesStatistics/salesStatistics.css'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
class salesStatistics extends Component {
    render() {
        return (

          <div className= "padding-30">
           
              
                    <div id="div_innercontent">
                      {/* Submenu. */}
                      <div id="menu_level2">
                        <ul className="buttons_navigate_lvl_2">
                          <li>
                          <Link to= "/reports/ledgers"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Ledgers</font></font></span></Link>
                          </li>
                          <li className="selected_item">
                          <Link to= "/reports/sales-statistics"> <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sales statistics</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/reports/sales-printing"> <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sales printing</font></font></span></Link>
                          </li>
                        </ul>
                      </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content">
                        <div align="center">
                          <div className="page_header"><h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Product Sales Statistics</font></font></h2></div>
                          <form name="form1" id="myyntitilasto_searchform" method="post" action>
                            <fieldset className="raportit_form">
                              <legend><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search criteria</font></font></legend>
                              <table className="reskontra" border={0} id="TABLE_1">
                                <tbody><tr className="daterange_row">
                                    <td width={150} className="header"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Interval </font></font><br /><small><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>(by </font></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>date of </font><font style={{verticalAlign: 'inherit'}}>employment </font><font style={{verticalAlign: 'inherit'}}>)</font></font></small></strong></td>
                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Start date.</font></font></td>
                                    <td><input type="text" className="datepicker hasDatepicker" name="alkaen" id="alkaen" size={9} title="Please select a date" defaultValue /><img className="ui-datepicker-trigger" src="img/icons/018.gif" alt="Please select a date" title="Please select a date" />
                                      <span style={{visibility: 'hidden'}} className="alert"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>*</font></font></span>
                                    </td>
                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>End date.</font></font></td>
                                    <td><input type="text" className="datepicker hasDatepicker" name="loppuen" id="loppuen" size={9} title="Please select a date" defaultValue /><img className="ui-datepicker-trigger" src="img/icons/018.gif" alt="Please select a date" title="Please select a date" />
                                      <span style={{visibility: 'hidden'}} className="alert"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>*</font></font></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                    </td>
                                    <td colSpan={4}>
                                      <div className="alert_notification"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Please check the dates!</font></font></div>
                                    </td>
                                  </tr>
                                  <tr className="space_row">
                                    <td />
                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choose:</font></font></td>
                                    <td colSpan={3}>
                                      <button id="daterange_1" className="basicButton whiteButton noshadow" onclick="pvm(1)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>In this month</font></font></button>
                                      <button id="daterange_2" className="basicButton whiteButton noshadow" onclick="pvm(2)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>This year</font></font></button>
                                      <button id="daterange_3" className="basicButton whiteButton noshadow" onclick="pvm(3)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All</font></font></button>
                                    </td>
                                  </tr>
                                  <tr className="space_row">
                                    <td className="header"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Goods</font></font></strong></td>
                                    <td colSpan={5}>
                                      <select name="item">
                                        <option value={0} selected="selected">All</option><option value={1}>Rule, billing package</option><option value={2}>Rule, order management and billing</option><option value={3}>Rule, inventory and order management</option><option value={4}>Rule, Factor Pack</option><option value={6}>paper 5</option><option value={7}>papero2</option><option value={8}>paperi4</option><option value={9}>Rule, an order management package</option><option value={10}>2</option><option value={11} /><option value={12} /><option value={13} /><option value={14} /><option value={15} />			</select>
                                    </td>
                                  </tr>
                                  <tr><td colSpan={6}>
                                      <button className="basicButton whiteButton noshadow leftIcon bold" id="get_data">
                                        <span style={{backgroundImage: 'url(img/icons/113.gif)'}} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Get stats
                                          </font></font></button>
                                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input style={{display: 'none'}} type="submit" name="submit" defaultValue="Get stats" /></font></font>
                                    </td></tr>
                                </tbody></table>
                            </fieldset>
                          </form>
                        </div></div>
                    </div>
                    
                    </div>
                  
        );
    }
}

export default salesStatistics;