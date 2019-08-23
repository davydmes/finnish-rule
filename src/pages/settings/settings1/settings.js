import React, { Component } from 'react';
import './settings.css'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api';
var x = {}
class settings extends Component {
  constructor(props) {
    super(props)
     x = localStorage.getItem("userData");
    x= JSON.parse(x);
    let settings = {
      "printingPg": "",
      "largePg": "",
      "layoutPg": "",
      "foundationPg": "",
      "adhesivePg": "",
      "deliveryPrice": "",
      "offerValidity": "",
      "productDetails": false,
      "productCode": false,
      "greetingText": "",
      "terms": "",
      "postingList": "",
      "landingGround": "",
      "paybackOptions": "",
      "defaultPayment": "",
      "invoiceOrderDate": false,
      "invoicePrintText": "",
      "invoiceSectiontext": ""
    };
    if (x && x.settings) {
      x.settings.paybackOptions = x.settings.paybackOptions.toString();
      settings = x.settings;
    }
    this.state = {
      settings
      }

  }

  changeValue=(key, value)=>{
    console.log("kuch content likh dio ",value )
    let previousState = this.state.settings
    if(value=="boolean"){
      previousState[key] = !previousState[key];
    }
    else{
      previousState[key] = value;
    }
    
    console.log(previousState);
    this.setState({
      "settings": previousState 
    },()=>{
      console.log("state update ---> ",this.state);
    })
  }

  onSave = () => {
    let header = {
      authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    }
    console.log("asdsadsad -----> ",this.state.settings.paybackOptions);  
    let statePayload = this.state.settings;
    let localData = JSON.parse(localStorage.getItem("userData"));
    localData.settings = statePayload;
    
    
    if(statePayload.paybackOptions instanceof Array){
      statePayload.paybackOptions = statePayload.paybackOptions.toString();
    }
    statePayload.paybackOptions = statePayload.paybackOptions.split(",").map(Number);
    
    fetchApi("/profile/saveSettings", "POST", statePayload, header)
      .then(response => {
        if(response.data.message == "success"){
        console.log(response);
        localStorage.setItem("userData", JSON.stringify(localData));
        }
      })

  }
  render() {
    return (
      <div className="padding-30">


        <div id="div_innercontent">
          {/* Submenu. */}
          <div id="menu_level2">
            <ul className="buttons_navigate_lvl_2">
              <li>
                <Link to="/settings/company"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Company</font></font></span></Link>
              </li>
              <li>
                <Link to="/settings/users"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Users</font></font></span></Link>
              </li>
              <li>
                <Link to="/settings/työjonohaut"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Työjonohaut</font></font></span></Link>
              </li>
              <li>
                <Link to="/settings/pricelist"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Price list</font></font></span></Link>
              </li>
              <li className="selected_item">
                <Link to="/settings/settings1"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Settings</font></font></span></Link>
              </li>
            </ul>
          </div>
          {/* Notification */}
          {/* Content. */}
          <div id="div_content">
            <div id="settingsForm">
              <fieldset>
                <legend><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Subscriptions</font></font></legend>
                <table id="TABLE_1">
                  <tbody><tr>
                    <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Printing paper product group</font></font></td>
                    <td>
                      <select className="newValue" id="category_id_for_print_paper" value= {this.state.settings.printingPg} onChange={(e) => {
                        this.changeValue("printingPg", e.target.value)
                      

                      }}>
                        <option value={0}>
                        </option><option value={555}>
                          555		</option>
                        <option value={"Papers"}>
                          Papers		</option>
                        <option value={"RULE-ready packages"}>
                          RULE-ready packages		</option>
                      </select>
                      <input type="hidden" className="originalValue" id="category_id_for_print_paper" defaultValue={0} />
                    </td>
                  </tr>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The product group in the warehouse where the paper used for print jobs is placed.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Large format printing paper product group</font></font></td>
                      <td>
                        <select className="newValue" id="category_id_for_print_paper" value= {this.state.settings.largePg} onChange={(e) => {
                        this.changeValue("largePg", e.target.value)
                      

                      }}>
                          <option value={0}>
                          </option><option value={555}>
                            555		</option>
                          <option value={"Papers"}>
                            Papers		</option>
                          <option value={"RULE-ready packages"}>
                            RULE-ready packages		</option>
                        </select>
                        <input type="hidden" className="originalValue" id="category_id_for_large_print_paper" defaultValue={0} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The product group in the warehouse where the papers used for large print jobs are placed.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Layout product group</font></font></td>
                      <td>
                        <select className="newValue" id="category_id_for_print_paper" value= {this.state.settings.layoutPg} onChange={(e) => {
                        this.changeValue("layoutPg", e.target.value)
                        }}>
                          <option value={0}>
                          </option><option value={555}>
                            555		</option>
                          <option value={"Papers"}>
                            Papers		</option>
                          <option value={"RULE-ready packages"}>
                            RULE-ready packages		</option>
                        </select>
                        <input type="hidden" className="originalValue" id="category_id_for_folding_items" defaultValue={0} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The stock product group where the folding price list is placed.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Foundation product group</font></font></td>
                      <td>
                        <select className="newValue" id="category_id_for_print_paper" value= {this.state.settings.foundationPg} onChange={(e) => {
                        this.changeValue("foundationPg", e.target.value)
                      

                      }}>
                          <option value={0}>
                          </option><option value={555}>
                            555		</option>
                          <option value={"Papers"}>
                            Papers		</option>
                          <option value={"RULE-ready packages"}>
                            RULE-ready packages		</option>
                        </select>
                        <input type="hidden" className="originalValue" id="category_id_for_riveting_items" defaultValue={0} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The stock product group that contains the stiffening pricelist.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Adhesive bonding product group</font></font></td>
                      <td>
                        <select className="newValue" id="category_id_for_print_paper" value= {this.state.settings.adhesivePg} onChange={(e) => {
                        this.changeValue("adhesivePg", e.target.value)
                      

                      }}>
                          <option value={0}>
                          </option><option value={555}>
                            555		</option>
                          <option value={"Papers"}>
                            Papers		</option>
                          <option value={"RULE-ready packages"}>
                            RULE-ready packages		</option>
                        </select>
                        <input type="hidden" className="originalValue" id="category_id_for_gluebind_items" defaultValue={0} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The stock product group where the bonding price list is placed.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>delivery Price</font></font></td>
                      <td>
                        <input type="text" className="newValue" maxLength={6} style={{ width: '45px' }} id="default_delivery_price" value={this.state.settings.deliveryPrice} onChange={(e) => {
                        this.changeValue("deliverPrice", e.target.value)
                      

                      }} />
                        <input type="hidden" className="originalValue" id="default_delivery_price" value={this.state.settings.deliveryPrice} onChange={(e) => {
                          this.setState({ "deliveryPrice": e.target.value })
                        }} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Default value for invoice import price when shipping is selected in order delivery terms.</font></font></td>
                    </tr>
                  </tbody></table>
              </fieldset>
              <fieldset>
                <legend><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Offer and mailing list</font></font></legend>
                <table id="TABLE_2">
                  <tbody><tr>
                    <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Period of validity of the offer</font></font></td>
                    <td>
                      <input type="text" className="newValue" maxLength={3} style={{ width: '23px' }} id="offer_valid_days" value={this.state.settings.offerValidity} onChange={(e) => {
                        this.changeValue("offerValidity", e.target.value)
                      

                      }} />
                      <input type="hidden" className="originalValue" id="offer_valid_days" defaultValue={7} />
                    </td>
                  </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Offer validity period in days (0 = no validity period).</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>
                        <input className="newValue" type="checkbox" id="offer_show_product_info" checked ={this.state.settings.productDetails} onClick={(e) => {
                        this.changeValue("productDetails", "boolean")
                      

                      }}/><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> Product details for the offer
                                      </font></font>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Specifies whether the offer displays additional product details.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>
                        <input className="newValue" type="checkbox" id="offer_show_product_code" checked ={this.state.settings.productCode} onClick={(e) => {
                        this.changeValue("productCode", "boolean")
                      

                      }}/><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> Product code for the offer
                                      </font></font>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Specifies whether the offer displays the product code.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Offer Greeting Text</font></font></td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <textarea rows={5} cols={80} className="newValue" id="offer_message" onChange={(e) => {
                        this.changeValue("greetingText", e.target.value)
                      

                      }} value={this.state.settings.greetingText} />
                        <input type="hidden" className="originalValue" id="offer_message" defaultValue="Kiitämme tarjouspyynnöstänne ja tarjoamme teille tuotteitamme seuraavasti:" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Terms and conditions of the offer</font></font></td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <textarea rows={5} cols={80} className="newValue" id="offer_terms" onChange={(e) => {
                        this.changeValue("terms", e.target.value)
                      

                      }} value={this.state.settings.terms} />
                        <input type="hidden" className="originalValue" id="offer_terms" defaultValue />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Posting List Final Text</font></font></td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <textarea rows={5} cols={80} className="newValue" id="shipping_list_end_note" onChange={(e) => {
                        this.changeValue("postingList", e.target.value)
                      

                      }} value={this.state.settings.postingList} />
                        <input type="hidden" className="originalValue" id="shipping_list_end_note" defaultValue />
                      </td>
                    </tr>
                  </tbody></table>
              </fieldset>
              <fieldset>
                <legend><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>billing</font></font></legend>
                <table id="TABLE_3">
                  <tbody><tr>
                    <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Landing ground</font></font></td>
                    <td>
                      <select className="newValue" id="invoice_template" onChange={(e) => {
                        this.changeValue("landingGround", e.target.value)
                      

                      }}  value= {this.state.settings.landingGround}>
                        <option value="standard form">standard form</option>
                        <option value="Invoice template 1">Invoice template 1</option>
                        <option value="Invoice template 2" selected>Invoice template 2</option>
                        <option value="Product sales Landing Ground">Product sales Landing Ground</option>
                        <option value="Finvoice test">Finvoice test</option>
                        <option value="Debug tool">Debug tool</option>
                      </select>
                      <input type="hidden" className="originalValue" id="invoice_template" defaultValue="default" />
                    </td>
                    <td>
                      <a href="#" id="preview_template"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>preview</font></font></a>
                    </td>
                  </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The report template used to print the invoice.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Payback Options</font></font></td>
                      <td colSpan={2}>
                        <input type="text" className="newValue" maxLength={40} style={{ width: '200px' }} id="invoice_payment_terms" onChange={(e) => {
                        this.changeValue("paybackOptions", e.target.value)
                      

                      }} value={this.state.settings.paybackOptions} />
                        <input type="hidden" className="originalValue" id="invoice_payment_terms" defaultValue="7,14,60" />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px', width: '400px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Payment options for your invoice. </font><font style={{ verticalAlign: 'inherit' }}>Enter the desired payment times in days as a comma-separated list. </font><font style={{ verticalAlign: 'inherit' }}>If you wish to have a payment period calculated from the end of the billing month, enter the end of month (eg EOM60).</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>default of payment</font></font></td>
                      <td>
                        <input type="text" className="newValue" maxLength={2} style={{ width: '23px' }} id="invoice_default_payment_term" onChange={(e) => {
                        this.changeValue("defaultPayment", e.target.value)
                      

                      }} value={this.state.settings.defaultPayment} />
                        <input type="hidden" className="originalValue" id="invoice_default_payment_term" defaultValue={14} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Default invoice payment time in days.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>
                        <input className="newValue" type="checkbox" id="invoice_show_order_date" checked={this.state.settings.invoiceOrderDate} defaultValue="true" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> Order date for invoice
                                      </font></font><input type="hidden" className="originalValue" id="invoice_show_order_date" onClick={(e) => {
                        this.changeValue("invoiceOrderDate", e.target.value)
                      }} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ fontSize: '10px', paddingBottom: '15px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Specifies whether to print the order date on the invoice.</font></font></td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>Laskulle tulostettavan viestin teksti</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <textarea rows={5} cols={80} className="newValue" id="invoice_message"onChange={(e) => {
                        this.changeValue("inovicePrintText", e.target.value)
                      

                      }} value={this.state.settings.invoicePrintText} />
                        <input type="hidden" className="originalValue" id="invoice_message" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>Laskun erittelyosan teksti</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <textarea rows={5} cols={80} className="newValue" id="invoice_details_text" onChange={(e) => {
                        this.changeValue("invoiceSelectionText", e.target.value)
                      }} value={this.state.settings.invoiceSectiontext} />
                        <input type="hidden" className="originalValue" id="invoice_details_text" defaultValue="{Inv:comment}" />
                      </td>
                    </tr>
                  </tbody></table>
              </fieldset>
              <input id="saveForm" type="button" defaultValue="Save" onClick={this.onSave} />
              <div id="saveResult"><p /></div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default settings;