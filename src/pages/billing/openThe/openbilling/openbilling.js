import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './openbilling.css'
import {fetchApi} from '../../../../services/api'

class openbilling extends Component {
  constructor(props){
    super(props);
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
          "client":"",
          "subscriber":"",
          "terms":"",
          "billingAddress":"",
          "dueDate":"",
          "orderDate":"",
          "dateOfInvoice":"",
          "invoiceNumber":0,
          "billSpecs":[{
            "job": "",
            "vat": 0,
            "tax": 0,
            "price": 0,
            "total": 0,
            "amount": 0,
            "unit": 0
          }],
          "freeComment": "",
          "agreedPrices": "",
        }
      }
    }
  }


  


  onSave = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "billId": this.state.invoice._id,
      "client": this.state.invoice.client,
      "subscriber": this.state.invoice.subscriber,
      "billingAddress": this.state.invoice.billingAddress,
      "terms": this.state.invoice.terms,
      "dueDate": this.state.invoice.dueDate,
      "orderDate": this.state.invoice.orderDate,
      "dateOfInvoice": this.state.invoice.dateOfInvoice,
      "invoiceNumber": this.state.invoice.invoiceNumber,
      "billSpecs": this.state.invoice.billSpecs,
      "agreedPrices": this.state.invoice.agreedPrices,
      "freeComment": this.state.invoice.freeComment,
      "billType": this.state.invoice.billType
    }
    console.log("------>", payload)


    fetchApi("/bills/createEditBill", "POST", payload, header)
      .then(response => {
        console.log("-->", response);
        if(response.data.success){
          // this.props.history.push("/billing/billable")
        }







      })

  }
  setKeys=(e,key)=>{
   var invoice1 = this.state.invoice;
    invoice1[key]= isNaN(parseInt(e.target.value))?0:parseInt(e.target.value);
    // co
   this.setState({
     invoice: invoice1
   })
  }
  

  addLine = () => {
    let billArray = this.state.invoice.billSpecs;
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
    let billArr = this.state.invoice.billSpecs;
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
                   
                   
                    <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } }">

                    <Link to={{ pathname: '/billing/openthe/jobs', query: this.props.location.query, track: this.props.location.track }}>
                    <div align="center" className="mustateksti">
                    <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Jobs</font>
                    </font>
                    </div>
                    </Link>
                    </td>
                    
                        <td width="25%" bgcolor="#ff7d00" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=4&job_id=60'">
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
                                          <link type="text/css" rel="stylesheet" href="css/cal.css" />
                                          <link type="text/css" rel="stylesheet" href="css/lasku.css" />
                                          <link type="text/css" rel="stylesheet" href="css/flexselect.css" />
                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        \t.basicButton {\n        \t\tmargin-left: 8px;\n        \t}\n        " }} />
                                          {/*
                          
                          
                      */}
                                          
                                            <div className="page_header">
                                              <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Invoice details</font></font></h2>
                                            </div>
                                            <table className="lasku1 step4_table" border={0} style={{marginTop: '20px'}} id="TABLE_3">
                                              <tbody><tr className="invoiceData">
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customer</font></font></td>
                                                  <td>
                                                    <div className="inputParent"><input type="text" className="searchPlugin" size={30} name="asiakas" id="asiakas" defaultValue = {this.state.invoice.client} /><span className="loadingicon" style={{left: '221px', top: '3px', display: 'none'}} /><span className="emptyText" style={{left: '8px', top: '4px', display: 'none'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>customer Search</font></font></span></div>
                                                  </td>
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>billing address</font></font></td>
                                                  <td style={{verticalAlign: 'top'}} rowSpan={2}>
                                                    <textarea name="osoite" cols={25} rows={5} id="osoite" style={{maxHeight: '120px', maxWidth: '180px'}} value={this.state.invoice.billingAddress} onChange={(e) => { this.setKeys(  e, "billingAddress")}}/>
                                                  </td>
                                                  <td align="right"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>terms</font></font></td>
                                                  <td>
                                                    <select name="maksuehdot" value={this.state.invoice.terms} onChange={(e) => { this.setKeys(  e,"terms") }}>
                                                      <option value={1}>Cash</option>
                                                      <option value={2} selected>Fall</option>
                                                    </select>
                                                  </td>
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Order Date</font></font></td>
                                                  <td>
                                                    <input type="date" className="datepicker tilauspvm hasDatepicker" name="currentDateFormat" size={14} title="Please select a date"  onChange={(e) => { this.setKeys(  e,"orderDate") }} id="dp1564050577723" />
                                                    
                                                  </td>
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Invoice number</font></font></td>
                                                  <td>
                                                    <input type="text" size={10} name="invoice_number" id="invoice_number" title="Automatic.  Can usually be left blank." value={this.state.invoice.invoiceNumber} onChange={(e) => { this.setKeys(e,"invoiceNumber") }} />
                                                  </td>
                                                </tr>
                                                <tr className="invoiceData">
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Subscriber</font></font></td>
                                                  <td>
                                                    <input type="text" size={30} name="tilaaja" id="tilaaja" value={this.state.invoice.subscriber} onChange={(e) => { this.setKeys(  e,"subscriber") }}/>
                                                  </td>
                                                  <td />
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Due Date</font></font></td>
                                                  <td>
                                                    <select name="duedate" value={this.state.invoice.dueDate} onChange={(e) => { this.setKeys(  e,"dueDate") }}>
                                                      <option value={0}>immediately</option><option value={7}>7 days</option><option value={14} selected>14 days</option><option value={60}>60 days</option>				</select>
                                                  </td>
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Date of an invoice</font></font></td>
                                                  <td>
                                                    <input type="date" className="datepicker invoicedate hasDatepicker" name="currentDateFormat" size={14} title="Please select a date"  onChange={(e) => { this.setKeys( e,"dateOfInvoice" ) }} id="dp1564050577724" />
                                                  </td>
                                                </tr>
                                                <input type="hidden" id="customer_id" name="customer_id" defaultValue={735} />
                                                <input type="hidden" name="laskutusnimi" defaultValue />
                                                <input type="hidden" name="worker_id" defaultValue={48} />
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
                  {this.state.invoice.billSpecs.map((x, index) => {
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
                          <input autoComplete="off" style={{ width: '95%' }} id="invoice1" type="text" name="names[]" className="followChange" value={this.state.invoice.billSpecs[index].job} onChange={(e) => { this.CreateData('job', e.target.value, index) }} />
                        </td>
                        <td width="260px" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                          <input type="hidden" name="lisa_yksikot[]" defaultValue /><input type="number" name="yksikot[]" className="followChange" value={this.state.invoice.billSpecs[index].unit} onChange={(e) => { this.CreateData('unit', e.target.value, index) }} /></td>			<td width="95px" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_maarat[]" defaultValue />				<input type="number" name="maarat[]" className="followChange" value={this.state.invoice.billSpecs[index].amount} onChange={(e) => { this.CreateData('amount', e.target.value, index) }} />			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_hinnat[]" defaultValue={0} />				<input type="number" id={1} name="hinnat[]" className="followChange update" value={this.state.invoice.billSpecs[index].price} onChange={(e) => { this.CreateData('price', e.target.value, index) }} size={8} onkeyup="updatePrices()" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font><input type="hidden" name="alkup_hinnat[]" defaultValue />			</td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<input type="hidden" name="lisa_alvit[]" defaultValue={24} />				<select name="alvit[]" className="followChangeSelect" id="alv_1" value={this.state.invoice.billSpecs[index].vat} onChange={(e) => { this.CreateData('vat', e.target.value, index) }}>				<option value={24}>24%</option><option value={23}>23%</option><option value={10}>10%</option><option value={9}>9%</option><option value={0}>0%</option>			</select></td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="verot[]" value={this.state.invoice.billSpecs[index].tax} id="vero_1" size={8} /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>			<td style={{ backgroundColor: 'rgb(255, 255, 255)' }}><input disabled type="text" name="kokohinta" id="verollinen_1" size={8} value={this.state.invoice.billSpecs[index].total} onkeyup="updatePrices()" /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>			<td className="table_button" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>				<button id="actions_1" style={{ height: '25px' }} className="actionsButton ui-button ui-widget ui-state-default ui-corner-all ui-button-icons-only ui-button-icon-only" role="button" aria-disabled="false" title="functions"><span className="ui-button-icon ui-icon ui-icon-gear" /><span className="ui-button-icon-space"> </span><span className="ui-button-icon-primary ui-icon ui-icon-gear" /><span className="ui-button-text"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>functions</font></font></span><span className="ui-button-icon-secondary ui-icon ui-icon-triangle-1-s" /></button>			</td>		</tr>
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
                    this.state.invoice.billSpecs.reduce( function(a, b){
                      return parseInt(a) + parseInt(b['price']);
                  }, 0)
                  } size={8} /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €&nbsp;
                                    </font></font><input type="hidden" name="kokohinta_exact" defaultValue={0} />
                    </td>
                    <td />
                    <td><input disabled type="text" name="verot[]" id="vero_yht" size={8} defaultValue /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>
                    <td><input disabled type="number" name="kokohinta" id="verollinen_yht" size={8} value = {
                    this.state.invoice.billSpecs.reduce( function(a, b){
                      return a + b['total'];
                  }, 0)
                  } /><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> €</font></font></td>
                    <td />
                  </tr>
                </tbody></table>
            </div>
                                            <table className="lasku1 step4_table" border={0} width="100%" id="lasku_table2" cellSpacing={0}>
                                              <tbody><tr>
                                                  <td style={{width: '80px'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Free comment</font></font></td>
                                                  <td><textarea style={{width: '100%'}} type="text" name="comment" size={60} value={this.state.invoice.freeComment} /></td>
                                                </tr>
                                                <tr>
                                                  <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Agreed prices</font></font></td>
                                                  <td><textarea style={{width: '100%'}} readOnly rows={2} cols={20} defaultValue={"foo"} /></td>
                                                </tr>
                                              </tbody></table>
                                            <div style={{textAlign: 'right', marginTop: '15px', marginBottom: '5px'}}>
                                              <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input className="basicButton whiteButton" type="submit" name="invoice_save" id="invoice_save" value="Save" onClick={this.onSave} /></font></font></font></font>
                                              <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input className="basicButton whiteButton" type="submit" name="button2" id="button2" value="Preview " /></font></font></font></font>
                                              <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input className="basicButton whiteButton" type="submit" name="quick_ready" id="quick_ready" value="Accept invoice" /></font></font></font></font>
                                            </div>
                                          
                                          <div id="actionsListContainer"><div className="actionsList" id="al_1">
                                              <ul>
                                                <li className="implemented shipmentAction" id="toggleShipment_1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a shipping line</font></font></li>
                                                {/* <li class='notimplemented discountAction' id='toggleDiscount_1'>Lisää alennusrivi</li> */}
                                                <li className="implemented newRowAction" id="addNewRow_1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new line</font></font></li>
                                                <li className="implemented deleteRowAction" id="deleteRow_1"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delete the row</font></font></li>
                                              </ul>
                                            </div></div>
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

export default openbilling;