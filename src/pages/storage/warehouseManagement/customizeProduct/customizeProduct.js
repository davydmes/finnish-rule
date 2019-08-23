import React, { Component } from 'react';
import './customizeProduct.css'
import { fetchApi } from '../../../../services/api'
class customizeProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "groupId": "",
      "name": "",
      "inventoryMonitoring": false,
      "storageUnits": false,

      "productCode": false,
      "name2": false,
      "additionalInformation": false,
      "inStore": false,
      "busy": false,
      "unit": false,
      "sellingPrice": false,
      "vat": false,
      "purchasePrice": false,
      "shelfLocation": false,
      "picture": false,
      "size": false,
      "thickness": false


    }






  }
  componentDidMount() {
    if (this.props.location && this.props.location.query) {
      console.log(this.props.location.query);
      var quObj = this.props.location.query;

      console.log(quObj)
      this.setState({
        "groupId": quObj._id,
        "name": quObj.name,
        "inventoryMonitoring": quObj.inventoryMonitoring,
        "storageUnits": quObj.storageUnits
      }, () => {
        console.log("set state hua", this.state.columns)
      })

      if (quObj.columns) {
        this.setState({
          "productCode": quObj.columns.productCode,
          "name2": quObj.columns.name,
          "additionalInformation": quObj.columns.additionalInformation,
          "inStore": quObj.columns.inStore,
          "busy": quObj.columns.busy,
          "unit": quObj.columns.unit,
          "sellingPrice": quObj.columns.sellingPrice,
          "vat": quObj.columns.vat,
          "purchasePrice": quObj.columns.purchasePrice,
          "shelfLocation": quObj.columns.shelfLocation,
          "picture": quObj.columns.picture,
          "size": quObj.columns.size,
          "thickness": quObj.columns.thickness

        })
      }



    }
  }
  onDelete = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "groupId": this.state.groupId
    }

    fetchApi("/groups/deleteGroup", "POST", payload, header)
      .then(response => {
        if (response.data.message == "success") {
          this.props.history.push("/storage/warehousemanagement")
        }




      })
  }
  onCancel = () => {
    this.props.history.push("/storage/warehousemanagement")
  }



  onEdit = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "groupId": this.state.groupId,
      "name": this.state.name,
      "inventoryMonitoring": this.state.inventoryMonitoring,
      "storageUnits": this.state.storageUnits,
      "columns": {
        "productCode": this.state.productCode,
        "name": this.state.name2,
        "additionalInformation": this.state.additionalInformation,
        "inStore": this.state.inStore,
        "busy": this.state.busy,
        "unit": this.state.unit,
        "sellingPrice": this.state.sellingPrice,
        "vat": this.state.vat,
        "purchasePrice": this.state.purchasePrice,
        "shelfLocation": this.state.shelfLocation,
        "picture": this.state.picture,
        "size": this.state.size,
        "thickness": this.state.thickness
      }

    }
    fetchApi("/groups/editGroup", "POST", payload, header)
      .then(response => {
        if (response.data.message == "success") {
          this.props.history.push("/storage/warehousemanagement")
        }




      })



  }
  render() {
    return (


      <div className="popup" className="padding-30">
        <table style={{ border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', background: 'white' }} align="center">
          <tbody><tr bgcolor="#525252" height="25px">
            <td className="blue" colSpan={2}>
              <div align="center" className="valkonenteksti">
                <strong><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Edit the product group</font></font></strong>
              </div>
            </td>
          </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Name</font></font></td>
              <td><input type="text" name="nimi" size={25} value={this.state.name} onChange={(e) => { this.setState({ "name": e.target.value }) }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Inventory monitoring</font></font></td>
              <td><input type="checkbox" name="varastosaldo" size={25} checked={this.state.inventoryMonitoring} onChange={(e) => { this.setState({ "inventoryMonitoring": e.target.checked }) }} /></td>
            </tr>
            <tr>
              <td className="hd"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>storage Units</font></font></td>
              <td><input type="checkbox" name="kappaleet" size={25} checked={this.state.storageUnits} onChange={(e) => { this.setState({ "storageUnits": e.target.checked }) }} /></td>
            </tr>
            <tr>
              <td colSpan={2}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Select columns:</font></font></td>
            </tr>
            <tr>
              <td><input type="checkbox" name="is[]" checked={this.state.productCode} onChange={(e) => { this.setState({ "productCode": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>product code</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.name2} onChange={(e) => { this.setState({ "name2": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Name</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.additionalInformation} onChange={(e) => { this.setState({ "additionalInformation": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Additional Information</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.inStore} onChange={(e) => { this.setState({ "inStore": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>In store</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.busy} onChange={(e) => { this.setState({ "busy": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Busy</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.unit} onChange={(e) => { this.setState({ "unit": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Unit</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.sellingPrice} onChange={(e) => { this.setState({ "sellingPrice": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Selling price</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.vat} onChange={(e) => { this.setState({ "vat": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>VAT</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.purchasePrice} onChange={(e) => { this.setState({ "purchasePrice": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Purchase price</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.shelfLocation} onChange={(e) => { this.setState({ "shelfLocation": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>shelf Location</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.picture} onChange={(e) => { this.setState({ "picture": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Picture</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.size} onChange={(e) => { this.setState({ "size": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Size</font></font></td>
            </tr><tr>
              <td><input type="checkbox" name="is[]" checked={this.state.thickness} onChange={(e) => { this.setState({ "thickness": e.target.checked }) }} /></td>
              <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Thickness</font></font></td>
            </tr></tbody></table>
        <table align="center" style={{ border: '0px solid black', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}>
          <tbody><tr>
            <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" name="submit_muokkaus" id="submit_muokkaus" value="Save" onClick={this.onEdit} /></font></font></td>
            <td><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" value="Cancel" onClick={this.onCancel} /></font></font></td>
          </tr>
            <tr>
              <td colSpan={2} style={{ paddingTop: '10px' }}>
                <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}><input type="submit" name="submit_poista" value="Delete product group" onClick={this.onDelete} /></font></font>
              </td>
            </tr>
          </tbody></table>
      </div>

    );
  }
}

export default customizeProduct;