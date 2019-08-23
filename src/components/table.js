import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Table extends Component {

  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    
    

  }
    
  render() {
    return (
      
      
            <div id="div_content">
              <div>
              {this.props.hideDiv?null:(<div className="page_header"><h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{this.props.heading}</font></font></h2></div>)}
                
                <table className="basic jono1 sort01 table-stripeclass:alternate table-autosort:2" id="TABLE_1">
                  <thead>
                    <tr>
                    
                    {this.props.head ? this.props.head.map(obj=>{
                      return(
                        <th className="table-sortable:ignorecase table-sortable" title="Click to sort"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{obj}</font></font></th>
                      )
                    }):null}
                    
                    </tr>
                  </thead>
                  <tbody>	
                  
                  {this.props.body  ? this.props.body.map(obj=>{
                    return(<tr className=" hovered2">
                    {Object.keys(obj).map(key=>{
                      console.log(key)
                      return(
                      <td>{
                      typeof(obj[key]==="string") ?
                      <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{obj[key]}</font></font>
                      : 
                      obj[key].map(data =>{
                          return (
                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{data +""}</font><br/></font>
                          )
                      })}
                      </td>)
                    
                  })}
                  {

                  }

                  
                    </tr>)
                    
                  
                  }):null}

                  </tbody>
                  {this.props.foot ? (
                    <tfoot>
    <tr>
      <td colSpan= "2">1</td>
      <td colSpan="2">Mark</td>
      <td colSpan="3">Otto</td>
      <td colSpan="3">@mdo</td>
      <td colSpan="3">Hiii</td>
    </tr>
  
  </tfoot>
                  ): null}

                  {this.props.heading == "Users"? (
                    <tr> 
                      <td colSpan="5" style ={{textAlign: "center"}}><Link to = "/addnewuser"><font style = {{textAlign: 'center'}}>Add new users - </font></Link>
                      <Link to ="/usergroups">User Groups</Link>
                      </td>
                      
                      </tr>
                  ):null} 

                  {this.props.heading == "User Groups"? (
                    <tr> 
                      <td colSpan="5" style ={{textAlign: "center"}}><Link to = "/addusergroup"><font style = {{textAlign: 'center'}}>Add a new group - </font></Link>
                      <Link to ="/settings/users">User</Link>
                      </td>
                      
                      </tr>
                  ):null} 

                  
                  

                </table></div></div>
          
    );
  }
}

export default Table;