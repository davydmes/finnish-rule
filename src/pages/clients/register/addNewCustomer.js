import React from 'react';
import '../register/addNewCustomer.css';

import { Link } from 'react-router-dom';
import {Component} from 'react'
import {fetchApi} from '../../../services/api'


class addNewCustomer extends Component{
  constructor(props) {
    super(props)

    this.state= {
      "name":"",
      "email":"",
      "telephone":"",      
      "companyName":"",
      "businessId":"",
      "terms":"",
      "discount":0,
      "invoiceAddress":"",
      "providerId":"",
      "name1":"",
      "name2":"",
      "name3":"",
      "deliveryAddress":"",
      "zip":"",
      "postOffice":"",
      "country":"",
      "additionalInfo":""
    }
  }

  onSave=() =>{
    let Header= {
        authorization : "token "+ JSON.parse( localStorage.getItem("userData")).sessionId

    }

    let payload = {
      "name":this.state.name,
      "email":this.state.email,
      "telephone":this.state.telephone,      
      "companyName":this.state.companyName,
      "businessId":this.state.businessId,
      "terms":this.state.terms,
      "discount":this.state.discount,
      "invoiceAddress":this.state.invoiceAddress,
      "providerId":this.state.providerId,
      "name1":this.state.name1,
      "name2":this.state.name2,
      "name3":this.state.name3,
      "deliveryAddress":this.state.deliveryAddress,
      "zip":this.state.zip,
      "postOffice":this.state.postOffice,
      "country":this.state.country,
      "additionalInfo":this.state.additionalInfo
    }


    fetchApi("/clients/saveClient", "POST", payload, Header)
        .then(response=> {
            console.log(response);
            this.props.history.push("/clients/customerinfo")
            if(response.data.message == "success"){
              
            }
          })
  }


  render(){



    return (
        <div className= "padding-30">
        

        
        <div id="menu_level2">
                    <ul className="buttons_navigate_lvl_2">
                      <li>
                        <Link to ="/clients/customerinfo"><span>Asiakasrekisteri</span></Link>
                      </li>
                      <li className="selected_item">
                        <Link to ="/clients/addcustomer"><span>Lisää uusi asiakas</span></Link>
                      </li>
                    </ul>
                  </div>
                <div id="div_content">
                  <link rel="stylesheet" type="text/css" href="css/flexselect.css" />
                  <link type="text/css" rel="stylesheet" href="css/customer_register.css" />
                  <div className="customerContent">
                    <div className="customerLeft">
                      <div className="customerBar">
                        <div className="inputParent"><input type="text" id="customerSearch" title="Enter a search term to find a customer in the customer register" autoComplete="off" maxLength={60} /><span className="loadingicon" style={{left: '187px', top: '5px', display: 'none'}} /><span className="searchIcon" style={{top: '8px', left: '10px'}} /><span className="emptyText" title="Enter a search term to find a customer in the customer register" style={{left: '35px', top: '9px'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>customer Search</font></font></span></div>
                        <span id="c-new_customer" className="customer_icon" title="Add a new customer" />
                        <div className="clear" />
                      </div>
                      <div className="customerListContainer" style={{height: '100%'}}>
                        <ul className="customerList">
                          <input id="next_row" type="hidden" defaultValue={20} />
                          <input id="total_rows" type="hidden" defaultValue={27} />
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2.0</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The name is required today</font></font></p>			<input type="hidden" defaultValue={730} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>A-bus Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Matti Melamies</font></font></p>			<input type="hidden" defaultValue={722} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>bjjhjjh</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>jjjijiji</font></font></p>			<input type="hidden" defaultValue={750} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bta Media Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Jukka Mikkola</font></font></p>			<input type="hidden" defaultValue={732} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Dream Service</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kai Lehtonen</font></font></p>			<input type="hidden" defaultValue={748} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Finnfor Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tapio Lehtinen</font></font></p>			<input type="hidden" defaultValue={743} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Fysio Ash</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tatu Ash</font></font></p>			<input type="hidden" defaultValue={727} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Grafilo Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Antti Hassinen</font></font></p>			<input type="hidden" defaultValue={737} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Helsinki Bofori Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kimmo Wire</font></font></p>			<input type="hidden" defaultValue={746} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Invenco</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sakari Pitkäsalo</font></font></p>			<input type="hidden" defaultValue={711} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Juutiprint Ky.</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Esa Juutilainen</font></font></p>			<input type="hidden" defaultValue={700} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kapotek</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Welf Zaeske</font></font></p>			<input type="hidden" defaultValue={747} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Far-cost</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Remote Parkkinen</font></font></p>			<input type="hidden" defaultValue={739} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Hearing Aid Ltd</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sirkku-Marja Väätäinen</font></font></p>			<input type="hidden" defaultValue={723} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Leader Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tommi Liuha</font></font></p>			<input type="hidden" defaultValue={731} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Leakomatic Ab</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Peter Linnavuori</font></font></p>			<input type="hidden" defaultValue={740} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mail &amp; Print Partner Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kari Pohjola</font></font></p>			<input type="hidden" defaultValue={741} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title="Overdue invoices">
                            <div className="customerListItem has_overdue_invoices">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Masterum Ltd</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tapio Lehtinen</font></font></p>			<input type="hidden" defaultValue={742} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Neemia Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Joni the Jew</font></font></p>			<input type="hidden" defaultValue={735} />
                            </div>
                          </li>
                          <li className="branch-not-selected" title>
                            <div className="customerListItem ">
                              <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>One Way Mission</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tapani Suonto</font></font></p>			<input type="hidden" defaultValue={701} />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="customerTotalCount">
                        <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search found 27 customers</font></font></p>
                      </div>
                    </div>
                    <div className="contentRight" id="customerRight">
                      <div className="formContainer" id="customerContainer">
                        <div id="c-edit_info">
                          {/* Muokattavien kenttien alkuperäiset arvot. */}
                          <input className="original_value" type="hidden" name="id" defaultValue={0} />
                          <input className="original_value" type="hidden" name="contact_id" defaultValue={0} />
                          <input className="original_value" type="hidden" name="contact_name" defaultValue />
                          <input className="original_value" type="hidden" name="contact_phone" defaultValue />
                          <input className="original_value" type="hidden" name="contact_email" defaultValue />
                          <input className="original_value" type="hidden" name="company_name" defaultValue />
                          <input className="original_value" type="hidden" name="discount_percentage" defaultValue />
                          <input className="original_value" type="hidden" name="payment_method" defaultValue />
                          <input className="original_value" type="hidden" name="notes" defaultValue />
                          <input className="original_value" type="hidden" name="edi_identifier" defaultValue />
                          <input className="original_value" type="hidden" name="intermediator" defaultValue />
                          <input className="original_value" type="hidden" name="business_identifier" defaultValue />
                          {/* Lisäkentät. */}
                          <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>New customer</font></font></h2>
                          <h3 className="c-section_header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Basic</font></font></h3>
                          <table className="c-table c-edittable c-info-table" style={{float: 'left'}} cellSpacing={0} cellPadding={0} border={0} id="TABLE_1">
                            <tbody><tr>
                                <th colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Particulars</font></font></th>
                              </tr>
                              <tr>
                                <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name</font></font></td>
                                <td className="required_field"><input type="text" name="contact_name" id="contact_name" value = {this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/></td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Email address</font></font></td>
                                <td><input type="text" name="contact_email" id="contact_email" value = {this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}} /></td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Telephone number</font></font></td>
                                <td><input type="text" name="contact_phone" id="contact_phone" value = {this.state.telephone} onChange={(e)=>{this.setState({telephone: e.target.value})}} /></td>
                              </tr>
                              {/*tr> TODO: Tulevaan versioon!
                      <td width='50%'>Asiakastyyppi</td>
                      <td>
                                          <select name='customer_type' id='customer_type'>
                              <option value='1' selected='selected'>Asiakas</option>
                              <option value='2' >Prospekti</option>
                              <option value='3' >Kumppani</option>
                              <option value='4' >Maksaja</option>
                          </select>
                      </td>
                  </tr*/}
                            </tbody></table>
                          <table className="c-table c-edittable c-info-table" style={{float: 'left', marginLeft: '90px'}} cellSpacing={0} cellPadding={0} border={0} id="TABLE_2">
                            <tbody><tr>
                                <th colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Company Information </font></font><br /><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>(Fill in only if you are a business customer)</font></font></span></th>
                              </tr>
                              <tr>
                                <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the company</font></font></td>
                                <td><input type="text" name="company_name" id="company_name" value = {this.state.companyName} onChange={(e)=>{this.setState({companyName: e.target.value})}} /></td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Business id</font></font></td>
                                <td><input type="text" name="business_identifier" id="business_identifier" maxLength={9} value = {this.state.businessId} onChange={(e)=>{this.setState({businessId: e.target.value})}}/></td>
                              </tr>
                              {/*tr> TODO: Tulevaan versioon!
                      <td>Sähköpostiosoite</td>
                      <td><input type="text" name="company_email" id="company_email" value="" /></td>
                  </tr>
                  <tr>
                      <td>Puhelinnumero</td>
                      <td><input type="text" name="company_contact_phone" id="company_contact_phone" value="" /></td>
                  </tr*/}
                            </tbody></table>
                          <div className="clear" />
                          <h3 className="c-section_header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billing information</font></font></h3>
                          <table className="c-table c-edittable c-info-table" style={{float: 'left'}} cellSpacing={0} cellPadding={0} border={0} id="TABLE_3">
                            <tbody><tr>
                                <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>terms</font></font></td>
                                <td>
                                  <select name="payment_method" id="payment_method">
                                    <option value={1}>Cash customer</option>
                                    <option value={2}>billing Customer</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>discount percentage</font></font></td>
                                <td>
                                  <input type="number" id="discount_percentage" name="discount_percentage" min={0} max={100} size={5} maxLength={3} value = {this.state.discount} onChange={(e)=>{this.setState({discount: e.target.value})}} />
                                </td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>invoice address</font></font></td>
                                <td><input type="text" name="edi_identifier" id="edi_identifier" maxLength={20} value = {this.state.invoiceAddress} onChange={(e)=>{this.setState({invoiceAddress: e.target.value})}} /></td>
                              </tr>
                              <tr>
                                <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Provider ID</font></font></td>
                                <td><input type="text" name="intermediator" id="intermediator" maxLength={20} value = {this.state.providerId} onChange={(e)=>{this.setState({providerId: e.target.value})}} /></td>
                              </tr>
                            </tbody></table>
                          <div id="billing_address_fields" style={{float: 'left', marginLeft: '90px'}}>
                            <input className="original_value" type="hidden" name="id" defaultValue={0} />
                            <input className="original_value" type="hidden" name="address_id" defaultValue />
                            <input className="original_value" type="hidden" name="address_type" defaultValue={2} />
                            <input className="original_value" type="hidden" name="address_recipient" defaultValue />
                            <input className="original_value" type="hidden" name="name_supplement1" defaultValue />
                            <input className="original_value" type="hidden" name="name_supplement2" defaultValue />
                            <input className="original_value" type="hidden" name="address_street" defaultValue />
                            <input className="original_value" type="hidden" name="address_postal_code" defaultValue />
                            <input className="original_value" type="hidden" name="address_city" defaultValue />
                            <input className="original_value" type="hidden" name="address_country" defaultValue />
                            <table className="c-table c-edittable" id="address_" cellSpacing={0} cellPadding={0} border={0}>
                              <tbody><tr>
                                  <th colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>billing address</font></font></th>
                                </tr>
                                <input type="hidden" name="address_type" id="address_type" defaultValue={2} />
                                <tr>
                                  <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The name of the recipient</font></font></td>
                                  <td><div style={{position: 'relative'}}><input type="text" name="address_recipient" id="address_recipient" value = {this.state.name1} onChange={(e)=>{this.setState({name1: e.target.value})}} /><span className="emptyText" style={{left: '8px', top: '5px'}} /></div></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Your name is full</font></font></td>
                                  <td><input type="text" name="name_supplement1" id="name_supplement1" value = {this.state.name2} onChange={(e)=>{this.setState({name2: e.target.value})}} /></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Your name is full</font></font></td>
                                  <td><input type="text" name="name_supplement2" id="name_supplement2" value = {this.state.name3} onChange={(e)=>{this.setState({name3: e.target.value})}} /></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>delivery address</font></font></td>
                                  <td className><input type="text" name="address_street" id="address_street" value = {this.state.deliveryAddress} onChange={(e)=>{this.setState({deliveryAddress: e.target.value})}} /></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>ZIP code</font></font></td>
                                  <td className><input type="text" name="address_postal_code" id="address_postal_code" value = {this.state.zip} onChange={(e)=>{this.setState({zip: e.target.value})}} /></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Post office</font></font></td>
                                  <td className><input type="text" name="address_city" id="address_city" value = {this.state.postOffice} onChange={(e)=>{this.setState({postOffice: e.target.value})}} /></td>
                                </tr>
                                <tr>
                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Country</font></font></td>
                                  <td><input type="text" name="address_country" id="address_country" value = {this.state.country} onChange={(e)=>{this.setState({country: e.target.value})}} /></td>
                                </tr>
                              </tbody></table>
                          </div>
                          <div className="clear" />
                          <h3 className="c-section_header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Other information</font></font></h3>
                          <div id="c-extra_fields">
                            <div>
                              <label htmlFor="notes"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Additional Information</font></font></label>
                              <textarea rows={5} cols={15} width="100%" name="notes" id="notes" value = {this.state.additionalInfo} onChange={(e)=>{this.setState({additionalInfo: e.target.value})}} />
                            </div>
                            {/* <div>
                      <label for="language">Asiointikieli</label>
                      <input type="text" name="language" id="language" value="" />
                  </div> */}
                          </div>
                          <button id="c-save_info" className="basicButton whiteButton" onClick = {this.onSave} ><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>save</font></font></button>
                          <button id="c-cancel" className="basicButton whiteButton"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cancel</font></font></button>
                        </div>
                      </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                
                </div>
  
  )};
};

export default addNewCustomer;