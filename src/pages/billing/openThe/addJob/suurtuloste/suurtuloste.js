import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../../services/api'

class suurtuloste extends Component {
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
        "jobSize":"",
        "qty": "",
        "paper":"",
        "delivery": "",
        "date":"",
        "additionalInfo": "",
        "agreedPrice": "",
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
      "component":"largeprintjob",
      "orderId": this.state.orderId,
      "job": this.state.job,
      "jobSize":this.state.jobSize,
      "qty": this.state.qty,
      "paper":this.state.paper,
      "delivery": this.state.delivery,
      "date":this.state.date,
      "additionalInfo": this.state.additionalInfo,
      "agreedPrice": this.state.agreedPrice
      
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
                      {this.state.hide?null:(  <div id="menu_level2">
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
                                              <div align="center">
                                                <table width={990} border={0} align="center" id="TABLE_3">
                                                  <tbody><tr>
                                                      <td colSpan={4} className="blue"><div align="center">
                                                          <h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adding a large print job</font></font></h3>
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                      <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></td>
                                                      <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Job Size (cm x cm)</font></font></td>
                                                      <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Qty</font></font></td>
                                                      <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>printing Paper</font></font></td>
                                                    </tr>
                                                    <tr>
                                                      <td className="blue"><input name="name" type="text" size={20} value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }} /></td>
                                                      <td width={284} className="blue"><label>
                                                          <input name="koko" type="text" value={this.state.jobSize} onChange={(e) => { this.changeValue("jobSize", e.target.value) }} size={20} />
                                                        </label></td>
                                                      <td width={230} className="blue"><label htmlFor="kpl" />
                                                        <input name="kpl" type="text" size={10} value={this.state.qty} onChange={(e) => { this.changeValue("qty", e.target.value) }} /></td>
                                                      <td width={293} className="blue">
                                                        <select name="paper" value={this.state.paper} onChange={(e) => { this.changeValue("paper", e.target.value) }}>
                                                        <option></option>
                                                        <option>jhh 0 g</option>
                                                          <option>paper 50g</option>
                                                          <option>paper4.0 g</option>
                                                          <option>papero2 0g</option>
                                                          </select>
                                                        <input type="hidden" name="customer_id" defaultValue={735} />
                                                        <input type="hidden" name="job_id" defaultValue={60} />
                                                        <input type="hidden" name="tyoid" defaultValue={0} /></td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={1} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery</font></font></td>
                                                      <td colSpan={3} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work promised complete </font></font></td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={1} className="blue">
                                                        <select name="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                          <option>pickup</option>
                                                          <option>delivery</option>
                                                          <option>mailing</option>
                                                          <option>e-mail</option>
                                                        </select>		</td>
                                                      <td colSpan={3} className="blue">
                                                        <label>
                                                          <input type="date"  size={10} name="dl2" id="dl2" dvalue={this.state.date} onChange={(e) => { this.changeValue("date", e.target.value) }} />
                                                          <input type="hidden" name="dl" id="dl" defaultValue />			<div id="div1" style={{position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white'}} />
                                                         
                                                        </label>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="blue" colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For more information:</font></font></td>
                                                      <td className="blue" colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>More work-related files:</font></font></td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={2} className="blue">
                                                        <textarea name="lisatiedot" cols={60} rows={8} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }} />
                                                      </td>		<td colSpan={2} className="blue"><input type="file" id="firstfile" name="ufile[]" />
                                                        <input type="hidden" defaultValue={1} name="upload" />
                                                        <br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                            Files (max 10): </font></font><table id="files_list" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prices agreed with the customer:</font></font></td>
                                                      <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The agreed price for the work</font></font></td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={2} className="blue"><textarea name="sovitut_hinnat" readOnly cols={40} rows={5} id="sovitut_hinnat" value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} /></td>
                                                      <td colSpan={2} className="blue">
                                                        <input name="hinta" type="text" size={5} value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} id="hinta1" /><br />
                                                      </td>
                                                    </tr>    <tr>
                                                      <td colSpan={4} className="blue">
                                                        <div align="center">
                                                          <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" id="button" value="save" onClick={this.onSave}/></font></font></label>
                                                        </div>    </td>
                                                    </tr>
                                                  </tbody></table>
                                              </div>
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

export default suurtuloste;