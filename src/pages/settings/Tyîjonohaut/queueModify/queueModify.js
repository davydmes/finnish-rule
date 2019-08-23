import React, { Component } from 'react';
import './queueModify.css'
import {fetchApi} from '../../../../services/api'

 class queueModify extends Component {
  constructor(props){
    super(props);
    
    this.state={
     "queueId":"",
    "name": "",
    "friendlyId" : "",
    "employeeId" : "",
    "customerId" : "",
    "priority" : "",
    "status": "",
    "deadline" : "",
    "workAdded": "",
    "contentOfWork" : "",
    "offer" : "",
    "columns" : ""
    }}
    

     
    
    
  
  componentDidMount(){
    if(this.props.location && this.props.location.query){
      console.log(this.props.location.query);
      var quObj = this.props.location.query;
      console.log(this.state,quObj)
      this.setState({
    "queueId":quObj._id,
    "name": quObj.name,
    "friendlyId" : quObj.friendlyId,
    "employeeId" : quObj.employeeId,
    "customerId" : quObj.customerId,
    "priority" : quObj.priority,
    "status": quObj.status,
    "deadline" : quObj.deadline,
    "workAdded": quObj.workAdded,
    "contentOfWork" : quObj.contentOfWork,
    "offer" : quObj.offer,
    "columns" : quObj.columns,
    "check":quObj.columns
      }
      
      )
      
      
    }
   
  }




onEdit=()=>{
  console.log("hehe")

  let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

  fetchApi("/queue/editQueue", "POST", this.state , header )
  .then(response => {
  console.log(response);
  this.props.history.push("/settings/työjonohaut")
  

})
}

onDelete=(index)=>{
  console.log("hehe")

  let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
  let payload = {
    "queueId": this.state.queueId
  }

  fetchApi("/queue/deleteQueue", "POST", payload , header )
  .then(response => {
  console.log(response);
    if(response.data.message== "success"){
      this.props.history.push("/settings/työjonohaut")
    }

})

}


    render() {
        return (
            
              
                    <div id="div_content" className="table-scroll" className= "padding-30">
                  
                        <table className="basic jono1">
                          <thead>
                            <tr><td><font style={{verticalAlign: 'inherit'}}>
                            <font style={{verticalAlign: 'inherit'}}>The name of the queue</font>
                            </font>
                            </td>

                              <td>
                              <font style={{verticalAlign: 'inherit'}}>
                              <font style={{verticalAlign: 'inherit'}}>Friendly-id</font>
                              </font>
                              </td>

                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The employee-id</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customer id</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Priority</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Status</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>deadline</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work added</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The content of the work</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Offer</font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>columns</font></font></td>
                            </tr></thead>
                          
                          <tbody><tr><td><input type="text" name="name" value={this.state.name} onChange={(e)=>{this.setState({"name":e.target.value})}} /></td>
                              <td><input type="text" name="friendly_id" value={this.state.friendlyId} onChange={(e)=>{this.setState({"friendlyId":e.target.value})}} /></td>
                              <td><input type="text" name="worker_id" value={this.state.employeeId} onChange={(e)=>{this.setState({"employeeId":e.target.value})}} size={10} /></td>
                              <td><input type="text" name="customer_id" value={this.state.customerId} onChange={(e)=>{this.setState({"customerId":e.target.value})}} size={10} /></td>
                              <td><input type="hidden" name="id" defaultValue={1} />
                                <select name="priority" value={this.state.priority} onChange={(e)=>{this.setState({"priority":e.target.value})}}>
                                  <option />
                                  <option value={this.state.priority} >High</option>
                                  <option value={this.state.priority}>Normal</option>
                                  <option value={this.state.priority}>Low</option>
                                </select>
                              </td>
                              <td>			
                                <select name="status" onChange={(e)=>{this.setState({"status": e.target.value})}}>
                                  <option />
                                  <option value="done">Ready</option>
                                  <option value="not_done" selected>Not ready</option>
                                  <option value="not_started">Not started</option>
                                </select>
                              </td>
                              <td><input type="text" name="deadline" value= {this.state.deadline} onChange={(e)=>{this.setState({"deadline":e.target.value})}}/></td>
                              <td><input type="text" name="work_added" value={this.state.workAdded} onChange={(e)=>{this.setState({"workAdded":e.target.value})}}/></td>
                              <td>
                                <select name="work_contents[]" multiple size={10} value={this.state.contentOfWork} onChange={(e)=>{this.setState({"contentOfWork":e.target.value})}} >
                                  <option value={this.state.contentOfWork}>CD / DVD</option><option value={this.state.contentOfWork}>Business card</option><option value={this.state.contentOfWork}>The print job</option><option value={this.state.contentOfWork}>Suurtuloste</option><option value={this.state.contentOfWork}>Magazine</option><option value={this.state.contentOfWork}>Book</option><option value={this.state.contentOfWork}>File finishing</option><option value={this.state.contentOfWork}>Design</option><option value={this.state.contentOfWork}>Invitation to tender</option><option value={this.state.contentOfWork}>mailing Services</option><option value={this.state.contentOfWork}>subcontracting</option><option value={this.state.contentOfWork}>Sale of goods</option><option value={this.state.contentOfWork}>Picture gallery</option><option value={this.state.contentOfWork}>Educational services</option><option value={this.state.contentOfWork}>Tasks</option>
                                </select>
                              </td>
                              <td>
                                <select name="quote_status" value= {this.state.offer} onChange={(e)=>{this.setState({"offer":e.target.value})}}>
                                  <option value={this.state.status}>Normal order</option>
                                  <option value={this.state.status}>Offer requested</option>
                                  <option value={this.state.status}>Offer given</option>
                                </select>
                              </td>
                              <td>
                                <input type="checkbox" name="column_asiakas" checked={this.state.columns.includes("Customer")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customer</font></font><br />
                                <input type="checkbox" name="column_nimi" checked={this.state.columns.includes("Name of the work")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Name of the work</font></font><br />
                                <input type="checkbox" name="column_lisatty" checked={this.state.columns.includes("work added")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work added</font></font><br />
                                <input type="checkbox" name="column_deadline" checked={this.state.columns.includes("deadline")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>deadline</font></font><br />
                                <input type="checkbox" name="column_sisalto" checked={this.state.columns.includes("The content of the work")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>The content of the work</font></font><br />
                                <input type="checkbox" name="column_tehty" checked={this.state.columns.includes("work done")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Work done</font></font><br />
                                <input type="checkbox" name="column_tyontekija" checked={this.state.columns.includes("Employee")} /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Employee</font></font><br />
                              </td></tr></tbody></table>
                        <table align="center" style={{border: '0px solid black', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
                          <tbody><tr>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="button" value="save" onClick={this.onEdit} name="edit" /></font></font></td>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" value="Bracket" onClick="if(confirm('Kaikki tallentamattomat muutokset menetetään!\nJatka?'))window.close();return false;" /></font></font></td>
                            </tr>
                            <tr>
                              <td colSpan={2} style={{padding: '10px', textAlign: 'center'}}>
                                <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><input type="submit" name="remove" value="delete" onClick={this.onDelete} /></font></font>
                              </td>
                            </tr>
                          </tbody></table>
                        {/*<tfoot><tr>
                          <td colspan='5' style='text-align: center;'>
                              <input type='submit' value='Tallenna' name='edit' />
                          </td>
                          <td colspan='5' style='text-align: center;'>
                              <input type='checkbox' name='remove_checkbox' />
                              <input type='submit' value='Poista' name='remove' />				
                          </td>
                      </tr></tfoot> */}
                      
                    </div>
                  
        );
    }
}
export default queueModify;
