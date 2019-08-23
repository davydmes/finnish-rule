import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../../services/api'

class kirja extends Component {
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
        "bookSize":"",
        "sizeCut": "",
        "pageNumbers":"",
        "impression": "",
        "output":"",
        "paperColor": "",
        "date": "",
        "paperPrint":"",
        "output1":"",
        "paperColor1": "",
        "paperPrint1":"",
        "additionalInfo":"",
        "agreedPrice":"",
        "delivery":"",
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
      "component":"Addingabook",
      "job": this.state.job,
      "bookSize":this.state.bookSize,
      "sizeCut": this.state.sizeCut,
      "pageNumbers":this.state.pageNumbers,
      "impression": this.state.impression,
      "output":this.state.output,
      "paperColor": this.state.paperColor,
      "date": this.state.date,
      "paperPrint":this.state.paperPrint,
      "output1":this.state.output1,
      "paperColor1": this.state.paperColor1,
      "paperPrint1":this.state.paperPrint1,
      "additionalInfo":this.state.additionalInfo,
      "agreedPrice":this.state.agreedPrice,
      "delivery":this.state.delivery,
      
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
                        
                        
                        {this.state.hide?null:(   <tr className="tyootsikot"><td width="25%" height={39} style={{cursor: 'pointer'}} bgcolor="#525252" onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=1&job_id=60'">

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
                                                    <td colSpan={5} className="blue"><h3 align="center"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adding a book</font></font></h3></td>
                                                  </tr>
                                                  <tr>
                                                    <td width={200} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></td>
                                                    <td width={120} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>book size</font></font></td>
                                                    <td width={120} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>the size to be cut</font></font></td>
                                                    <td width={120} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>number of pages</font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>impression</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue">
                                                      <input type="text" name="name" value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }} size={40} />
                                                    </td>
                                                    <td className="blue">
                                                      <input type="text" name="koko" value={this.state.bookSize} onChange={(e) => { this.changeValue("bookSize", e.target.value) }} size={5} />
                                                    </td>
                                                    <td className="blue">
                                                      <input type="text" name="leikkauskoko" value={this.state.sizeCut} onChange={(e) => { this.changeValue("sizeCut", e.target.value) }} size={15} />
                                                    </td>
                                                    <td className="blue">
                                                      <input type="text" name="sivumaara" value={this.state.pageNumbers} onChange={(e) => { this.changeValue("pageNumbers", e.target.value) }} size={5} />
                                                    </td>
                                                    <td className="blue">
                                                      <input type="text" name="maara" value={this.state.impression} onChange={(e) => { this.changeValue("impression", e.target.value) }} size={5} />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue">
                                                    </td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          output
                                                        </font></font></td>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          paper color
                                                        </font></font></td>
                                                    <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          the paper to be printed on
                                                        </font></font></td>
                                                  </tr>
                                                  <tr height={50}>
                                                    <td className="blue" style={{textAlign: 'center'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          Cover
                                                        </font></font></td>
                                                    <td className="blue">
                                                      <select name="tulostus[]" value={this.state.output} onChange={(e) => { this.changeValue("output", e.target.value) }}>
                                                        <option>1/0</option>
                                                        <option>1/1</option>
                                                        <option>4/0</option>
                                                        <option>4/1</option>
                                                        <option>4/4</option>
                                                      </select>
                                                    </td>
                                                    <td className="blue">
                                                      <select name="papercolor[]" value={this.state.paperColor} onChange={(e) => { this.changeValue("paperColor", e.target.value) }}>
                                                        <option value={0}>white</option>
                                                        <option value={1}>colored</option>
                                                      </select>
                                                    </td>
                                                    <td colSpan={2} className="blue">
                                                      <select name="paper_id[]" value={this.state.paperPrint} onChange={(e) => { this.changeValue("paperPrint", e.target.value) }}>			
                                                      <option>0 g</option>
                                                        <option>0 g</option>
                                                        <option>2 8 9 g</option>
                                                        <option>rulertyu</option>
                                                      </select>
                                                    </td>
                                                  </tr>
                                                  <tr height={50}>
                                                    <td className="blue" style={{textAlign: 'center'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          inner Pages
                                                        </font></font></td>
                                                    <td className="blue">
                                                      <select name="tulostus[]" value={this.state.output1} onChange={(e) => { this.changeValue("output1", e.target.value) }}>
                                                        <option>1/0</option>
                                                        <option>1/1</option>
                                                        <option>4/0</option>
                                                        <option>4/1</option>
                                                        <option>4/4</option>
                                                      </select>
                                                    </td>
                                                    <td className="blue">
                                                      <select name="papercolor[]" value={this.state.paperColor1} onChange={(e) => { this.changeValue("paperColor1", e.target.value) }}>
                                                        <option value={0}>white</option>
                                                        <option value={1}>colored</option>
                                                      </select>
                                                    </td>
                                                    <td colSpan={2} className="blue">
                                                      <select name="paper_id[]" value={this.state.paperPrint1} onChange={(e) => { this.changeValue("paperPrint1", e.target.value) }}>			
                                                      <option>0 g</option>
                                                        <option>0 g</option>
                                                        <option>2 8 9 g</option>
                                                        <option>rulertyu</option>
                                                      </select>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery</font></font></td>
                                                    <td colSpan={4} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work promised complete</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="blue">
                                                      <select name="toimitus" id="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                        <option>pickup</option>
                                                        <option>delivery</option>
                                                        <option>mailing</option>
                                                        <option>e-mail</option>
                                                      </select>
                                                    </td>
                                                    <td colSpan={4} className="blue">
                                                      <input type="date"  size={10} name="deadline2" id="dl2" value={this.state.date} onChange={(e) => { this.changeValue("date", e.target.value) }} />
                                                      <input type="hidden" name="deadline" id="dl" defaultValue />
                                                      <div id="div1" style={{position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white'}} />
                                                      <a href="#" name="calA" id="calA" onclick="cal1x.select(document.forms['form1'].dl,'calA','yyyy-MM-dd'); return false;"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                            choose</font></font></a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For more information:</font></font></td>
                                                    <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>More work-related files:</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue">
                                                      <textarea name="lisatiedot" cols={70} rows={8} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }} />
                                                    </td>
                                                    <td colSpan={2} className="blue"><input type="file" id="firstfile" name="ufile[]" />
                                                      <input type="hidden" defaultValue={1} name="upload" />
                                                      <br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                                          Files (max 10): </font></font><table id="files_list" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prices agreed with the customer:</font></font></td>
                                                    <td colSpan={2} className="blue"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The agreed price for the work</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={3} className="blue"><input type="hidden" name="customer_id" defaultValue={735} />
                                                      <input type="hidden" name="job_id" defaultValue={60} />
                                                      <input type="hidden" name="tyoid" defaultValue={0} />
                                                      <input type="hidden" name="id" defaultValue={0} /><textarea name="sovitut_hinnat" readOnly cols={40} rows={5} id="sovitut_hinnat" value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} />	</td>
                                                    <td colSpan={2} className="blue">
                                                      <input name="hinta" type="text" size={5} value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} id="hinta1" /><br />
                                                      <input type="checkbox" defaultValue={1} name="hintasovittu" onclick="document.getElementById(&quot;hinta1&quot;).disabled=!document.getElementById(&quot;hinta1&quot;).disabled" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> A price has already been agreed for the work
                                                        </font></font></td>
                                                  </tr><tr>
                                                    <td colSpan={5} className="blue">
                                                      <div align="center"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" id="button" value="save" onClick={this.onSave}/></font></font></div>
                                                    </td>
                                                  </tr>
                                                </tbody></table><input type="hidden" name="job_id" id="hiddenField" defaultValue={60} /></div></div></td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table></div>
                    </div>
                  
        );
    }
}

export default kirja;