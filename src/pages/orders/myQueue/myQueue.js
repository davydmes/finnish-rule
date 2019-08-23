import React, { Component } from 'react';
// import '../../orders/myQueue/myQueue.css';
import Table from '../../../components/table';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import {fetchApi} from '../../../services/api'
class myQueue extends Component {
    constructor(props){
        super(props)
        this.onLoad();

        
        this.state = {
            head: ["Customer", "Name of work", "Work Added", "Deadline","The Content of work","Work Done", "Open the details"],
            body: [{
              
            }]
          
          }
        }

        onLoad=()=>{
          let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
          fetchApi("/jobs/loadJobs", "POST", {} , header )
          .then(response => {
          console.log("myQueue" ,response.data.data);
          
        
        }
          
          )}
       
    
    render() {
        return (
            
              <div className= "padding-30">
             
                    
             <div id="menu_level2">
                      <ul className="buttons_navigate_lvl_2">
                        <li >
                          <Link to = "/orders/orderqueue"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Order queue</font></font></span></Link>
                        </li>
                        <li  className="selected_item">
                        <Link to = "/orders/myqueue"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>My Queue</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/billing/openthe/customer"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Add a new order</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/active"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Active</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/requestedoffers"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Requested Offers</font></font></span></Link>
                        </li>
                        <li>
                        <Link to = "/orders/offersgiven"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Offers Given</font></font></span></Link>
                        </li>
                      </ul>
                    </div>

                      {/* <Table head={this.state.head} body={this.state.body} heading = "Omajono"/> */}
                      <div style={{backgroundColor: "white"}} style = {{height: "100px"}} >
                      <p>Database connection failed, please try again or contact support: support@neemia.fi</p>
                      </div>
                    </div>

                  );
    }
}

export default myQueue;