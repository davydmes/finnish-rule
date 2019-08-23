import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../../services/api'

class tavaran extends Component {
  constructor(props) {
    super(props)
    let hide = {};
    let stateObj = {};
    
    if(this.props && this.props.hideMenu){
      hide["hide"] = true;
    }
    else{
      hide["hide"] = false;
    }

    if(this.props && this.props.component){
      stateObj = {
      
        ...this.props.component,
        ...hide
      }
    }
    else{
      stateObj = {
      
        "job": "",
        "price":"",
        "numberOfShares": "",
        "delete":"",
        "delivery":"",
        "date": "",
        "additionalInfo":"",
        ...hide
      }
    }
    if (this.props.location && this.props.location.track) {
      this.state = {
        "orderId": this.props.location.query._id,
        ...stateObj
      };
    }
    else {
      this.state = {
        ...stateObj
      }
    }
  }


  changeValue=(key, val)=>{
    console.log(val);
    // let val = e.target.value ;
        this.setState({
         
            [key] : val
        })
  }

  onSave = () => {
    let header = {
      authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    }
    console.log(this.state)
    let payload = {
      "component":"tavaran",
      "job": this.state.job,
      "price":this.state.price,
      "numberOfShares": this.state.numberOfShares,
      "delete":this.state.delete,
      "delivery":this.state.delivery,
      "date": this.state.date,
      "additionalInfo":this.state.additionalInfo,
      
    }


    fetchApi("/jobs/createJob", "POST", payload, header)
      .then(response => {
        console.log(response);


      })
  }
    render() {
        return (
          
              
                    <div id="div_innercontent" className= "padding-30">
                      {/* Submenu. */}
                      {this.state.hide?null:(   <div id="menu_level2">
        <ul className="buttons_navigate_lvl_2">
          <li className="selected_item">
          <Link to ="/billing/billable"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billable</font></font></span></Link>
          </li>
          <li >
            <Link to ="/billing/newbill"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>New bill</font></font></span></Link>
          </li>
        </ul>
      </div>)}
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content">
                        <table className="basic" bgcolor="#000000" id="TABLE_1"><tbody>
                        
                        
                        {this.state.hide?null:( <tr className="tyootsikot"><td width="25%" height={39} style={{cursor: 'pointer'}} bgcolor="#525252" onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=1&job_id=60'">

<Link to = "/billing/openthe/customer">
<div align="center">

<font style={{verticalAlign: 'inherit'}}>
<font style={{verticalAlign: 'inherit'}}>customer Information</font>
</font>
</div>
</Link>
</td>
      <td width="25%" bgcolor="#FF7D00" style={{cursor: 'pointer', color: '#000000'}} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=2&job_id=60'">
      <Link to = "/billing/openthe/addjob" >
      <div align="center">
      <font style={{verticalAlign: 'inherit'}}>
      <font style={{verticalAlign: 'inherit'}}>Add job / edit job details</font>
      </font>
      </div>
      </Link>
      </td>
      <td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=3&job_id=60'">

        <Link to = "/billing/openthe/jobs">
      <div align="center">
      <font style={{verticalAlign: 'inherit'}}>
      <font style={{verticalAlign: 'inherit'}}>Jobs</font>
      </font>
      </div>
      </Link>
      </td>


      <td width="25%" bgcolor="#525252" style={{cursor: 'pointer'}} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=4&job_id=60'">
      <Link to = "/billing/openthe/openbilling">
      <div align="center">
      <font style={{verticalAlign: 'inherit'}}>
      <font style={{verticalAlign: 'inherit'}}>billing</font>
      </font>
      </div>
      </Link>
      </td>

      </tr>)}
                            <tr bgcolor="#FFFFFF">
                              <td colSpan={4}>
                                <table width="100%" border={0} className="workk" id="TABLE_2">
                                  <tbody><tr>
                                      <td><div align="center"><div className="job_container">
                                            <link rel="stylesheet" href="css/flexselect.css" type="text/css" media="screen" />
                                            <table className="basic" border={0} style={{margin: '10px auto 0', width: 'auto'}} id="TABLE_3">
                                                <tbody><tr>
                                                    <td width="350px"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The name of the product</font></font></td>
                                                    <td width="115px"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price per piece</font></font></td>
                                                    <td width="115px"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of shares</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>delete</font></font></td>
                                                  </tr><tr id="first_row" className="product_search_row">
                                                    <td>
                                                      <input type="hidden" defaultValue name="alv[]" className="hidden_alv" />
                                                      <input type="hidden" defaultValue name="varastokappale_id[]" className="hidden_varastokappale_id" />
                                                      <input type="hidden" defaultValue name="varasto_id[]" className="hidden_varasto_id" />
                                                      <div className="inputParent"><input type="text" size={30} style={{width: '250px'}} className="product_search" name="name[]" value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }} autoComplete="off" /><span className="loadingicon" style={{left: '243px', top: '3px', display: 'none'}} /><span className="emptyText" style={{left: '8px', top: '4px'}}></span></div>
                                                    </td>
                                                    <td><input type="text" name="hinta[]" value={this.state.price} onChange={(e) => { this.changeValue("price", e.target.value) }} size={8} /></td>
                                                    <td><input type="text" name="maara[]" value={this.state.numberOfShares} onChange={(e) => { this.changeValue("numberOfShares", e.target.value) }} size={8} /></td>
                                                    <td><input type="checkbox" name="delete_row[]" checked={this.state.delete} onChange={(e) => { this.changeValue("delete", e.target.checked) }} className="delete_row_checkbox" /></td>
                                                  </tr>
                                                  <tr id="last_before">
                                                    <td colSpan={4} style={{paddingTop: '10px'}}>
                                                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" id="add_item" defaultValue="Add a new product" /></font></font>
                                                      <div style={{clear: 'both'}} />
                                                    </td>
                                                    <td>
                                                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" id="delete_items" defaultValue="Delete the selected rows" style={{float: 'left'}} /></font></font>
                                                      <div style={{clear: 'both'}} />
                                                    </td>
                                                  </tr>
                                                </tbody></table>
                                              <table className="basic" border={0} id="TABLE_4">
                                                <tbody><tr id="hr">
                                                    <td colSpan={4}><hr style={{width: '95%', textAlign: 'center', margin: '40px auto 10px'}} /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>shipping Method</font></font></strong></td>
                                                    <td><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>deadline</font></font></strong></td>
                                                    <td><strong><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>More information about the entire order:</font></font></strong></td>
                                                  </tr>
                                                  <tr>
                                                    <td style={{verticalAlign: 'top'}}>
                                                      <select name="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                        <option>Pickup</option>
                                                        <option>Delivery</option>
                                                        <option>mailing</option>
                                                      </select>
                                                    </td>
                                                    <td style={{verticalAlign: 'top'}}>
                                                      <input type="date" className="datepicker inputBlurText hasDatepicker" name="dl" size={14} style={{width: '110px'}} title="Please select a date" value={this.state.date} onChange={(e) => { this.changeValue("date", e.target.value) }} id="dp1564058181704" />
                                                    </td>
                                                    <td colSpan={2}><textarea name="lisatiedot" style={{width: '100%'}} rows={6} cols={40} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additioonalInfo", e.target.value) }}/></td>
                                                  </tr>
                                                  {/*  */}</tbody></table>
                                              <div style={{float: 'left'}}>
                                                <input type="hidden" name="customer_id" defaultValue={735} />
                                                <input type="hidden" name="job_id" defaultValue={60} />
                                                <input type="hidden" name="tyoid" defaultValue={0} />
                                                <input type="hidden" name="id" defaultValue={0} />
                                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="submit_muokkaus" id="submit_muokkaus" value="save" onClick={this.onSave} /></font></font>
                                              </div>
                                          
                                            
                                              <div style={{float: 'right'}} />
                                            
                                          </div></div></td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table></div>
                    </div>
                 
        );
    }
}

export default tavaran;