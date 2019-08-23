import React, { Component } from 'react';
import './newbill.css'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api'
// var globalobj={}
class newBill extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "clientId":"",
      "billId": "",
      "subscriber": "",
      "billingAddress": "",
      "terms": "",
      "dueDate": "",
      "orderDate": "",
      "dateOfInvoice": "",
      "invoiceNumber": "",
      "billSpecs": [{
        "job": "",
        "vat": 0,
        "tax": 0,
        "price": 0,
        "total": 0,
        "amount": 0,
        "unit": 0
      }],
      "agreedPrices": "",
      "freeComment": "",
      "billType": "",
      "customer": [],
      "selectedCustomer":{
        "companyName":"",
        "basic":[{
          "name":""
        }],
        "addresses":[{
          "deliveryAddress":""
        }]
      }




    }



  }

  



  


  onLoad = (data) => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "filters": {
        "search": data
      }
    }
    // console.log(data);
    fetchApi("/clients/loadClients", "POST", payload, header)
      .then(response => {
        console.log("first response", response);
        if (response.data.data) {
          if(response.data && response.data.success && response.data.data.length ==1){
              this.setState({
                "selectedCustomer":response.data.data[0],
                "clientId":response.data.data[0]._id
              })
          }
          this.setState({
            "customer": response.data.data
          })

        }
        else{
          this.setState({
            "selectedCustomer":{
              "companyName":"",
              "basic":[{
                "name":""
              }],
              "addresses":[{
                "deliveryAddress":""
              }]
            }
          })
        }






      })
  }

  addLine = () => {
    let billArray = this.state.billSpecs;
    billArray.push({
      "job": "",
      "vat": 0,
      "tax": 0,
      "price": 0,
      "total": 0,
      "amount": 0,
      "unit": 0
    });

    this.setState({
      "billSpecs": billArray
    })
  }

  CreateData = (key, value, index) => {
    console.log("key ", key, " value ", value);
    let billArr = this.state.billSpecs;
    let globalobj = billArr[index];
    if(!value){
      value=0;
    }
    if (key == "price" && value) {
      globalobj["tax"] = (value * globalobj["vat"]) / 100;
      console.log("valiue", value);
      globalobj["total"] = parseFloat(globalobj["tax"]) + parseFloat(value);
      // console.log(parseFloat(globalobj["tax"]) + " " + parseInt(globalobj["price"]))

    }
    else if (key == "vat") {
      globalobj["tax"] = (value * globalobj["price"]) / 100;
      // console.log(parseFloat(globalobj["tax"]) + " " + parseInt(globalobj["price"]))
      globalobj["total"] = parseFloat(globalobj["tax"]) + parseInt(globalobj["price"]);
    }

    console.log(parseFloat(globalobj["tax"]) + " " + parseInt(globalobj["price"]))
    // globalobj["total"] = parseFloat(globalobj["tax"]) + parseFloat(globalobj["price"]);
    globalobj[key] = value;
    billArr[index] = globalobj;
    this.setState({
      "billSpecs": billArr
    })
  }


  onSave = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "billId": this.state.billId,
      "client": this.state.clientId,
      "subscriber": this.state.subscriber,
      "billingAddress": this.state.billingAddress,
      "terms": this.state.terms,
      "dueDate": this.state.dueDate,
      "orderDate": this.state.orderDate,
      "dateOfInvoice": this.state.dateOfInvoice,
      "invoiceNumber": this.state.invoiceNumber,
      "billSpecs": this.state.billSpecs,
      "agreedPrices": this.state.agreedPrices,
      "freeComment": this.state.freeComment,
      "billType": this.state.billType
    }
    console.log("------>", payload)


    fetchApi("/bills/createEditBill", "POST", payload, header)
      .then(response => {
        console.log("-->", response);







      })

  }
  render() {
    return (

      <div className="padding-30" >

        <div id="menu_level2">
          <ul className="buttons_navigate_lvl_2">
            <li >
              <Link to="/billing/billable"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Billable</font></font></span></Link>
            </li>
            <li className="selected_item">
              <Link to="/billing/newbill"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>New bill</font></font></span></Link>
            </li>
          </ul>
        </div>

        <div id="div_content">
          <link type="text/css" rel="stylesheet" href="css/cal.css" />
          <link type="text/css" rel="stylesheet" href="css/lasku.css" />
          <link type="text/css" rel="stylesheet" href="css/flexselect.css" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        \t.basicButton {\n        \t\tmargin-left: 8px;\n        \t}\n        " }} />
          {/*
                          
                          
                      */}
          <div id="lasku_form" name="form1" method="post" >
            <div className="page_header">
              <h2><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Invoice details</font></font></h2>
            </div>
            <table className="lasku1 step4_table" border={0} style={{ marginTop: '20px' }} id="TABLE_1">
              <tbody><tr className="invoiceData">
                <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Customer</font></font></td>
                <td>
                  <div className="inputParent">
                    <input type="text" className="searchPlugin" name="asiakas" id="asiakas" onChange={(e) => { this.onLoad(e.target.value) }} list="client-names" />

                    <datalist id="client-names" >
                      <select >
                      {
                        this.state.customer.map((value, index) => {
                          console.log("----> ", value);
                          return (
                            <option value={value.companyName} key={index} onClick={(e)=>this.selectSubscriber(e.target.value)}/>);
                        })}

</select>

                    </datalist>

</div>
                </td>
                <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>billing address</font></font></td>
                <td style={{ verticalAlign: 'top' }} rowSpan={2}>
                  <textarea name="osoite" cols={25} rows={5} id="osoite" style={{ maxHeight: '120px', maxWidth: '180px' }} value={this.state.selectedCustomer.addresses[0].deliveryAddress} ></textarea>
                </td>
                <td align="right"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>terms</font></font></td>
                <td>
                  <select name="maksuehdot" value={this.state.terms} onChange={(e) => { this.setState({ terms: e.target.value }) }}>
                    <option value={this.state.terms}>Cash</option>
                    <option value={this.state.terms}>Fall</option>
                  </select>
                </td>
                <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Order Date</font></font></td>
                <td>
                  <input type="date" className="datepicker tilauspvm hasDatepicker" name="currentDateFormat" size={14} title="Please select a date" value={this.state.orderDate} onChange={(e)=> {this.setState({orderDate: e.target.value})}} id="dp1563802839006" />
               
                </td>
                <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Invoice number</font></font></td>
                <td>
                  <input type="text" size={10} name="invoice_number" id="invoice_number" title="Automatic.  Can usually be left blank." value={this.state.invoiceNumber} onChange={(e) => { this.setState({ invoiceNumber: e.target.value }) }} />
                </td>
              </tr>
                <tr className="invoiceData">
                  <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Subscriber</font></font></td>
                  <td>
                    <input type="text" size={30} name="tilaaja" id="tilaaja" value={this.state.selectedCustomer.basic[0].name} />

                  </td>
                  <td />
                  <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Due Date</font></font></td>
                  <td>
                    <select name="duedate" value={this.state.dueDate} onChange={(e) => { this.setState({ dueDate: e.target.value }) }}>
                      <option value={this.state.dueDate}>immediately</option><option value={this.state.dueDate}>7 days</option><option value={this.state.dueDate} selected>14 days</option><option value={this.state.dueDate}>60 days</option>				</select>
                  </td>
                  <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Date of an invoice</font></font></td>
                  <td>
                    <input type="date" className="datepicker invoicedate hasDatepicker" name="currentDateFormat" size={14} title="Please select a date" value={this.state.dateOfInvoice} onChange={(e)=> {this.setState({dateOfInvoice: e.target.value})}} id="dp1563802839007"/>
                  </td>
                </tr>
                <input type="hidden" id="customer_id" name="customer_id" defaultValue={0} />
                <input type="hidden" name="laskutusnimi" defaultValue />
                <input type="hidden" name="worker_id" defaultValue />
                <input type="hidden" name="user_id" defaultValue={48} />
              </tbody></table>
            <div className="table_header"><p><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Bill specification</font></font></p></div>
            <div className="table_container">
              <div style={{ display: 'none' }} id="alv_arr"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>24 | 23 | 10 | 9 | 0</font></font></div><div style={{ display: 'none' }} id="default_delivery" /><table border={0} width="100%" id="lasku_table" cellSpacing={0} className="ui-sortable">
                <tbody><tr className="column_titles">
                  <td width="25px" style={{ borderRightWidth: '1px' }} />
                  <td width="35px" title="Hide row from invoice.  The line price will be counted against the previous non-hidden line above." style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Hide</font></font></td>
                  <td width="260px" style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Job</font></font></td>
                  <td width="260px" style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Unit</font></font></td>
                  <td width="95px" style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Amount</font></font></td>
                  <td style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Price</font></font></td>
                  <td style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>VAT-%</font></font></td>
                  <td style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Tax</font></font></td>
                  <td style={{ borderRightWidth: '1px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>In total</font></font></td>
                  <td className="table_button">&nbsp;</td>
                </tr>
                  <tr className="gap_row"><td colSpan={9} style={{ height: '2px' }}><input type="hidden" name="job_id" defaultValue /></td></tr>
                </tbody>
                {/*/table*/}
                {/*table width='100%' border='0' style='margin-top: 30px;' class='lasku1' align='center'*/}
                <tbody className="sortableRow">
                  {this.state.billSpecs.map((x, index) => {
                    return (
                      <tr className="lasku_new_row lasku_row">
                        <input type="hidden" name="product_codes[]" defaultValue />
                        <input type="hidden" name="unit_prices[]" defaultValue />
                        <td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                          <div className="rowHandle" title="Drag to change the order of the rows" />
                        </td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                          <label className="toggle_hide_row_label">
                            <input type="hidden" name="child_row[]" defaultValue={0} />					<input type="checkbox" className="toggle_hide_row" title="Hide row from invoice.  The line price will be counted against the previous non-hidden line above." disabled />				</label>
                        </td>
                        <td width="260px" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                          <input type="hidden" name="lisa_names[]" defaultValue />
                          <input autoComplete="off" style={{ width: '95%' }} id="invoice1" type="text" name="names[]" className="followChange" value={this.state.billSpecs[index].job} onChange={(e) => { this.CreateData('job', e.target.value, index) }} />
                        </td>
                        <td width="260px" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                          <input type="hidden" name="lisa_yksikot[]" defaultValue /><input type="number" name="yksikot[]" className="followChange" value={this.state.billSpecs[index].unit} onChange={(e) => { this.CreateData('unit', e.target.value, index) }} /></td>			<td width="95px" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_maarat[]" defaultValue />				<input type="number" name="maarat[]" className="followChange" value={this.state.billSpecs[index].amount} onChange={(e) => { this.CreateData('amount', e.target.value, index) }} />			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_hinnat[]" defaultValue={0} />				<input type="number" id={1} name="hinnat[]" className="followChange update" value={this.state.billSpecs[index].price} onChange={(e) => { this.CreateData('price', e.target.value, index) }} size={8} onkeyup="updatePrices()" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font><input type="hidden" name="alkup_hinnat[]" defaultValue />			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_alvit[]" defaultValue={24} />				<select name="alvit[]" className="followChangeSelect" id="alv_1" value={this.state.billSpecs[index].vat} onChange={(e) => { this.CreateData('vat', e.target.value, index) }}>				<option value={24}>24%</option><option value={23}>23%</option><option value={10}>10%</option><option value={9}>9%</option><option value={0}>0%</option>			</select></td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="verot[]" value={this.state.billSpecs[index].tax} id="vero_1" size={8} /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="kokohinta" id="verollinen_1" size={8} value={this.state.billSpecs[index].total} onkeyup="updatePrices()" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>			<td className="table_button" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<button id="actions_1" style={{ height: '25px' }} className="actionsButton ui-button ui-widget ui-state-default ui-corner-all ui-button-icons-only ui-button-icon-only" role="button" aria-disabled="false" title="functions"><span className="ui-button-icon ui-icon ui-icon-gear" /><span className="ui-button-icon-space"> </span><span className="ui-button-icon-primary ui-icon ui-icon-gear" /><span className="ui-button-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>functions</font></font></span><span className="ui-button-icon-secondary ui-icon ui-icon-triangle-1-s" /></button>			</td>		</tr>
                    )
                  })}
                  <tr className="new_shipment_row shipping_row" style={{ display: 'none' }}>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }} />			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }} />			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_toimitus[]" defaultValue="nouto" />				<span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>shipping Method </font></font><select name="toimitus[]" className="followChangeSelect">					<option value="nouto">Pickup</option>					<option value="toimitus">Delivery</option>					<option value="postitus">Postitus</option>					<option value="sahkoposti">Sähköposti</option>					<option value="ajo">Ajo</option>				</select></span>			</td><td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_toimitusaika[]" />				Toimitusaika <input type="text" className="followChangeDatepicker datepicker hasDatepicker" size={14} title="Valitse päivämäärä" defaultValue id="dp1563802839008" /><img className="ui-datepicker-trigger" src="img/icons/018.gif" alt="Valitse päivämäärä" title="Valitse päivämäärä" /><input type="hidden" className="datepickerAltField1" name="toimitusaika[]" defaultValue />			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>Toimitusmaksu</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_toimitushinta[]" defaultValue={0} />				<input type="text" id="toimitus_1" name="toimitushinta[]" className="followChange" size={8} defaultValue={0} onkeyup="updatePrices()" /> €			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }} />			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="verot[]" id="toimitusvero_1" size={8} defaultValue onkeyup="updatePrices()" /> €</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="kokohinta" id="toimitusverollinen_1" size={8} defaultValue onkeyup="updatePrices()" /> €</td>			<td className="table_button" style={{ backgroundColor: 'rgb(255, 255, 255)' }}><button id="delete_1" style={{ height: '25px' }} className="deleteButton ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" role="button" aria-disabled="false" title="Poista toimitusrivi"><span className="ui-button-icon ui-icon ui-icon-closethick" /><span className="ui-button-icon-space"> </span><span className="ui-button-icon-primary ui-icon ui-icon-closethick" /><span className="ui-button-text">Poista toimitusrivi</span></button></td>		</tr>	</tbody><tbody>
                  <tr className="gap_row" height="20px">
                    <td />
                    <td />
                    <td rowSpan={2}>
                      {/* <input type='button' id='lasku_add_row' value=''/> */}
                      <button id="lasku_add_row" className="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary" onClick={() => this.addLine()} role="button" aria-disabled="false"><span className="ui-button-icon-primary ui-icon ui-icon-plus" /><span className="ui-button-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Add a new line</font></font></span></button>
                    </td>
                    <td />
                    <td colSpan={6}><hr size={2} style={{ color: 'black', width: '99%' }} /><hr size={2} style={{ color: 'black', width: '99%' }} /></td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>In total</font></font></td>
                    <td>
                      <input type="text"  name="kokohinta" id="hinta_yht" value = {
                    this.state.billSpecs.reduce( function(a, b){
                      return parseInt(a) + parseInt(b['price']);
                  }, 0)
                  } size={8} /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €&nbsp;
                                    </font></font><input type="hidden" name="kokohinta_exact" defaultValue={0} />
                    </td>
                    <td />
                    <td><input disabled type="text" name="verot[]" id="vero_yht" size={8} defaultValue /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>
                    <td><input disabled type="number" name="kokohinta" id="verollinen_yht" size={8} value = {
                    this.state.billSpecs.reduce( function(a, b){
                      return a + b['total'];
                  }, 0)
                  } /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>
                    <td />
                  </tr>
                </tbody></table>
            </div>
            <table className="lasku1 step4_table" border={0} width="100%" id="lasku_table2" cellSpacing={0}>
              <tbody><tr>
                <td style={{ width: '80px' }}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Free comment</font></font></td>
                <td><textarea style={{ width: '100%' }} type="text" name="comment" size={60} value={this.state.freeComment} onChange={(e) => { this.setState({ freeComment: e.target.value }) }} /></td>
              </tr>
                <tr>
                  <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Agreed prices</font></font></td>
                  <td><textarea style={{ width: '100%' }} type="text" name="comment" value={this.state.agreedPrices} onChange={(e) => { this.setState({ agreedPrices: e.target.value }) }} /></td>
                </tr>
              </tbody></table>
            <div style={{ textAlign: 'right', marginTop: '15px', marginBottom: '5px' }}>
              <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><button className="basicButton whiteButton" type="save" name="invoice_save" id="invoice_save" value="Save " onClick={this.onSave} >Save</button></font></font>
              <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><button className="basicButton whiteButton" type="Preview" name="button2" id="button2">Preview </button></font></font>
              <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><button className="basicButton whiteButton" type="Acept invoice" name="quick_ready" id="quick_ready"  >Accept invoice</button></font></font>
            </div>
          </div>
          <div id="actionsListContainer"><div className="actionsList" id="al_1">
            <ul>
              <li className="implemented shipmentAction" id="toggleShipment_1">Lisää toimitusrivi</li>
              {/* <li class='notimplemented discountAction' id='toggleDiscount_1'>Lisää alennusrivi</li> */}
              <li className="implemented newRowAction" id="addNewRow_1">Lisää uusi rivi</li>
              <li className="implemented deleteRowAction" id="deleteRow_1">Poista rivi</li>
            </ul>
          </div></div>
        </div>

      </div>

    );
  }
}

export default newBill;