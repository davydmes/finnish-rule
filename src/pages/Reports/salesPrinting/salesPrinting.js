import React, { Component } from 'react';
import '../salesPrinting/salesPrinting.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';

class salesPrinting extends Component {
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
                          <li>
                          <Link to= "/reports/sales-statistics"> <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sales statistics</font></font></span></Link>
                          </li>
                          <li className="selected_item">
                          <Link to= "/reports/sales-printing"> <span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sales printing</font></font></span></Link>
                          </li>
                        </ul>
                      </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content">
                        <div align="center">
                          <div className="page_header"><h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sales printing</font></font></h2></div>
                          <form name="form1" id="tulostamyynti_searchform" action method="post">
                            <fieldset className="raportit_form">
                              <legend><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search criteria</font></font></legend>
                              <table className="reskontra" border={0} id="TABLE_1">
                                <tbody><tr className="daterange_row">
                                    <td width={150} className="header"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Interval</font></font></strong></td>
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
                                  </tr>	<tr className="space_row">
                                    <td colSpan={1} style={{textAlign: 'left'}}>
                                      <button className="basicButton whiteButton noshadow leftIcon bold" id="get_data">
                                        <span style={{backgroundImage: 'url(img/icons/100.gif)'}} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Print sales
                                          </font></font></button>			<font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input style={{display: 'none'}} type="submit" className="tulosta_myynti" defaultValue="Print sales" name="tulosta" /></font></font></font></font>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="header"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Draw a sales chart</font></font></strong></td>
                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sales breakdown</font></font></td>
                                    <td colSpan={2} style={{textAlign: 'left'}}>
                                      <select name="chart_select">
                                        <option value="day">Daily</option>
                                        <option value="week">Weekly</option>
                                        <option value="month">Monthly</option>
                                        <option value="year">Annually</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>		<br />
                                      <button className="basicButton whiteButton noshadow leftIcon bold" id="draw_graph">
                                        <span style={{backgroundImage: 'url(img/icons/123.gif)'}} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Draw a graph
                                          </font></font></button>
                                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input style={{display: 'none'}} type="submit" defaultValue="Draw a graph" name="chart" /></font></font></font></font>
                                    </td>
                                  </tr>
                                </tbody></table>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                    
                    </div>
                 
        );
    }
}

export default salesPrinting;