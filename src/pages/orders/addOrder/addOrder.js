import React from 'react';
import '../addOrder/addOrder.css'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';

const addOrder = () => {
    return (
<div className= "padding-30">

       
       <div id="menu_level2">
                      <ul className="buttons_navigate_lvl_2">
                        <li >
                          <Link to = "/orders/orderqueue"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Order queue</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/myqueue"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>My Queue</font></font></span></Link>
                        </li>
                        <li  className="selected_item">
                        <Link to = "/orders/addorder"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new order</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/active"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Active</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/requestedoffers"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Requested Offers</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/offersgiven"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Offers Given</font></font></span></Link>
                        </li>
                      </ul>
                    </div>
        
          
                <div id="div_content">
                  <table className="basic" bgcolor="#000000" id="TABLE_1"><tbody><tr style={{fontSize: '14px'}}><td width="25%" height={39} bgcolor="#FF7D00" style={{cursor: 'pointer'}}><div align="center" className="mustateksti"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>customer Information</font></font></div></td><td width="25%" bgcolor="#525252" style={{cursor: 'default'}}><div align="center" className="valkonenteksti"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add job / edit job details</font></font></div></td>
                        <td width="25%" bgcolor="#525252" style={{cursor: 'default'}}><div align="center" className="valkonenteksti"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jobs</font></font></div></td>
                        <td width="25%" bgcolor="#525252" style={{cursor: 'default'}}><div align="center" className="valkonenteksti"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>billing</font></font></div></td></tr>
                      <tr bgcolor="#FFFFFF">
                        <td colSpan={4}>
                          <table width="100%" border={0} className="workk" id="TABLE_2">
                            <tbody><tr>
                                <td><div align="center">
                                    <link type="text/css" rel="stylesheet" href="css/flexselect.css" />
                                    <table border={0} id="TABLE_3">
                                      <tbody><tr>
                                          <td colSpan={2} height="30px"><h3 align="center"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customer information</font></font></h3></td>
                                        </tr>
                                        <tr>
                                          <td colSpan={2}><div><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search and select a customer or enter a private customer name:</font></font><br /><br /></div></td>
                                        </tr>
                                        <tr><form action="operatedatabase.php?reason=addtyo" method="post" encType="multipart/form-data" name="form1" id="form1" onsubmit="return dis()" /><td width="200px"><div><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search by name of company or customer:</font></font></strong></div></td><td colSpan={1}><input name="job_id" id="job_id" type="hidden" defaultValue={0} />
                                            <input type="hidden" name="hakuperuste" defaultValue={0} />			<div id="search-wrap_reskontra">
                                              <div className="inputParent"><input className="searchPlugin" name="search-q" id="search-q" type="text" style={{margin: '5px 0'}} autoComplete="off" /><span className="loadingicon" style={{left: '193px', top: '3px', display: 'none'}} /></div>
                                            </div>
                                          </td><td><a className="basicButton whiteButton" href="index.php?page=customers&add_new=1" target="_blank"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new customer</font></font></a></td></tr><tr>
                                          <td width="200px"><div className="asiakasth"><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Client:</font></font></strong></div></td>
                                          <td>
                                            <div align="left">
                                              <label><input name="tilaaja" type="text" id="tilaaja" size={36} defaultValue />
                                              </label><span style={{visibility: 'hidden'}} className="alert"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>*</font></font></span>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td><div><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billing address:</font></font></strong></div></td>
                                          <td>
                                            <div align="left"><textarea name="laskutusosoite" cols={35} rows={4} defaultValue={""} /></div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td><div><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery address</font></font></strong></div></td>
                                          <td>
                                            <div align="left"><textarea onkeyup="uncheck_checkbox()" name="toimitusosoite" cols={35} rows={4} defaultValue={""} /><br /><input name="las_os" type="checkbox" id="las_os" defaultValue={1} defaultChecked /><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Same as Billing address</font></font></strong></div>
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
};

export default addOrder;