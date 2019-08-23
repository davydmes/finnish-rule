import React, { Component } from 'react';
import './cd_dvd.css';
import { Link } from 'react-router-dom'
import { fetchApi } from '../../../../../services/api'

class cd_dvd extends Component {
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
        "disc": "",
        "printing": false,
        "plateNumber": "",
        "housing": "",
        "enclosures": "",
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





  componentDidMount(){
    console.log("dasdsada",this.state);
  }

  onSave = () => {
    let header = {
      authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    }
    console.log(this.state)
    let payload = {
      "component":"CD/DVD",
      "orderId": this.state.orderId,
      "job": this.state.job,
      "disc": this.state.disc,
      "printing": this.state.printing,
      "plateNumber": this.state.plateNumber,
      "housing": this.state.housing,
      "enclosures": this.state.enclosures,
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


      <div id="div_innercontent" className="padding-30">
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
            {this.state.hide?null:(
            <tr className="tyootsikot"><td width="25%" height={39} style={{ cursor: 'pointer' }} bgcolor="#525252" onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=1&job_id=60'">

              <Link to="/billing/openthe/customer">
                <div align="center">

                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>customer Information</font>
                  </font>
                </div>
              </Link>
            </td>
              <td width="25%" bgcolor="#FF7D00" style={{ cursor: 'pointer', color: '#000000' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=2&job_id=60'">
                <Link to="/billing/openthe/addjob" >
                  <div align="center">
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>Add job / edit job details</font>
                    </font>
                  </div>
                </Link>
              </td>
              <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=3&job_id=60'">

                <Link to="/billing/openthe/jobs">
                  <div align="center">
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>Jobs</font>
                    </font>
                  </div>
                </Link>
              </td>


              <td width="25%" bgcolor="#525252" style={{ cursor: 'pointer' }} onclick="if (needToConfirmExit()) { if (!confirmExit()) { return; } } document.location.href='index.php?page=task_not_billed&step=4&job_id=60'">
                <Link to="/billing/openthe/openbilling">
                  <div align="center">
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>billing</font>
                    </font>
                  </div>
                </Link>
              </td>

            </tr>
            )}
            <tr bgcolor="#FFFFFF">
              <td colSpan={4}>
                <table width="100%" border={0} className="workk" id="TABLE_2">
                  <tbody><tr>
                    <td><div align="center"><div className="job_container">
                      <table width={990} border={0} align="center" id="TABLE_3">
                        <tbody><tr>
                          <td colSpan={6} className="blue"><h3 align="center"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Adding a CD / DVD Job</font></font></h3>
                            <input type="hidden" name="customer_id" defaultValue={735} /></td>
                        </tr>
                          <tr>
                            <td width={150} className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The name of the CD / DVD job</font></font></td>
                            <td className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>CD / DVD</font></font></td>
                            <td className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Disc surface printing</font></font></td>
                            <td className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>plate Number</font></font></td>
                            <td className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Housing</font></font></td>
                            <td className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Number of enclosures</font></font></td>
                          </tr>
                          <tr>
                            <td className="blue"><input name="name" type="text" value={this.state.job} onChange={(e) => { this.changeValue("job", e.target.value) }}/></td>
                            <td width={99} className="blue">
                              <select name="cd_dvd" id="cd_dvd" value={this.state.disc} onChange={(e) => { this.changeValue("disc", e.target.value) }}>
                                <option value="CD">CD</option>
                                <option value="DVD">DVD</option>
                              </select>
                            </td>
                            <td width={135} className="blue"><input type="checkbox" name="pinnantulostus" checked={this.state.printing} onChange={(e) => { this.changeValue("printing", e.target.checked) }}/></td>
                            <td width={165} className="blue"><input type="text" name="levymaara" value={this.state.plateNumber} onChange={(e) => { this.changeValue("plateNumber", e.target.value) }} /></td>
                            <td width={168} className="blue">
                              <select name="kotelo" id="kotelo" value={this.state.housing} onChange={(e) => { this.changeValue("housing", e.target.value) }}>
                                <option>No case</option>
                                <option>Ordinary 1 CD</option>
                                <option>Standard 2 CDs</option>
                                <option>Thin 1 CD</option>
                                <option>Prevex 3-6 pcs</option>
                                <option>Prevex 6-8 pcs</option>
                                <option>DVD 1 pc</option>
                                <option>DVD 2 pcs</option>
                                <option>DVD 3 pcs</option>
                                <option>DVD 5 pcs</option>
                                <option>plastic Pocket</option>
                              </select>
                            </td>

                            <td width={147} className="blue"><input type="text" name="kpl" value={this.state.enclosures}/></td>
                          </tr>
                          <tr>
                            <td className="blue">
                              <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Delivery</font>
                                </font>
                                </td>

                            <td colSpan={2} className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Work promised complete </font></font></td>
                            <td colSpan={3} rowSpan={4} className="blue">
                              <input type="file" id="firstfile" name="ufile[]" />
                              <input type="hidden" defaultValue={1} name="upload" />
                              <br />
                              <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>    Files (max 10): </font></font><table id="files_list" />
                            </td>
                          </tr>
                          <tr>
                            <td className="blue" value={this.state.delivery} onChange={(e) => { this.changeValue("delivery", e.target.value) }}>
                              <select name="toimitus">
                                <option>pickup</option>
                                <option>delivery</option>
                                <option>mailing</option>
                                <option>e-mail</option>
                              </select>
                            </td>
                            <td colSpan={2} className="blue"><input type="date" size={10} name="dl2" id="dl2" value={this.state.date} onChange={(e) => { this.changeValue("date", e.target.value) }} />
                              <input type="hidden" name="dl" id="dl" defaultValue /><label>
                                <div id="div1" style={{ position: 'absolute', visibility: 'hidden', backgroundColor: 'white', layerBackgroundColor: 'white' }} />
                                <a href="#" name="calA" id="calA" onclick="cal1x.select(document.forms['form1'].dl,'calA','yyyy-MM-dd'); return false;"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}> choose</font></font></a></label></td>
                          </tr>
                          <tr>
                            <td colSpan={3} className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Additional Information</font></font></td>
                          </tr>
                          <tr>
                            <td colSpan={3} className="blue">
                              <textarea name="specs" cols={55} rows={10} id="specs" value={this.state.additionalInfo} onChange={(e) => { this.changeValue("additionalInfo", e.target.value) }}/>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Prices agreed with the customer:</font></font></td>
                            <td colSpan={3} className="blue"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The agreed price for the work</font></font></td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="blue"><textarea name="sovitut_hinnat" readOnly cols={40} rows={5} id="sovitut_hinnat" value={this.state.priceAgreed} onChange={(e) => { this.changeValue("pricesAgreed", e.target.value) }}/></td>
                            <td colSpan={3} className="blue">
                              <input name="hinta" type="text" size={5} value={this.state.agreedPrice} onChange={(e) => { this.changeValue("agreedPrice", e.target.value) }} /><br/>
                            </td>
                          </tr><tr>
                            <td colSpan={7} className="blue">
                              <div align="center">
                                <input type="hidden" name="radio" defaultValue="cd_dvd.php" />
                                <label><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" name="button" id="button" value="save" onClick={this.onSave} /></font></font></label>
                              </div></td>
                          </tr>
                        </tbody></table>
                      <input type="hidden" name="job_id" defaultValue={60} />
                      <input type="hidden" name="tyoid" defaultValue={0} />
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

export default cd_dvd;