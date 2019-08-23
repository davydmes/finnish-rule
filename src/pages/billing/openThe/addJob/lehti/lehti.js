import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../../services/api'

class lehti extends Component {
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
        "magzineSize":"",
        "sizeCut": "",
        "pageNumbers":"",
        "magzineNumbers": "",
        "sortBy":"",
        "delivery": "",
        "date": "",
        "additionalInfo":"",
        "agreedPrice":"",
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
      "component":"magzinesupplement",
      "orderId": this.state.orderId,
      "job": this.state.job,
      "magzineSize":this.state.magzineSize,
      "sizeCut": this.state.sizeCut,
      "pageNumbers":this.state.pageNumbers,
      "magzineNumbers": this.state.magzineNumbers,
      "sortBy":this.state.sortBy,
      "delivery": this.state.delivery,
      "date": this.state.date,
      "additionalInfo":this.state.additionalInfo,
      "agreedPrice":this.state.agreedPrice,
      
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
                      {this.state.hide?null:( <div id="menu_level2">
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
                        
                        
                        
                        {this.state.hide?null:(  <tr className="tyootsikot"><td width="25%" height={39} style={{cursor: 'pointer'}} bgcolor="#525252" onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=1&job_id=60'">

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
                                      <td><div align="center"><div className="job_container"><table width={990} border={1} align="center" id="TABLE_3">
                                                <tbody><tr>
                                                    <td colSpan={8} className="blue"><h3 align="center"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Magazine supplement</font></font></h3></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></td>
                                                    <td colSpan={7} className="blue"><input type="text" name="name" value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }} size={40} /></td>
                                                  </tr>
                                                  <tr>
                                                    <td width={120} className="blue">&nbsp;</td>
                                                    <td width={150} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>magazine size</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>the size to be cut</font></font></td>
                                                    <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>number of pages</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of magazines</font></font></td>
                                                    <td width={97} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sort by</font></font></td>
                                                    <td width={105} className="blue">
                                                      <div align="center">
                                                        <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="erittele" id="erittele" defaultValue="Sort by" onclick="form1.action='index.php?page=task_not_billed&step=2&tyo=1&id=0&job_id=60'; return true;" /></font></font>
                                                        </label>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Magazine information</font></font></td>
                                                    <td className="blue">	
                                                    <select name="lehden_koko" id="lehden_koko" value={this.state.magzineSize} onChange={(e) => { this.changeValue("magzineSize", e.target.value) }}>
                                                        <option value="A5">A5</option>
                                                        <option value="A4">A4</option>
                                                        <option value="B5">B5</option>
                                                      </select>
                                                    </td>
                                                    <td className="blue"><input type="text" name="leikkauskoko" value={this.state.sizeCut} onChange={(e) => { this.changeValue("sizeCut", e.target.value) }} size={15} /></td>
                                                    <td colSpan={2} className="blue">
                                                      <select name="sivumaara" id="sivumaara" value={this.state.pageNumbers} onChange={(e) => { this.changeValue("pageNumbers", e.target.value) }}>
                                                        <option value={4}>4</option><option value={8}>8</option><option value={12}>12</option><option value={16}>16</option><option value={20}>20</option><option value={24}>24</option><option value={28}>28</option><option value={32}>32</option><option value={36}>36</option><option value={40}>40</option><option value={44}>44</option><option value={48}>48</option><option value={52}>52</option></select></td>
                                                    <td className="blue">
                                                      <input name="maara1" type="text" id="kpl" value={this.state.magzineNumbers} onChange={(e) => { this.changeValue("magzineNumbers", e.target.value) }} size={10} /></td>
                                                    <td colSpan={2} className="blue">
                                                      <input type="radio" name="erittely" id="radio" value={this.state.sortBy} onChange={(e) => { this.changeValue("sortBy", e.target.value) }} /><label htmlFor="radio"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>cover and inside pages</font></font></label><br />
                                                      <input type="radio" name="erittely" id="radio2" value={this.state.sortBy} onChange={(e) => { this.changeValue("sortBy", e.target.value) }} /><label htmlFor="radio2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>all pages</font></font></label><br />
                                                      <input type="radio" name="erittely" id="radio3" value={this.state.sortBy} onChange={(e) => { this.changeValue("sortBy", e.target.value) }} /><label htmlFor="radio3"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>all the same </font></font></label>
                                                      <input type="hidden" name="customer_id" defaultValue={735} />
                                                      <input type="hidden" name="job_id" defaultValue={60} />
                                                      <input type="hidden" name="tyoid" defaultValue={0} />
                                                      <input type="hidden" name="id" defaultValue={0} />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue">&nbsp;</td>
                                                    <td className="blue">
                                                      <label htmlFor="sivumaara" />
                                                      <label htmlFor="lehden_koko"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>sheet</font></font></label>
                                                    </td>
                                                    <td width={126} className="blue">
                                                      <label htmlFor="textfield" />
                                                      <label htmlFor="label"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>page numbers</font></font></label>
                                                      <label htmlFor="label2" />
                                                      <label htmlFor="textfield2" />
                                                    </td>
                                                    <td colSpan={3} className="blue"><label htmlFor="radio2"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>output</font></font></label></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>paper color</font></font></td>
                                                    <td width={251} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>the paper to be printed on</font></font></td>
                                                  </tr><tr>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery</font></font></td>
                                                    <td className="blue">
                                                      <select name="toimitus" id="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                        <option>pickup</option>
                                                        <option>delivery</option>
                                                        <option>mailing</option>
                                                        <option>e-mail</option>
                                                      </select>
                                                    </td>		<td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work promised complete </font></font></td>
                                                    <td colSpan={7} className="blue">
                                                      <label>
                                                        <input type="date" size={10} name="dl2" id="dl2" value={this.state.date} onChange={(e) => { this.changeValue("date", e.target.value) }} />
                                                        <input type="hidden" name="dl" id="dl" defaultValue />			<div id="div1" style={{position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white'}} />
                                                        <a href="#" name="calA" id="calA" onclick="cal1x.select(document.forms['form1'].dl,'calA','yyyy-MM-dd'); return false;"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                              choose</font></font></a>
                                                      </label>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue" colSpan={6}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For more information:</font></font></td>
                                                    <td className="blue" colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>More work-related files:</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={6} className="blue"><textarea name="lisatiedot" cols={70} rows={8} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }}/></td>		<td colSpan={2} className="blue"><input type="file" id="firstfile" name="ufile[]" />
                                                      <input type="hidden" defaultValue={1} name="upload" />
                                                      <br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          Files (max 10): </font></font><table id="files_list" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={4} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prices agreed with the customer:</font></font></td>
                                                    <td colSpan={4} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The agreed price for the work</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={4} className="blue"><textarea name="sovitut_hinnat" readOnly cols={40} rows={5} id="sovitut_hinnat" value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} /></td>
                                                    <td colSpan={4} className="blue">
                                                      <input name="hinta" type="text" size={5} defaultValue id="hinta1" /><br />
                                                      <input type="checkbox" defaultValue={1} name="hintasovittu" onclick="document.getElementById(&quot;hinta1&quot;).disabled=!document.getElementById(&quot;hinta1&quot;).disabled" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> A price has already been agreed for the work
                                                        </font></font></td>
                                                  </tr>    <tr>
                                                    <td colSpan={8} className="blue">
                                                      <div align="center">
                                                        <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" id="button" value="save" onClick={this.onSave} /></font></font>
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

export default lehti;