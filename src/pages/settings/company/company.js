import React, { Component } from 'react';
import '../company/company.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import {Link} from 'react-router-dom';

class company extends Component {
    render() {
        return (

          <div className= "padding-30">
        
           
              
                    <div id="div_innercontent">
                      {/* Submenu. */}
                      <div id="menu_level2">
                        <ul className="buttons_navigate_lvl_2">
                          <li className="selected_item">
                          <Link to= "/settings/company"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Company</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/users"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Users</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/työjonohaut"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Työjonohaut</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/pricelist"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price list</font></font></span></Link>
                          </li>
                          <li>
                          <Link to= "/settings/settings1"><span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Settings</font></font></span></Link>
                          </li>
                        </ul>
                      </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                            Changing company information is only allowed with admin IDs</font></font></div>
                    </div>
                    
                    </div>
                  
        );
    }
}

export default company;