import React, { Component } from 'react';
import './warehouseManagement.css'
import Table from '../../../components/table';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom'
import {fetchApi } from '../../../services/api'
class warehouseManagement extends Component {
    constructor(props) {
        super(props)


        this.onLoad();

        this.state = {
            head: [],
            tableArray:[],
            body:[]
            
           
        }

    }




    onLoad=()=>{
        let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}

        fetchApi("/groups/loadGroups", "POST", {}, header)
        .then(response => {
        console.log("====>",response)
        let arr = response.data.data;
        this.setState({
            tableArray:arr
        })
        if(arr){
            var allHeadings = [];
            var allBody = [];
            arr.map((value)=>{
                
                
                var obj = value.columns;
                var headings = [];
                if(obj && typeof obj){
                    Object.keys(obj).forEach((key)=>{
                       
                        if(obj[key]){
                            switch(key){

                                case 'additionalInformation':headings[1]="Lisätiedot";break;
                                case 'name':headings[0]="Nimi";break;
                                case 'productCode':headings[12]="Tuotekoodi";break;
                                case 'inStore':headings[2]="Varastossa";break;
                                case 'busy':headings[3]="Varattu";break;
                                case 'unit':headings[4]="Yksikkö";break;
                                case 'sellingPrice':headings[5]="Myyntihinta";break;
                                case 'vat':headings[6]="ALV";break;
                                case 'purchasePrice':headings[7]="Hankintahinta";break;
                                case 'shelfLocation':headings[8]="Hyllypaikka";break;
                                case 'picture':headings[9]="Kuva";break;
                                case 'size':headings[10]="Koko";break;
                                case 'thickness':headings[11]="Paksuus";break;
                                

                            }
                            
                        }
                        
                    })

                    // var filtered = headings.filter(function (el) {
                    //     return el != null;
                    // });
                    
                }

                var otherThanNull = headings.some(function (el) {
                    return (el !== null && el!=="");
                });

                if(otherThanNull){
                    headings[13]="Tiedot";
                }
                if(value && value.storageUnits && otherThanNull){
                    headings[14]="Kappaleet";
                }
                
                allHeadings.push(headings);
                allBody.push([]);
            
            })
            this.setState({
                head:allHeadings,
                body:allBody
            },()=>{

                this.fillTables();
            })

        }

        })
    }


    fillTables=()=>{
        let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId};

        fetchApi("/products/loadProducts", "POST", {}, header)
        .then(response => {
            var allProducts = response.data.data;
            var allBodies = [];
            if(allProducts && allProducts.length>0){

                var allBodies = this.state.body;
                allProducts.map((product)=>{
                    if(product.group && product.group._id){
                        var groupId = product.group._id;
                        var index = this.state.tableArray.findIndex(x=>x._id === groupId);
                        var newProduct = {};
                        var x = 0;
                        if(product.name && product.group && product.group.columns && product.group.columns.name){
                            newProduct.name = product.name;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.name) newProduct.name = "";

                        if(product.additionalInformation && product.group && product.group.columns && product.group.columns.additionalInformation){
                            newProduct.additionalInformation = product.additionalInformation;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.additionalInformation) newProduct.additionalInformation = "";

                        if(product.inStore && product.group && product.group.columns && product.group.columns.inStore){
                            newProduct.inStore = product.inStore;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.inStore) newProduct.inStore = "";

                        if(product.busy && product.group && product.group.columns && product.group.columns.busy){
                            newProduct.busy = product.busy;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.busy) newProduct.busy = "";

                        if(product.unit && product.group && product.group.columns && product.group.columns.unit){
                            newProduct.unit = product.unit;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.unit) newProduct.unit = "";
                        
                        if(product.sellingPrice && product.group && product.group.columns && product.group.columns.sellingPrice){
                            newProduct.sellingPrice = product.sellingPrice;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.sellingPrice) newProduct.sellingPrice = "";

                        if(product.vat && product.group && product.group.columns && product.group.columns.vat){
                            newProduct.vat = product.vat;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.vat) newProduct.vat = "";

                        if(product.purchasePrice && product.group && product.group.columns && product.group.columns.purchasePrice){
                            newProduct.purchasePrice = product.purchasePrice;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.purchasePrice) newProduct.purchasePrice = "";

                        if(product.shelfLocation && product.group && product.group.columns && product.group.columns.shelfLocation){
                            newProduct.shelfLocation = product.shelfLocation;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.shelfLocation) newProduct.shelfLocation = "";

                        if(product.picture && product.group && product.group.columns && product.group.columns.picture){
                            newProduct.picture = product.picture;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.picture) newProduct.picture = "";

                        if(product.size && product.group && product.group.columns && product.group.columns.size){
                            newProduct.size = product.size;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.size) newProduct.size = "";

                        if(product.thickness && product.group && product.group.columns && product.group.columns.thickness){
                            newProduct.thickness = product.thickness;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.thickness) newProduct.thickness = "";
                        
                        if(product.productCode && product.group && product.group.columns && product.group.columns.productCode){
                            newProduct.productCode = product.productCode;
                            x+=1;
                        }
                        else if(product.group && product.group.columns && product.group.columns.productCode) newProduct.productCode = "";

                        newProduct.editLink = <Link to={{pathname:"/editingproduct", query:product}}>Muokkaa</Link>
                        newProduct.editSong = <Link to={{pathname:"/warehousemanagement/songedit/songEdit", query:product}}>Näytä</Link>


                        // delete product.group;
                        if(x>0)allBodies[index].push(newProduct);
                    }   
                })
                console.log(allBodies);

                this.setState({
                    body:allBodies
                },()=>{
                    console.log(this.state.body)
                });
            }
            console.log(response);
        })
        // this.state.tableArray.map((group,index)=>{
        //     if(this.state.head[index].length>0){
                
        //     }
        // )}
        
    }

    render() {
        return (

            <div className= "padding-30">
            


                <div id="menu_level2">
                    <ul className="buttons_navigate_lvl_2">
                        <li className="selected_item">
                            <Link to = "/storage/warehousemanagement"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>WarehouseManagement</font></font></span></Link>
                        </li>
                        <li>
                            <Link to = "/storage/productsearch"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Product Search</font></font></span></Link>
                        </li>
                    </ul>
                </div>
                
               

                <div className="page_header"><h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Stocks by product group</font></font></h2></div>



                 <div className="readyPackages-wrapper">
                {this.state.head.name}
                </div>
                
            
            {this.state.head.map((headingsArr,index)=>{
                // console.log(headingsArr)
                if(headingsArr.length>0){
                    return(
                        <React.Fragment>
                        <p>{this.state.tableArray[index].name} - <Link to={{ pathname: '/warehousemanagement/customizeproduct/customizeproduct', query: this.state.tableArray[index] }}>muokkaa tuoteryhmää</Link>
                        </p>
                        <Table head={headingsArr} body={this.state.body[index]} heading= "Stocks by product group" hideDiv={true}/>
                        <div className="add-product-rule-kit">
                        <Link to={{ pathname: "/warehousemanagement/addproductrulekit/addproductrulekit", query: this.state.tableArray[index] }}>Add a new product to {this.state.tableArray[index].name}</Link>

                     
                        </div>
                        </React.Fragment>
                    )
                }
                
            })}
                      <hr/>
                      <br/>
                      
            

                      <div className= "addproducthr">
                      <Link to ="/addproductgroup">Add a new product group</Link> 
                      </div>


<br/>
<br/>
<br/>
            </div>

        );
    }
}

export default warehouseManagement;