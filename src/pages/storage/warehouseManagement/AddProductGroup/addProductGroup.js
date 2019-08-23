import React, { Component } from 'react';
import {fetchApi} from '../../../../services/api'


class AddProductGroup extends Component {

constructor(props){
    super(props)


    this.state={
        "name" : "",
      "inventoryMonitoring" : false,
      "storageUnits" : false,
     
          "productCode" : false,
          "name2" : false,
          "additionalInformation" : false,
          "inStore" : false,
          "busy": false,
          "unit": false,
          "sellingPrice" : false,
          "vat" : false,
          "purchasePrice" : false,
          "shelfLocation" : false,
          "picture": false,
          "size" : false,
          "thickness" : false
      
    }
}


onSave=()=>{
    let header = {"Authorization" : "token " + JSON.parse( localStorage.getItem("userData")).sessionId}
    let payload= {
        "name": this.state.name,
        "inventoryMonitoring" : this.state.inventoryMonitoring,
         "storageUnits" : this.state.storageUnits,
          "columns" : {
          "productCode" : this.state.productCode,
          "name" : this.state.name2,
          "additionalInformation" : this.state.additionalInformation,
          "inStore" : this.state.inStore,
          "busy": this.state.busy,
          "unit": this.state.unit,
          "sellingPrice" : this.state.sellingPrice,
          "vat" : this.state.vat,
          "purchasePrice" : this.state.purchasePrice,
          "shelfLocation" : this.state.shelfLocation,
          "picture": this.state.picture,
          "size" : this.state.size,
          "thickness" : this.state.thickness
    }
}
console.log(this.state.inventoryMonitoring)

fetchApi("/groups/createGroup", "POST", payload, header)
      .then(response => {
          console.log("12121212",response)
          if(response.data.message== "success"){
                this.props.history.push("/storage/warehousemanagement");
          }
          else{

          }
                
}



)}

cancel=()=>{
  this.props.history.push("/storage/warehousemanagement");
}


render(){
    return(
        <div className="popup">
        <table style={{border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', background: 'white'}} align="center">
          <tbody><tr bgcolor="#525252" height="25px">
              <td className="blue" colSpan={2}>
                <div align="center" className="valkonenteksti">
                  <strong>Lisää uusi tuoteryhmä</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td className="hd">Nimi</td>
              <td><input type="text" name="nimi" size={25} value={this.state.name} onChange={(e)=>{
                  this.setState({
                      "name": e.target.value
                  })
              }} /></td>
            </tr>
            <tr>
              <td className="hd">Varastosaldon seuranta</td>
              <td><input type="checkbox" name="varastosaldo" size={25} value={this.state.inventoryMonitoring} onChange={(e)=>{
                  this.setState({
                      "inventoryMonitoring": e.target.checked
                  })
              }} /></td>
            </tr>
            <tr>
              <td className="hd">Varastokappaleet</td>
              <td><input type="checkbox" name="kappaleet" size={25} value={this.state.storageUnits} onChange={(e)=>{
                  this.setState({
                      "storageUnits": e.target.checked
                  })
              }}/></td>
            </tr>
            <tr>
              <td colSpan={2}>Valitse sarakkeet:</td>
            </tr>
            <tr>
              <td><input type="checkbox" name="is[]" value={this.state.productCode} onChange={(e)=>{
                  this.setState({
                      "productCode": e.target.checked
                  })
              }} /></td>
              <td>Product Code</td>
            </tr>
            <tr>
              <td><input type="checkbox" name="is[]" value={this.state.name2} onChange={(e)=>{
                  this.setState({
                      "name2": e.target.checked
                  })
              }} /></td>
              <td>Nimi</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.additionalInformation} onChange={(e)=>{
                  this.setState({
                      "additionalInformation": e.target.checked
                  })
              }}/></td>
              <td>Lisätiedot</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.inStore} onChange={(e)=>{
                  this.setState({
                      "inStore": e.target.checked
                  })
              }}/></td>
              <td>Varastossa</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.busy} onChange={(e)=>{
                  this.setState({
                      "busy": e.target.checked
                  })
              }}/></td>
              <td>Varattu</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.unit} onChange={(e)=>{
                  this.setState({
                      "unit": e.target.checked
                  })
              }}/></td>
              <td>Yksikkö</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.sellingPrice} onChange={(e)=>{
                  this.setState({
                      "sellingPrice": e.target.checked
                  })
              }}/></td>
              <td>Myyntihinta</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.vat} onChange={(e)=>{
                  this.setState({
                      "vat": e.target.checked
                  })
              }}/></td>
              <td>ALV</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.purchasePrice} onChange={(e)=>{
                  this.setState({
                      "purchasePrice": e.target.checked
                  })
              }}/></td>
              <td>Hankintahinta</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.shelfLocation} onChange={(e)=>{
                  this.setState({
                      "shelfLocation": e.target.checked
                  })
              }}/></td>
              <td>Hyllypaikka</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.picture} onChange={(e)=>{
                  this.setState({
                      "picture": e.target.checked
                  })
              }} /></td>
              <td>Kuva</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.size} onChange={(e)=>{
                  this.setState({
                      "size": e.target.checked
                  })
              }} /></td>
              <td>Koko</td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" value={this.state.thickness} onChange={(e)=>{
                  this.setState({
                      "thickness": e.target.checked
                  })
              }} /></td>
              <td>Paksuus</td>
            </tr>
          </tbody></table>
        <table align="center" style={{border: '0px solid black', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}}>
          <tbody><tr>
              <td><input type="submit" name="submit_uusi" id="submit_uusi" value="Save" onClick={this.onSave} /></td>
              <td><input type="button" onClick={this.cancel} defaultValue="Bracket" /></td>
            </tr>
          </tbody></table>
      </div>
    
    
    )
}




}
export default AddProductGroup;