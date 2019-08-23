import React, { Component } from 'react';
import './productSearch.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api'
import Table from '../../../components/table';

class productSearch extends Component {

  constructor(props) {
    super(props)
    this.state={
      productId:"",
      name:"",
      group:"",
      results:[],
      headings:["Tunnus","Nimi","Lisätiedot","Hyllypaikka","Myyntihinta","Hankintahinta","alv","Määrä","Vapaana", "Tuoteryhmä"]
    }
  }

  loadProducts=(e,key)=>{
    this.setState({results:[]});
    
    var x={
      productId:this.state.productId,
      name:this.state.name,
      group:this.state.group
    }

    this.setState(x);

    x[key]=e.target.value;
    
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId};
    var payload = {
      type:"rule",
      group:x.group,
      filters:{
        productId:x.productId,
        name:x.name,
      }
      
    }
    fetchApi("/products/loadProducts", "POST", payload, header)
    .then(response => {
      if(response.data && response.data.data && response.data.data.length>0){
        
        var results = response.data.data;
        var body=[];
        results.map((product)=>{
          var newProduct = {};
          newProduct.logo = product.productId;
          newProduct.name = product.name;
          newProduct.addInfo = product.additionalInformation;
          newProduct.sl = product.shelfLocation;
          newProduct.sellingPrice = product.sellingPrice;
          newProduct.purchasePrice = product.purchasePrice;
          newProduct.vat = product.vat;
          newProduct.atLiberty = "";
          newProduct.group = product.group.name;
          newProduct.editLink = <Link to={{pathname:"/editingproduct", query:product}}>Muokkaa</Link>
          
          body.push(newProduct);
        })

        this.setState({
          results:body,
        },()=>{
          console.log(this.state.results)
        })
      }
      
    }, err => {
      console.log(err);
      alert("tapahtui virhe!");
    })

  }


    render() {
        return (

          <div className= "padding-30">
       
            
              
                    <div id="div_innercontent">
                      {/* Submenu. */}
                      <div id="menu_level2">
                    <ul className="buttons_navigate_lvl_2">
                        <li>
                            <Link to = "/storage/warehousemanagement"><span><font style={{ verticalAlign: 'inherit' }}>WarehouseManagement<font style={{ verticalAlign: 'inherit' }}></font></font></span></Link>
                        </li>
                        <li className="selected_item">
                            <Link to = "/storage/productsearch"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Product Search</font></font></span></Link>
                        </li>
                    </ul>
                </div>
                      {/* Notification */}
                      {/* Content. */}
                      <div id="div_content">
                        <div className="page_header"><h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tuotehaku</font></font></h2></div>
                        <table id="TABLE_1">
                          <tbody><tr>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tuotetunnus:</font></font></td>
                              <td><input type="text" id="product_id" className="search_input" value={this.state.productId} onChange={(e)=>{this.loadProducts(e,"productId")}}/></td>
                            </tr>
                            <tr>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tuotteen nimi:</font></font></td>
                              <td><input type="text" id="product_name" className="search_input" value={this.state.name} onChange={(e)=>{this.loadProducts(e,"name")}}/></td>
                            </tr>
                            <tr>
                              <td><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Tuoteryhmä:</font></font></td>
                              <td><input type="text" id="product_class" className="search_input" value={this.state.group} onChange={(e)=>{this.loadProducts(e,"group")}}/></td>
                            </tr>
                          </tbody></table>
                        <div id="result">
                        {(this.state.productId || this.state.name || this.state.group)?<div>  
                          <Table head={this.state.headings} body={this.state.results} heading= "Stocks by product group" hideDiv={true}/>
                        </div>:null
                        }
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  
        );
    }
}

export default productSearch;