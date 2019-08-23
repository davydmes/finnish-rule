import React, { Component } from 'react';
import './kayntikortti.css'
import {Link } from 'react-router-dom'
import{fetchApi} from '../../../../../services/api' 

class kayntikortti extends Component {
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
        "paper": "",
        "output": "",
        "businessCard": "",
        "sheetNumber": "",
        "delivery": "",
        "date": "",
        "additionalInfo": "",
        "priceAgreed": "",
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
      "component":"BusinesssCard",
      "orderId":this.state.orderId,
      "job": this.state.job,
      "paper": this.state.paper,
      "output": this.state.output,
      "businessCard": this.state.businessCard,
      "sheetNumber": this.state.sheetNumber,
      "delivery": this.state.delivery,
      "date": this.state.date,
      "additionalInfo": this.state.additionalInfo,
      "priceAgreed": this.state.priceAgreed,
      "agreedPrice": this.state.agreedPrice,
      
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


                     {this.state.hide?null:(<div id="menu_level2">
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
                                              <table width={990} border={0} align="center" id="TABLE_3">
                                                <tbody><tr>
                                                    <td colSpan={5} className="blue">
                                                      <div align="center"><h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adding business card work</font></font></h3></div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td width={150} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Paper</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Output</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>number of business cards</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of sheets to print</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue"><input name="workname" type="text" value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }}/></td>
                                                    <select className="blue"><select name="paper_id" value={this.state.paper} onChange={(e) => { this.changeValue("paper", e.target.value) }}/>
                                                          <option value="0 g">0g</option>
                                                          <option value="0 g">0g</option>
                                                          <option value="2 8 9g">2 8 9g</option>
                                                          <option value="rulertyu g">rulertyu g</option>
                                                          </select>

                                                    <td  className="blue">
                                                      <label>
                                                        <select name="tulostus1" value={this.state.output} onChange={(e) => { this.changeValue("output", e.target.value) }}>
                                                          <option value="1/0">1/0</option>
                                                          <option value="1/1">1/1</option>
                                                          <option value="4/0">4/0</option>
                                                          <option value="4/4">4/4</option>
                                                          <option value="4/1">4/1</option>
                                                        </select>
                                                      </label>
                                                    </td>
                                                    <td width={205} className="blue"><input type="text" name="maara" value={this.state.businessCard} onChange={(e) => { this.changeValue("businessCard", e.target.value) }} /></td>
                                                    <td width={144} className="blue">
                                                      <label><input type="text" name="arkkimaara" value={this.state.sheetNumber} onChange={(e) => { this.changeValue("sheetNumber", e.target.value) }}/></label>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>shipping Method</font></font></td>
                                                    <td colSpan={4} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work promised complete</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue">
                                                      <select name="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                        <option>pickup</option>
                                                        <option>delivery</option>
                                                        <option>mailing</option>
                                                        <option>e-mail</option>
                                                      </select>
                                                    </td>		<td className="blue" colSpan={4}>
                                                      <label>
                                                        <input type="date"  size={10} name="dl2" id="dl2" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }} />
                                                        <input type="hidden" name="dl" id="dl" defaultValue />			<div id="div1" style={{position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white'}} />
                                                        <a href="#" name="calA" id="calA" onclick="cal1x.select(document.forms['form1'].dl,'calA','yyyy-MM-dd'); return false;"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                              choose</font></font></a>
                                                      </label>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue" colSpan={3}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For more information:</font></font></td>
                                                    <td className="blue" colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>More work-related files:</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue" colSpan={3}>
                                                      <textarea name="lisatiedot" cols={60} rows={8} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }}/>	</td>
                                                    <td className="blue" colSpan={2}>
                                                      <input type="file" id="firstfile" name="ufile[]" />
                                                      <input type="hidden" defaultValue={1} name="upload" />
                                                      <br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Files (max 10):
                                                        </font></font><table id="files_list" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prices agreed with the customer:</font></font></td>
                                                    <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The agreed price for the work</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue"><textarea name="sovitut_hinnat" readOnly cols={40} rows={5} id="sovitut_hinnat" value={this.state.priceAgreed} /></td>
                                                    <td colSpan={2} className="blue">
                                                      <input name="hinta" type="text" size={8} value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} /><br />
                                                     </td>
                                                  </tr>  <tr>
                                                    <td colSpan={5} className="blue">
                                                      <div align="center">
                                                        <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" id="button" value="save" onClick={this.onSave} /></font></font></label>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody></table>
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

export default kayntikortti;