import React, { Component } from 'react';
import './tulostustyo.css'
import {Link} from 'react-router-dom'
import {fetchApi} from '../../../../../services/api'

class tulostustyo extends Component {
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
        "workSize":"",
        "numberOfPages":"",
        "impression":"",
        "cuttingSize":"",
        "output": "",
        "paperColor":"",
        "creasing":"",
        "sewing":"",
        "makeUp":"",
        "perforation1":"",
        "perforation2":"",
        "seperation":"",
        "cutting":"",
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
      "component":"Increaseprintjobs",
      "orderId": this.state.orderId,
      "job": this.state.job,
      "paper": this.state.paper,
      "workSize":this.state.workSize,
      "numberOfPages":this.state.numberOfPages,
      "impression":this.state.impression,
      "cuttingSize":this.state.cuttingSize,
      "output": this.state.output,
      "paperColor":this.state.paperColor,
      "creasing":this.state.creasing,
      "sewing":this.state.sewing,
      "makeUp":this.state.makeUp,
      "perforation1":this.state.perforation1,
      "perforation2":this.state.perforation2,
      "seperation":this.state.seperation,
      "cutting":this.state.cutting,
      "sheetNumber": this.state.sheetNumber,
      "delivery": this.state.delivery,
      "date": this.state.date,
      "additionalInfo": this.state.additionalInfo,
      "priceAgreed": this.state.priceAgreed,
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
                                            
                                              <table className="step2_table" border={0} id="TABLE_3">
                                                <tbody><tr className="step2_separate_row">
                                                    <td colSpan={7}>
                                                      <div align="center"><h3><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Increase print jobs</font></font></h3></div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font></td>
                                                  </tr>
                                                  <tr className="step2_separate_row">
                                                    <td colSpan={2}>
                                                      <input name="workname" type="text" size={35} value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }} />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Paper for printing</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work size</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of pages</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Impression</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Output</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Number of sheets</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>cutting size</font></font></td>
                                                  </tr>
                                                  <tr className="step2_separate_row">
                                                    <td>
                                                      <select name="paper_id" id="paper_id" value={this.state.paper} onChange={(e) => { this.changeValue("paper", e.target.value) }}>
                                                      <option> </option>
                                                      <option>2 8 9g</option>
                                                        <option>rulertyu</option>
                                                     
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="koko" id="final_papersize" value={this.state.workSize} onChange={(e) => { this.changeValue("workSize", e.target.value) }}>
                                                        <option>A3</option>
                                                        <option>A4</option>
                                                        <option>A5</option>
                                                        <option>A6</option>
                                                        <option>Other</option> {/* Sana 'Muu' on jo tietokannassa id:llä 531 */}
                                                        <option>Envelope</option>
                                                        <option>CD</option>
                                                        <option>DVD</option>
                                                        <option>Prevex</option>
                                                      </select><span className="alert" style={{visibility: 'hidden'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>*</font></font></span>
                                                    </td>
                                                    <td>
                                                      <input name="sivumaara" type="text" id="sivumaara" size={5} value={this.state.numberOfPages} onChange={(e) => { this.changeValue("numberOfPages", e.target.value) }} />
                                                    </td>
                                                    <td>
                                                      <input name="kpl" type="text" size={5} id="copies_amount" value={this.state.impression} onChange={(e) => { this.changeValue("impression", e.target.value) }} />
                                                    </td>
                                                    <td>
                                                      <select name="tulostus" id="tulostus" value={this.state.output} onChange={(e) => { this.changeValue("output", e.target.value) }}>
                                                        <option value="1/0">1/0</option>
                                                        <option value="1/1">1/1</option>
                                                        <option value="4/0">4/0</option>
                                                        <option value="4/1">4/1</option>
                                                        <option value="4/4">4/4</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <input name="arkit" type="text" size={5} value={this.state.sheetNumber} onChange={(e) => { this.changeValue("sheetNumber", e.target.value) }} />
                                                    </td>
                                                    <td>
                                                      <input type="text" name="leikkauskoko" value={this.state.cuttingSize} onChange={(e) => { this.changeValue("cuttingSize", e.target.value) }} size={12} />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Paper color</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>creasing</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sewing</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Makeup</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>perforation</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>perforation</font></font></td>
                                                  </tr>
                                                  <tr className="step2_separate_row">
                                                    <td>
                                                      <select name="paperivari" value={this.state.paperColor} onChange={(e) => { this.changeValue("paperColor", e.target.value) }}>
                                                        <option value={1}>White</option>
                                                        <option value={2}>Colored</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="nuuttaus" value={this.state.creasing} onChange={(e) => { this.changeValue("creasing", e.target.value) }}>
                                                        <option value={0}>No</option>
                                                        <option value={1}>1 line</option>
                                                        <option value={2}>2 lines</option>
                                                        <option value={3}>3 lines</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="nidonta" value={this.state.sewing} onChange={(e) => { this.changeValue("sewing", e.target.value) }}>
                                                        <option value={0}>No</option>
                                                        <option value={1}>1 staple</option>
                                                        <option value={2}>2 staples</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="taitto" value={this.state.makeUp} onChange={(e) => { this.changeValue("makeUp", e.target.value) }}>
                                                        <option value={0}>No</option>
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="perferointi" value={this.state.perforation1} onChange={(e) => { this.changeValue("perforation1", e.target.value) }}>
                                                        <option value={0}>No</option>
                                                        <option value={1}>1 line</option>
                                                        <option value={2}>2 lines</option>
                                                        <option value={3}>3 lines</option>
                                                      </select>
                                                    </td>
                                                    <td>
                                                      <select name="reiitys" value={this.state.perforation2} onChange={(e) => { this.changeValue("perforation2", e.target.value) }}>
                                                        <option value={0}>No</option>
                                                        <option value={2}>2 holes</option>
                                                        <option value={4}>4 holes</option>
                                                      </select>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cutting</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Separation</font></font></td>
                                                  </tr>
                                                  <tr className="step2_separate_row">
                                                    <td>
                                                      <input name="leikkaus" type="checkbox" checked={this.state.cutting} onChange={(e) => { this.changeValue("cutting", e.target.checked) }} />
                                                    </td>
                                                    <td>
                                                      <input name="lajittelu" type="checkbox" checked={this.state.seperation}  onChange={(e) => { this.changeValue("seperation", e.target.value) }} />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add work-related files (max. 10 files):</font></font></td>
                                                  </tr>
                                                  <tr className="step2_separate_row">
                                                    <td colSpan={2}>
                                                      <input type="file" id="firstfile" name="ufile[]" /><input type="hidden" defaultValue={1} name="upload" />
                                                      <table id="files_list" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={4}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>For more information:</font></font></td>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Delivery</font></font></td>
                                                    <td colSpan={2}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work promised complete</font></font></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan={4}><textarea name="lisatiedot" style={{width: '100%'}} cols={40} rows={8} value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }}/></td>
                                                    <td>
                                                      <select name="toimitus" id="toimitus" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                                                        <option>pickup</option>
                                                        <option>delivery</option>
                                                        <option>mailing</option>
                                                        <option>e-mail</option>
                                                      </select>
                                                    </td>
                                                    <td colSpan={2}>
                                                      <input type="date"  size={10} name="dl2" id="dl2" value={this.state.date}  onChange={(e) => { this.changeValue("date", e.target.value) }} />
                                                      <input type="hidden" name="dl" id="dl" defaultValue />
                                                      <div id="div1" style={{position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white'}} />
                                                      <a href="#" name="calA" id="calA" onclick="cal1x.select(document.forms['form1'].dl,'calA','yyyy-MM-dd'); return false;"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> choose</font></font></a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                  </tr></tbody></table><table className="step_2_additional_info" id="TABLE_4">
                                                <tbody><tr className="step2_separate_row">
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Prices agreed with the customer: </font></font></td>
                                                    <td><textarea name="sovitut_hinnat" cols={40} readOnly rows={5} id="sovitut_hinnat" defaultValue={"foo"} /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Agreed price: </font></font></td>
                                                    <td>
                                                      <input name="hinta" type="text" size={5} id="hinta1" value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> € /
                                                        </font></font></td>
                                                  </tr>
                                                </tbody></table><table className="step2_table" id="TABLE_5"><tbody><tr>
                                                    <td colSpan={9}>
                                                      <div align="center">
                                                        <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="button" id="button" value="save" onClick={this.onSave}/></font></font></label>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody></table></div></div></td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table></div>
                    </div>
                  
        );
    }
}

export default tulostustyo;