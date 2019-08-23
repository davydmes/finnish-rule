import React, { Component } from 'react';
import './ledgers.css'
import Table from '../../../components/table'
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../services/api'

class Ledgers extends Component {
  constructor(props) {
    super(props)
    this.onLoad();



    this.state = {
      clicks: [true, false],
      head: ["Date", "Laskunro", "Customer", "Reference", "Exempt from taxation", "VAT", "Amount", "terms", "Payouts", "Write a reminder note", "Write a credit note", "Invoice order", "View the invoice"],
      body: []



    }
  }


  onLoad = () => {
    let abc = []
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    fetchApi("/bills/loadBills", "POST", {}, header)
      .then(response => {

        var responseData1 = response.data.data || []
        console.log(responseData1, "jhjhjh")
        responseData1.map((value) => {
          
          var obj = {}
          if (value) {
            obj.date = value.dateOfInvoice
          }
          else{
            obj.date = ""
          }

          obj.Laskunro=""

          if (value && value.client && value.client.basic[0] && value.client.basic[0].name) {
            obj.client = value.client.basic[0].name;
            
          }
          else {
            obj.client = ""
          }
          obj.reference = ""
          obj.exempt= ""
          var vat = 0;
          var total = 0
          
          if (value && value.billSpecs && value.billSpecs.length>0) {
            
            value.billSpecs.map((value1)=>{
             vat = vat + value1.vat
             total = value1.total
            })
            console.log(vat,"vat")
         
            obj.vat =  vat
            obj.total = total 
          }
          else{
            obj.vat =  ""
            obj.total= ""
          }

          if(value && value.terms){
            obj.terms = value.terms
          }
          else{
            obj.terms = ""
          }

          obj.payouts =""
          obj.reminder= ""
          obj.credit=""
          obj.invoiceOrder=""
          obj.openThe= <Link to = "">Open The</Link>

          
         
         



          abc.push(obj);
        })
        this.setState({
          body: abc
        })

      })
  }

  manageClick(index) {
    console.log(index);
    var arr = [];
    for (var i = 0; i < this.state.clicks.length; i++) {
      if (i != index) {
        arr.push(false);
      }
      else {
        arr.push(true);
      }
    }
    this.setState({
      clicks: [...arr]
    });
  }
  render() {
    return (
      <div className="padding-30">

        <div id="div_innercontent">
          {/* Submenu. */}
          <div id="menu_level2">
            <ul className="buttons_navigate_lvl_2">
              <li className="selected_item">
                <Link to="/reports/ledgers"><span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Ledgers</font></font></span></Link>
              </li>
              {/* <li>
                <Link to="/reports/sales-statistics"> <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>sales statistics</font></font></span></Link>
              </li>
              <li>
                <Link to="/reports/sales-printing"> <span><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>sales printing</font></font></span></Link>
              </li> */}
            </ul>
          </div>
          {/* Notification */}
          {/* Content. */}
          <div>
            <div>
              <div className="MuiTabs-root-6 LedgerSearchForm-tabs-1"><div className="MuiTabs-flexContainer-7"><div className="MuiTabs-scrollingContainer-8 MuiTabs-fixed-9" role="tablist" style={{ marginBottom: '0px' }}><div className="MuiTabs-flexContainer-7"><button tabIndex={0} onClick={() => { this.manageClick(0) }} className={this.state.clicks[0] ? "MuiButtonBase-root-29 MuiTab-root-13 MuiTab-rootInherit-21 MuiTab-rootInheritSelected-22 MuiTabIndicator-colorAccent-32" : "MuiButtonBase-root-29 MuiTab-root-13 MuiTab-rootInherit-21 MuiTab-rootInheritSelected-22"} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper-25"><div className="MuiTab-labelContainer-26"><span className="MuiTab-label-27">Laskujen haku</span></div></span><span className="MuiTouchRipple-root-34" /></button><button tabIndex={0} onClick={() => { this.manageClick(1) }} className={this.state.clicks[1] ? "MuiButtonBase-root-29 MuiTab-root-13 MuiTab-rootInherit-21 MuiTab-rootInheritSelected-22 MuiTabIndicator-colorAccent-32" : "MuiButtonBase-root-29 MuiTab-root-13 MuiTab-rootInherit-21 MuiTab-rootInheritSelected-22"} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper-25"><div className="MuiTab-labelContainer-26"><span className="MuiTab-label-27">Haku tunnisteella</span></div></span><span className="MuiTouchRipple-root-34" /></button></div><div className="MuiTabIndicator-root-31" style={{ left: '0px', width: '160px' }} /></div></div></div>
            </div>
            {
              this.state.clicks[0] ? (
                <div>
                  <div id="ledger-search-form-container"><div><form className="LedgerSearchForm-form-2"><div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3"><label className="MuiFormLabel-root-51 MuiInputLabel-root-45 MuiInputLabel-formControl-46 MuiInputLabel-animated-49 MuiInputLabel-shrink-48" data-shrink="true" htmlFor="select-paid">Maksun tila</label><div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66">
                    <div className="MuiSelect-root-215">
                      <div className="MuiSelect-select-216 MuiSelect-selectMenu-217 MuiInput-input-69 MuiInput-inputSingleline-72" aria-pressed="false" tabIndex={0} role="button" aria-haspopup="true">kaikki</div>

                      <input type="hidden" name="paid" id="select-paid" aria-required="false" aria-invalid="false" defaultValue="all" />

                      <svg className="MuiSvgIcon-root-75 MuiSelect-icon-219" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" />
                      </svg></div></div></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3"><label className="MuiFormLabel-root-51 MuiInputLabel-root-45 MuiInputLabel-formControl-46 MuiInputLabel-animated-49 MuiInputLabel-shrink-48" data-shrink="true" htmlFor="select-mode">Aikaväli</label><div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66"><div className="MuiSelect-root-215"><div className="MuiSelect-select-216 MuiSelect-selectMenu-217 MuiInput-input-69 MuiInput-inputSingleline-72" aria-pressed="false" tabIndex={0} role="button" aria-haspopup="true">kuukausi</div><input type="hidden" name="mode" id="select-mode" aria-required="false" aria-invalid="false" defaultValue="month" /><svg className="MuiSvgIcon-root-75 MuiSelect-icon-219" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" /></svg></div></div></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3"><label className="MuiFormLabel-root-51 MuiInputLabel-root-45 MuiInputLabel-formControl-46 MuiInputLabel-animated-49 MuiInputLabel-shrink-48" data-shrink="true" htmlFor="select-year">Vuosi</label><div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66"><div className="MuiSelect-root-215"><div className="MuiSelect-select-216 MuiSelect-selectMenu-217 MuiInput-input-69 MuiInput-inputSingleline-72" aria-pressed="false" tabIndex={0} role="button" aria-haspopup="true">2019</div><input type="hidden" name="year" id="select-year" aria-required="false" aria-invalid="false" defaultValue={2019} /><svg className="MuiSvgIcon-root-75 MuiSelect-icon-219" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" /></svg></div></div></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3"><label className="MuiFormLabel-root-51 MuiInputLabel-root-45 MuiInputLabel-formControl-46 MuiInputLabel-animated-49 MuiInputLabel-shrink-48" data-shrink="true" htmlFor="select-month">Kuukausi</label><div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66"><div className="MuiSelect-root-215"><div className="MuiSelect-select-216 MuiSelect-selectMenu-217 MuiInput-input-69 MuiInput-inputSingleline-72" aria-pressed="false" tabIndex={0} role="button" aria-haspopup="true">heinäkuu</div><input type="hidden" name="month" id="select-month" aria-required="false" aria-invalid="false" defaultValue={7} /><svg className="MuiSvgIcon-root-75 MuiSelect-icon-219" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" /></svg></div></div></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControlButton-5"><button tabIndex={0} className="MuiButtonBase-root-29 MuiButton-root-86 MuiButton-raised-93 MuiButton-fab-99 MuiButton-mini-100 MuiButton-raisedPrimary-95" type="button" role="button"><span className="MuiButton-label-88"><svg className="MuiSvgIcon-root-75" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" /></svg></span><span className="MuiTouchRipple-root-34" /></button></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControlButton-5"><button tabIndex={0} className="MuiButtonBase-root-29 MuiButton-root-86 MuiButton-raised-93 MuiButton-fab-99 MuiButton-mini-100 MuiButton-raisedPrimary-95" type="button" role="button"><span className="MuiButton-label-88"><svg className="MuiSvgIcon-root-75" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" /></svg></span><span className="MuiTouchRipple-root-34" /></button></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3 LedgerSearchForm-customerPick-4"><div className="IntegrationAutosuggest-container-224"><div className="MuiFormControl-root-41 IntegrationAutosuggest-textField-228"><div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66" role="combobox" aria-autocomplete="list" aria-owns="react-autowhatever-1" aria-expanded="false" aria-haspopup="false"><input type="text" autoComplete="off" className="MuiInput-input-69 MuiInput-inputSingleline-72" placeholder="Asiakas..." aria-required="false" aria-invalid="false" defaultValue="true" /></div></div><div className="MuiPaper-root-229 MuiPaper-shadow2-233" id="react-autowhatever-1" /></div></div></form></div></div>
                </div>
              ) : null}



            {
              this.state.clicks[1] ? (

                <div>

                  <div className="MuiFormControl-root-41 LedgerSearchForm-formControl-3">
                    <div className="MuiFormControl-root-41">
                      <label className="MuiFormLabel-root-51 MuiInputLabel-root-45 MuiInputLabel-formControl-46 MuiInputLabel-animated-49" data-shrink="false" htmlFor="text-identifier">Lasku- tai viitenumero</label>
                      <div className="MuiInput-root-60 MuiInput-formControl-61 MuiInput-inkbar-62 MuiInput-underline-66">
                        <input type="text" className="MuiInput-input-69 MuiInput-inputSingleline-72" id="text-identifier" name="identifier" aria-required="false" aria-invalid="false" />
                      </div></div></div><div className="MuiFormControl-root-41 LedgerSearchForm-formControlButton-5">
                    <button tabIndex={0} className="MuiButtonBase-root-29 MuiButton-root-86 MuiButton-raised-93 MuiButton-fab-99 MuiButton-mini-100 MuiButton-raisedPrimary-95" type="submit" role="button">
                      <span className="MuiButton-label-88">
                        <svg className="MuiSvgIcon-root-75" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span><span className="MuiTouchRipple-root-34" /></button></div>
                </div>) : null}


          </div>





          <button className="right btn waves-effect waves-light" href="#" onclick="printLedger()">
            <i className="material-icons left">print</i>Tulosta tiedot
      </button>

        </div>


        <Table head={this.state.head} body={this.state.body} foot={true} />









      </div>

    );
  }
}

export default Ledgers;