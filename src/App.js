import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Recording from '../src/pages/timeCard/recording/recording';
import Hour from '../src/pages/timeCard/hourCard/hour';
import HourlyReports from './pages/timeCard/hourlyReport/hourlyReports';
import CustomerInfo from '../src/pages/clients/info/customerInfo';
import AddNewCustomer from '../src/pages/clients/register/addNewCustomer';
import './App.css';
import OrderQueue from './pages/orders/orderQueue/orderQueue';
import MyQueue from './pages/orders/myQueue/myQueue'
import Active from '../src/pages/orders/active/active';
import ReqeustedOffers from './pages/orders/requestedOffers/requestedOffers'
import OffersGiven from './pages/orders/offersGiven/offersGiven'
import AddOrder from './pages/orders/addOrder/addOrder'
import Billable from './pages/billing/billable/billabale'
import NewBill from './pages/billing/newBill/newBill'
import WarehouseManagement from './pages/storage/warehouseManagement/warehouseManagement'
import ProductSearch from '../src/pages/storage/productSearch/productSearch';
import SalesStatistics from '../src/pages/Reports/salesStatistics/salesStatistics';
import SalesPrinting from '../src/pages/Reports/salesPrinting/salesPrinting'
import Company from './pages/settings/company/company'
import Users from './pages/settings/users/users';
import PriceList from './pages/settings/priceList/priceList'
import Settings from './pages/settings/settings1/settings'
import Header from '../src/components/header/header'
import Footer from '../src/components/footer/footer'
import Työjonohaut from './pages/settings/Työjonohaut/Työjonohaut';
import Ledgers from './pages/Reports/Ledgers/Ledgers';
import CustomizeProduct from './pages/storage/warehouseManagement/customizeProduct/customizeProduct';
import AddProductRuleKit from './pages/storage/warehouseManagement/AddProductRuleKit/addProductRuleKit';
import SongEdit from './pages/storage/warehouseManagement/songedit/songEdit';
import Customer from './pages/billing/openThe/customer/customer';
import AddJob from './pages/billing/openThe/addJob/addjob';
import Jobs from './pages/billing/openThe/Jobs/jobs';
import OpenBilling from './pages/billing/openThe/openbilling/openbilling';
import Cd_Dvd from './pages/billing/openThe/addJob/cd-dvd/cd_dvd';
import Kayntikortti from './pages/billing/openThe/addJob/kayntikortti/kayntikortti';
import Tulostustyo from './pages/billing/openThe/addJob/tulostustyo/tulostustyo';
import Suurtuloste from './pages/billing/openThe/addJob/suurtuloste/suurtuloste';
import Lehti from './pages/billing/openThe/addJob/lehti/lehti';
import Kirja from './pages/billing/openThe/addJob/kirja/kirja';
import Viimeistely from './pages/billing/openThe/addJob/viimeistely/viimeistely';
import Suunnittelu from './pages/billing/openThe/addJob/suunnittelu/suunnittelu';
import Tarjouspyynto from './pages/billing/openThe/addJob/tarjouspyynto/tarjouspyynto';
import Postituspalvelut from './pages/billing/openThe/addJob/postituspalvelut/postituspalvelut';
import Alihankinta from './pages/billing/openThe/addJob/alihankinta/alihankinta';
import Tavaran from './pages/billing/openThe/addJob/tavaran/tavaran';
import Kuvapankki from './pages/billing/openThe/addJob/kuvapankki/kuvapankki';
import Koulutuspalvelut from './pages/billing/openThe/addJob/koulutuspalvelut/koulutuspalvelut';
import Tehtavat from './pages/billing/openThe/addJob/tehtavat/tehtavat';
import MarkDeliveries from './pages/billing/openThe/addJob/markdeliveries/markdeliveries';
import Usercustom from './pages/settings/users/usercustom/usercustom';
import QueueModify from './pages/settings/Ty\u00F6jonohaut/queueModify/queueModify';
import Login from './pages/login/login';
import Logout from './pages/logout/logout';
import AddNewUser from './pages/settings/users/addNewUser/addNewUser';
import { link } from 'fs';
import { fetchApi } from './services/api';
import EditCustomer from './pages/clients/info/editCustomer/editCustomer';
import AddProductGroup from './pages/storage/warehouseManagement/AddProductGroup/addProductGroup';
import Usergroups from './pages/settings/users/usergroups/usergroups'
import EditingUser from './pages/settings/users/editinguser/editinguser';
import AddUserGroup from './pages/settings/users/addUserGroup/addUserGroup';
import UserEdit from './pages/settings/users/userEdit/userEdit';



import EditingProduct from './pages/storage/warehouseManagement/editingProduct/editingProduct';

export default class App extends Component {
    constructor(props) {
      super(props);
      // localStorage.setItem("loginCheck", "false");
    //   if(localStorage.getItem("loginCheck") == "false") {
    //     let Headers = {"Authorization" : "Token "+ "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJoeHZLRXpOUWdScG1pTmVGMEwxbHJZYXhnbnptd3oyMyIsImlhdCI6MTU2NDU2NzAxNSwiZXhwIjoxNTY0NjUzNDE1fQ.6AqdZxWFwsSwLDn5Z6aGDxUtGZTkg_wODyYx7hqIIKs"}
    //   fetchApi("/webindex", "GET" , {} , Headers)
    //   .then(response=> {
    //     console.log(response);
    //     if(response.data.userData && response.data.userData.userId) {
    //       localStorage.setItem("userData", JSON.stringify(response.data.userData));
    //       localStorage.setItem("loginCheck", "true");
    //       window.location.href = "/";
    //     }
    //     else {
    //       localStorage.setItem("loginCheck", "true");
    //       window.location.href = "/login";
    //     }
    // })
    //   }
      
  }
    
render(){
 
  return (
    <div id="data123">
  
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/timecard/record" component={Recording} />
      <Route exact path="/timecard/hourspecification" component={Hour} />
      <Route exact path="/timecard/hourlyreport" component={HourlyReports} />
      <Route exact path="/clients/customerinfo" component={CustomerInfo} />
      <Route exact path="/clients/addcustomer" component={AddNewCustomer} />
      <Route exact path="/orders/orderqueue" component={OrderQueue} />
      <Route exact path="/orders/myqueue" component={MyQueue} />
      <Route exact path="/orders/addorder" component={AddOrder} />
      <Route exact path="/orders/active" component={Active} />
      <Route exact path="/orders/requestedoffers" component={ReqeustedOffers} />
      <Route exact path="/orders/offersgiven" component={OffersGiven} />
      <Route exact path="/billing/newbill" component={NewBill} />
      <Route exact path="/billing/billable" component={Billable} />
      <Route exact path="/storage/warehousemanagement" component={WarehouseManagement} />
      <Route exact path="/storage/productsearch" component={ProductSearch} />
      <Route exact path="/reports/sales-statistics" component={SalesStatistics} />
      <Route exact path="/reports/sales-printing" component={SalesPrinting} />
      <Route exact path="/settings/company" component={Company} />
      <Route exact path="/settings/pricelist" component={PriceList} />
      <Route exact path="/settings/settings1" component={Settings} />
      <Route exact path="/settings/työjonohaut" component={Työjonohaut} />
      <Route exact path="/settings/users" component={Users} />
      <Route exact path="/reports/ledgers" component={Ledgers} />
      <Route exact path="/warehousemanagement/customizeproduct/customizeproduct" component={CustomizeProduct} />
      <Route exact path="/warehousemanagement/addproductrulekit/addproductrulekit" component={AddProductRuleKit} />
      <Route exact path="/warehousemanagement/songedit/songEdit" component={SongEdit} />
      <Route exact path="/billing/openthe/customer" component={Customer} />
      <Route exact path="/billing/openthe/addjob" component={AddJob} />
      <Route exact path="/billing/openthe/jobs" component={Jobs} />
      <Route exact path="/billing/openthe/openbilling" component={OpenBilling} />
      <Route exact path="/billing/openthe/addjob/cd_dvd" component={Cd_Dvd} />
      <Route exact path="/billing/openthe/addjob/kayntikortti" component={Kayntikortti} />
      <Route exact path="/billing/openthe/addjob/tulostustyo" component={Tulostustyo} />
      <Route exact path="/billing/openthe/addjob/suurtuloste" component={Suurtuloste} />
      <Route exact path="/billing/openthe/addjob/lehti" component={Lehti} />
      <Route exact path="/billing/openthe/addjob/kirja" component={Kirja} />
      <Route exact path="/billing/openthe/addjob/viimeistely" component={Viimeistely} />
      <Route exact path="/billing/openthe/addjob/suunnittelu" component={Suunnittelu} />
      <Route exact path="/billing/openthe/addjob/tarjouspyynto" component={Tarjouspyynto} />
      <Route exact path="/billing/openthe/addjob/postituspalvelut" component={Postituspalvelut} />
      <Route exact path="/billing/openthe/addjob/alihankinta" component={Alihankinta} />
      <Route exact path="/billing/openthe/addjob/tavaran" component={Tavaran} />
      <Route exact path="/billing/openthe/addjob/kuvapankki" component={Kuvapankki} />
      <Route exact path="/billing/openthe/addjob/koulutuspalvelut" component={Koulutuspalvelut} />
      <Route exact path="/billing/openthe/addjob/tehtavat" component={Tehtavat} />
      <Route exact path="/billing/openthe/addjob/markdeliveries" component={MarkDeliveries} />
      <Route exact path="/settings/users/usercustom" component={Usercustom} />
      <Route exact path="/settings/Työjonohaut/queuemodify" component={QueueModify} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/addnewuser" component={AddNewUser} />
      <Route exact path="/editcustomer" component={EditCustomer} />
      <Route exact path="/addproductgroup" component={AddProductGroup} />
      <Route exact path="/usergroups" component={Usergroups} />
      <Route exact path="/editinguser" component={EditingUser} />
      <Route exact path="/addusergroup" component={AddUserGroup} />
      <Route exact path="/useredit" component={UserEdit} />
   
      
      <Route exact path="/editingproduct" component={EditingProduct} />






     
    
      
      


      



 




<Footer/>

    </Router>
    
  </div>
  );}
}


