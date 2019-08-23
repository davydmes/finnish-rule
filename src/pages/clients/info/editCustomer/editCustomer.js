import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../services/api'


class editCustomer extends Component {
    constructor(props) {
        super(props);
        
var x = localStorage.getItem("clientData");
        this.state= {
        userData: JSON.parse(x)

        }

        
        
    }
    

    edit =()=>{
    

     let header =  {
         authorization : "token "+ JSON.parse( localStorage.getItem("userData")).sessionId
        
        }
        let payload = this.state.userData

        fetchApi("/clients/updatePersons", "POST", payload, header)
        .then(response=> {
            console.log(response);
            this.props.history.push("/clients/customerinfo")
            
        
        })
    }
    
    render() {
        return (
            <div id="div_innercontent"  className= "padding-30">
            {/* Submenu. */}
            <div id="menu_level2">
              <ul className="buttons_navigate_lvl_2">
                <li className="selected_item">
                  <Link to="/clients/customerinfo"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>customer Register</font></font></span></Link>
                </li>
                <li>
                  <Link to ="/clients/addcustomer"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new customer</font></font></span></Link>
                </li>
              </ul>
            </div>
            {/* Notification */}
            {/* Content. */}
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
                  <div className="customerListContainer" style={{height: '188px'}}>
                    <ul className="customerList">
                      <input id="next_row" type="hidden" defaultValue={20} />
                      <input id="total_rows" type="hidden" defaultValue={31} />
                      <li className="branch-not-selected branch-selected" title>
                        <div className="customerListItem ">
                          <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>2.0</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>jiiojio</font></font></p>			<input type="hidden" defaultValue={730} />
                        </div>
                      </li>
                      <li className="branch-not-selected" title="Overdue invoices">
                        <div className="customerListItem has_overdue_invoices">
                          <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>A-bus Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Matti Melamies</font></font></p>			<input type="hidden" defaultValue={722} />
                        </div>
                      </li>
                      <li className="branch-not-selected" title>
                        <div className="customerListItem ">
                          <p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>aAAAA</font></font></p>			<input type="hidden" defaultValue={752} />
                        </div>
                      </li>
                      <li className="branch-not-selected" title>
                        <div className="customerListItem ">
                          <p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>aAAAA</font></font></p>			<input type="hidden" defaultValue={753} />
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
                          <p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>llllll</font></font></p>			<input type="hidden" defaultValue={751} />
                        </div>
                      </li>
                      <li className="branch-not-selected" title>
                        <div className="customerListItem ">
                          <p className="customerCompany"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mail &amp; Print Partner Oy</font></font></p>			<p className="customerContact"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Kari Pohjola</font></font></p>			<input type="hidden" defaultValue={741} />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="customerTotalCount">
                    <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search found 31 customers</font></font></p>
                  </div>
                </div>
                <div className="contentRight" id="customerRight">
                  <div className="formContainer" id="customerContainer"><div id="c-edit_info">
                      {/* Muokattavien kenttien alkuperäiset arvot. */}
                      <input className="original_value" type="hidden" name="id" defaultValue={730} />
                      <input className="original_value" type="hidden" name="contact_id" defaultValue={1} />
                      <input className="original_value" type="hidden" name="contact_name" defaultValue="jiiojio" />
                      <input className="original_value" type="hidden" name="contact_phone" defaultValue="mjujhuhu" />
                      <input className="original_value" type="hidden" name="contact_email" defaultValue />
                      <input className="original_value" type="hidden" name="company_name" defaultValue={2.0} />
                      <input className="original_value" type="hidden" name="discount_percentage" defaultValue={0} />
                      <input className="original_value" type="hidden" name="payment_method" defaultValue={2} />
                      <input className="original_value" type="hidden" name="notes" defaultValue="Testiksi lisätietoja" />
                      <input className="original_value" type="hidden" name="edi_identifier" defaultValue />
                      <input className="original_value" type="hidden" name="intermediator" defaultValue />
                      <input className="original_value" type="hidden" name="business_identifier" defaultValue />
                      {/* Lisäkentät. */}
                      <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customizing customer information</font></font></h2>
                      <h3 className="c-section_header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Basic</font></font></h3>
                      <table className="c-table c-edittable c-info-table" style={{float: 'left'}} cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                            <th colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Particulars</font></font></th>
                          </tr>
                          <tr>
                            <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name</font></font></td>
                            <td className="required_field"><input type="text" name="contact_name" id="contact_name"   value = {this.state.userData.name} onChange={(e)=>{this.setState({name: e.target.value})}} /></td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Email address</font></font></td>
                            <td><input type="text" name="contact_email" id="contact_email" value = {this.state.userData.email} onChange={(e)=>{this.setState({email: e.target.value})}} /></td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Telephone number</font></font></td>
                            <td><input type="text" name="contact_phone" id="contact_phone" value = {this.state.userData.telephone} onChange={(e)=>{this.setState({telephone: e.target.value})}} /></td>
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
                      <table className="c-table c-edittable c-info-table" style={{float: 'left', marginLeft: '90px'}} cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                            <th colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Company Information </font></font><br /><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>(Fill in only if you are a business customer)</font></font></span></th>
                          </tr>
                          <tr>
                            <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the company</font></font></td>
                            <td><input type="text" name="company_name" id="company_name" value = {this.state.userData.companyName} onChange={(e)=>{this.setState({companyName: e.target.value})}} /></td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Business id</font></font></td>
                            <td><input type="text" name="business_identifier" id="business_identifier" maxLength={9} value = {this.state.userData.businessId} onChange={(e)=>{this.setState({name: e.target.businessId})}} /></td>
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
                      <table className="c-table c-edittable c-info-table" style={{float: 'left'}} cellSpacing={0} cellPadding={0} border={0}>
                        <tbody><tr>
                            <td width="50%"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>terms</font></font></td>
                            <td>
                              <select name="payment_method" id="payment_method">
                                <option value={1}>Cash customer</option>
                                <option value={2} selected="selected">billing Customer</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>discount percentage</font></font></td>
                            <td>
                              <input type="number" id="discount_percentage" name="discount_percentage" min={0} max={100} size={5} maxLength={3} value = {this.state.userData.discount} onChange={(e)=>{this.setState({discount: e.target.value})}} />
                            </td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>invoice address</font></font></td>
                            <td><input type="text" name="edi_identifier" id="edi_identifier" maxLength={20} value = {this.state.userData.invoiceAddress} onChange={(e)=>{this.setState({invoiceAddress: e.target.value})}} /></td>
                          </tr>
                          <tr>
                            <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Provider ID</font></font></td>
                            <td><input type="text" name="intermediator" id="intermediator" maxLength={20} value = {this.state.userData.providerId} onChange={(e)=>{this.setState({providerId: e.target.value})}} /></td>
                          </tr>
                        </tbody></table>
                      <div id="billing_address_fields" style={{float: 'left', marginLeft: '90px'}}>
                      </div>
                      <div className="clear" />
                      <h3 className="c-section_header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Other information</font></font></h3>
                      <div id="c-extra_fields">
                        <div>
                          <label htmlFor="notes"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Additional Information</font></font></label>
                          <textarea rows={5} cols={15} width="100%" name="notes" id="notes" defaultValue={"Testiksi lisätietoja"} />
                        </div>
                        {/* <div>
                      <label for="language">Asiointikieli</label>
                      <input type="text" name="language" id="language" value="" />
                  </div> */}
                      </div>
                      <button onClick = {this.edit} id="c-save_info" className="basicButton whiteButton"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>save</font></font></button>
                      <button id="c-cancel" className="basicButton whiteButton"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cancel</font></font></button>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          
        );
    }
}

export default editCustomer;