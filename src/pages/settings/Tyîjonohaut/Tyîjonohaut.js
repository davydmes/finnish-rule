import React, { Component } from 'react';
import './työjonohaut.css'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api'

import Table from '../../../components/table';
var globalObj = {}

class Työjonohaut extends Component {
  constructor(props) {
    super(props)
    this.onLoad();
    this.state = {
      head: ["Queue Id","The Name of the Queue", "Friendly-id", "The employee-id", "Customer-id", "Priority", "Status", "Deadline", "Work Added", "The content of work", "Offer", "Columns", "Edit"],
      body: [{
        "name": "",
        "friendlyId": "",
        "employeeId": "",
        "customerId": "",
        "priority": "",
        "status": "",
        "deadline": "",
        "workAdded": "",
        "contentOfWork": "",
        "offer": "",
        "columns": "",
        "heading12": <Link to="/settings/Työjonohaut/queuemodify">Edit</Link>
      }

      ],
      "check": [],
      "data": [],
      


    }
    console.log(this.state);


  }





  checkMark = (value) => {
    if (this.state.check.includes(value)) {
      var index = this.state.check.indexOf(value);
      this.state.check.splice(index, 1)


    }
    else
      this.state.check.push(value);

    this.changeValue("columns", this.state.check);
    console.log(this.state.check);
  }

  changeValue = (key, value) => {
    globalObj[key] = value
    console.log(globalObj);
  }



  onLoad = () => {
    let data2=[]
    let header = {
      authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    }
    let tablePrint = [];
    fetchApi("/queue/loadQueue", "POST", {}, header)
      .then(response => {
        console.log(response);
        if (response.data.success == true) {
          console.log("set stata hua");
          tablePrint = response.data.data;
          // this.state.data2 = []
          tablePrint.map((x => {
            console.log(x)
            let data = {} 
            Object.keys(x).forEach((y) => {
              console.log(y)
              if (y =="__v") {

              }
              else data[y] = x[y]
              console.log("helluu", data)


            })

            data['edit'] = <Link to={{ pathname: '/settings/Työjonohaut/queuemodify', query: x }}>Edit</Link>;

            data2.push(data)
            console.log(data2)
          }))


          console.log("-----> test ------>",data2);
          tablePrint = tablePrint.map((x) => {
            x['edit'] = <Link to={{ pathname: '/settings/Työjonohaut/queuemodify', query: x }}>Edit</Link>
            return x;
          });
          this.setState({
            data: data2
          })

        }


      })




  }



  onSubmit = () => {

    let header = {
      authorization: "token " + JSON.parse(localStorage.getItem("userData")).sessionId
    }

    let statePayload = globalObj

    // let payload = {
    //     "name": this.state.name,
    //     "friendlyId" : this.state.friendlyId,
    //     "employeeId" : this.state.employeeId,
    //     "customerId" : this.state.customerId,
    //     "priority" : this.state.priority,
    //     "status": this.state.status,
    //     "deadline" : this.state.deadline,
    //     "workAdded": this.state.workAdded,
    //     "contentOfWork" : this.state.contentOfWork,
    //     "offer" : this.state.offer,
    //     "columns" : this.state.columns,
    //     heading12: <Link to = "/settings/Työjonohaut/queuemodify">Edit</Link>


    // }
    console.log(Object.keys(statePayload))
    if (Object.keys(statePayload).length == 11) {
      fetchApi("/queue/createQueue", "POST", statePayload, header)
        .then(response => {
          console.log(response);

          this.onLoad();


        })
      console.log("set state ke baad", this.state);


    }
    else alert("Please fill all fields")
  }
  render() {
    return (

      <div className="padding-30">



        <div id="menu_level2">
          <ul className="buttons_navigate_lvl_2">
            <li>
              <Link to="/settings/company"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Company</font></font></span></Link>
            </li>
            <li>
              <Link to="/settings/users"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Users</font></font></span></Link>
            </li>
            <li className="selected_item" >
              <Link to="/settings/työjonohaut"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Työjonohaut</font></font></span></Link>
            </li>
            <li>
              <Link to="/settings/pricelist"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Price list</font></font></span></Link>
            </li>
            <li>
              <Link to="/settings/settings1"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Settings</font></font></span></Link>
            </li>
          </ul>
        </div>


        <Table head={this.state.head} body={this.state.data} heading="Editing Work Queues" />


        <h3>Add a new queue</h3>


        <div>
          <table className="datatable" cellPadding={0} id="TABLE_2">
            <tbody><tr>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The name of the queue</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Friendly-id</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The employee-id</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Customer id</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Priority</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Status</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>deadline</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Work added</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>The content of the work</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Offer</font></font></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>columns</font></font></td>
            </tr>
              <tr>

                <td><input type="text" name="name" value={this.state.name} onChange={(e) => { this.changeValue("name", e.target.value) }} />

                </td>

                <td><input type="text" name="friendly_id" size={13} value={this.state.friendlyId} onChange={(e) => { this.changeValue("friendlyId", e.target.value) }} /></td>
                <td><input type="text" name="worker_id" size={5} value={this.state.employeeId} onChange={(e) => { this.changeValue("employeeId", e.target.value) }} /></td>
                <td><input type="text" name="customer_id" size={5} value={this.state.customerId} onChange={(e) => { this.changeValue("customerId", e.target.value) }} /></td>
                <td>
                  <select name="priority" onChange={(e) => this.changeValue("priority", e.target.value)}>
                    <option />
                    <option onClick={() => this.changeValue("priority", "High")} value={"High"}>High</option>
                    <option onClick={() => this.changeValue("priority", "Normal")} value={"Normal"}>Normal</option>
                    <option onClick={() => this.changeValue("priority", "Low")} value={"Low"}>Low</option>
                  </select>
                </td>
                <td>
                  <select name="status" onChange={(e) => this.changeValue("status", e.target.value)}>
                    <option />
                    <option onClick={() => this.changeValue("status", "Ready")} value={"Ready"}>Ready</option>
                    <option onClick={() => this.changeValue("status", "Not Ready")} value={"Not Ready"}>Not ready</option>
                    <option onClick={() => this.changeValue("status", "Not Started")} value={"Not Started"}>Not started</option>
                  </select>
                </td>
                <td><input type="text" name="deadline" size={7} value={this.state.deadline} onChange={(e) => this.changeValue("deadline", e.target.value)} /></td>
                <td><input type="text" name="work_added" size={7} value={this.state.workAdded} onChange={(e) => { this.changeValue("workAdded", e.target.value) }} /></td>
                <td>
                  <select name="work_contents[]" multiple size={8} onClick={(e) => this.changeValue("contentOfWork", e.target.value)}>
                    <option onClick={() => this.changeValue("contentOfWork", "CD / DVD")} value={"CD / DVD"}>CD / DVD</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Business Card")} value={"Business card"}>Business card</option>

                    <option onClick={() => this.changeValue("contentOfWork", "The print job")} value={"The print job"}>The print job</option>

                    <option onClick={() => this.changeValue("contentOfWork", "Suurtuloste")} value={"Suurtuloste"}>Suurtuloste</option>


                    <option onClick={() => this.changeValue("contentOfWork", "Magazine")} value={"Magazine"}>Magazine</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Book")} value={"Book"}>Book</option>
                    <option onClick={() => this.changeValue("contentOfWork", "File finishing")} value={"File finishing"}>File finishing</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Design")} value={"Design"}>Design</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Invitation to tender")} value={"Invitation to tender"}>Invitation to tender</option>
                    <option onClick={() => this.changeValue("contentOfWork", "mailing Services")} value={"mailing Services"}>mailing Services</option>
                    <option onClick={() => this.changeValue("contentOfWork", "subcontracting")} value={"subcontracting"}>subcontracting</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Sale of goods")} value={"Sale of goods"}>Sale of goods</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Picture gallery")} value={"Picture gallery"}>Picture gallery</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Educational services")} value={"Educational services"}>Educational services</option>
                    <option onClick={() => this.changeValue("contentOfWork", "Tasks")} value={"Tasks"}>Tasks</option>
                  </select>
                </td>
                <td>
                  <select name="quote_status" onClick={(e) => this.changeValue("offer", e.target.value)}>
                    <option onClick={() => this.changeValue("offer", "Normal order")} value={"Normal order"}>Normal order</option>
                    <option onClick={() => this.changeValue("offer", "Offer requested")} value={"Offer requested"}>Offer requested</option>
                    <option onClick={() => this.changeValue("offer", "Offer given")} value={"Offer given"}>Offer given</option>
                  </select>
                </td>
                <td>
                  <input type="checkbox" name="column_asiakas" value={"Customer"} onClick={() => this.checkMark("Customer")} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Customer</font>
                  </font>
                  <br />
                  <input type="checkbox" name="column_nimi" value={"Name of the work"} onClick={() => this.checkMark("Name of the work")} />
                  <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Name of the work</font>
                  </font>
                  <br />
                  <input type="checkbox" name="column_lisatty" value={"work added"} onClick={() => this.checkMark("work added")} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Work added</font>
                  </font>
                  <br />

                  <input type="checkbox" name="column_deadline" value={"deadline"} onClick={() => this.checkMark("deadline")} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>deadline</font>
                  </font>
                  <br />

                  <input type="checkbox" name="column_sisalto" value={"The content of the work"} onClick={() => this.checkMark("The content of the work")} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>The content of the work</font>
                  </font>
                  <br />

                  <input type="checkbox" name="column_tehty" value={"work done"} onClick={() => { { this.checkMark("work done") } }} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Work done</font>
                  </font>
                  <br />

                  <input type="checkbox" name="column_tyontekija" value={"Employee"} onClick={() => this.checkMark("Employee")} />
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Employee</font>
                  </font>
                  <br />
                </td><td>
                </td></tr>
              <tr>
                <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" name="submit" onClick={this.onSubmit} /></font></font></td>
              </tr>
            </tbody></table>
        </div>




      </div>

    );
  }
}

export default Työjonohaut;