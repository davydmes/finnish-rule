import React, { Component } from 'react';

import Table from '../../../components/table';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api'

class Active extends Component {
  constructor(props) {
    super(props)
    setTimeout(() => { this.onLoad(); }, 3000);

    this.state = {
      head: ["Customer", "Name of work", "Work Added", "Deadline", "The Content of work", "Work Done", "Open the details"],
      body: [],
      jobs: [],
      workDone: ""
    }
  }



  onLoad = () => {
    let abc = []
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    fetchApi("/bills/loadBills", "POST", {}, header)
      .then(response => {
        console.log("orderResponse", response.data);
        if (response.data.success) {
          var responseData1 = response.data.data
          let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
          fetchApi("/jobs/loadJobs", "POST", {}, header)
            .then(response => {
              var jobs = response.data.data;
              responseData1.map((value) => {
                var obj = {}
                
                if (value && value.client && value.client.basic[0] && value.client.basic[0].name) {
                  obj.client = value.client.basic[0].name
                  
                }
                else {
                  obj.client = ""
                }
                obj.nameOfWork = "";
                obj.workAdded = "";
                obj.deadline = "";
                obj.contentOfWork = [];
                obj.workDone = "0/1";
                obj.openThe = <Link to="">Open The</Link>
    
                if(jobs.length>0){
                  jobs.map((job) => {
                    console.log(job.orderId._id, value._id)
                    if(job.orderId._id === value._id){
                      obj.contentOfWork.push(job.component);
                      
                    }
                  })
                  obj.workDone = "0/"+obj.contentOfWork.length;
    
                }
    
                

                abc.push(obj);
    
              }
              
    
    
              )
              this.setState({
                body: abc
              })




            }
            )

          

        }




      })
  }



  render() {
    return (

      <div className="padding-30">


        <div id="menu_level2">
          <ul className="buttons_navigate_lvl_2">
            <li >
              <Link to="/orders/orderqueue"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Order queue</font></font></span></Link>
            </li>
            <li>
              <Link to="/orders/myqueue"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>My Queue</font></font></span></Link>
            </li>
            <li>
              <Link to="/billing/openthe/customer"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Add a new order</font></font></span></Link>
            </li>
            <li className="selected_item">
              <Link to="/orders/active"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Active</font></font></span></Link>
            </li>
            <li>
              <Link to="/orders/requestedoffers"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Requested Offers</font></font></span></Link>
            </li>
            <li>
              <Link to="/orders/offersgiven"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Offers Given</font></font></span></Link>
            </li>
          </ul>
        </div>

        <Table head={this.state.head} body={this.state.body} heading="Active" />

      </div>

    );
  }
}

export default Active;