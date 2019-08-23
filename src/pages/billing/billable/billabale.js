import React, { Component } from 'react';

import Table from '../../../components/table';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api';

class Billable extends Component {
    constructor(props){
        super(props)



        this.onLoad();
        this.state = {
            head: ["Customer", "Name of work", "Work Added", "Deadline","The Content of work","Work Done","Employee", "Open the details"],
            body: [{
              "name": "",
              "subscriber": "",
              "workAdded":"",
              "deadline":"",
              "theContentOfWork":"",
              "workDone":"",
              "employee":"",

              
            }
            
          ]
          }
        }


        onLoad=()=>{
          let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
          let responseData = [];
          fetchApi("/bills/loadBills", "POST", {} , header )
          .then(response => {
          console.log("first response" ,response.data.data);
          if(response.data.data){
            responseData =  response.data.data.map((obj)=>{
              var name = "";
              if(obj.client && obj.client.basic && obj.client.basic.length>0){
                name=obj.client.basic[0].name;
              }
              return({
              "name": <Link to = "/clients/customerinfo">{name}</Link>,
              "subscriber": obj.subscriber,
              "workAdded": new Date(obj.dateOfInvoice).toLocaleDateString() + " " + new Date(obj.dateOfInvoice).toLocaleTimeString(),
              "deadline": obj.dueDate,
              "contentOfWork": "",
              "workDone": "1/1",
              "employee": "",
              "openThe": <Link to={{ pathname: '/billing/openthe/jobs', query: obj, track:true }}>Open The</Link>
              
              })
            });
          }
            console.log("---->  ",responseData);
            this.setState({
              "body" : responseData
            })
        
        })
        }
    
    render() {
        return (
            
              <div className= "padding-30">
            

      <div id="menu_level2">
        <ul className="buttons_navigate_lvl_2">
          <li className="selected_item">
          <Link to ="/billing/billable"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Billable</font></font></span></Link>
          </li>
          <li >
            <Link to ="/billing/newbill"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>New bill</font></font></span></Link>
          </li>
        </ul>
      </div>
   

                      <Table head={this.state.head} body={this.state.body} heading ="Billable"/>

                     
                    </div>

                  );
    }
}

export default Billable;