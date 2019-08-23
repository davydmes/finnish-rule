import React from 'react';
import './customerInfo.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import addNewCustomer from '../register/addNewCustomer'
import { fetchApi } from '../../../services/api'

export default class CustomerInfo extends React.Component {

  constructor(props) {
    super(props);
    let ci =
      this.state = {
        clicks: [true, false, false],
        comment: false,
        addComment: "",
        userData: [{
          comments: []

        }, { comments: [] }],
        activeIndex: localStorage.getItem("clientIndex") || 0
      }


    this.onUserData()
  }
  onEdit = (value) => {
    localStorage.setItem("clientData", JSON.stringify(value));
    localStorage.setItem("clientIndex", this.state.activeIndex)


  }

  deleteUser = () => {

    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }

    if (this.state.userData[this.state.activeIndex]) {
      let payload = {
        "clientId": this.state.userData[this.state.activeIndex]._id
      }


      fetchApi("/clients/deleteClient", "POST", payload, header)
        .then(response => {
          console.log(response);
          if (response.data.message == "success") {
            var userArray = this.state.userData
            userArray.splice(this.state.activeIndex, 1)
            this.setState({
              "userData": userArray,
              "activeIndex": 0
            })
          }

        }).catch(err => {
          console.log("api not working");
        });

    }
    else {

    }

  }









  onUserData = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }


    fetchApi("/clients/loadClients", "POST", {}, header)
      .then(response => {
        console.log(response);
        let ud = [];
        ud = response.data.data;
        if (ud) {
          ud.reverse();

          this.setState({ userData: ud })
        }
      })
  }


  manageClick(index) {
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


  showComment = () => {
    let val = !this.state.comment;
    this.setState({
      comment: val
    })
  }


  addComment = () => {
    let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId }
    let payload = {
      "clientId": this.state.userData[this.state.activeIndex]._id,
      "comment": this.state.addComment
    }
    let p = JSON.parse(localStorage.getItem("userData"));
    let commentObj = {
      "name": p.username,
      "date": new Date(),
      "comment": this.state.addComment
    }
    let that = this;

    fetchApi("/clients/addComment", "POST", payload, header)
      .then(response => {
        console.log(response);
        if (response.data.message == "success") {
          that.state.userData[that.state.activeIndex].comments.unshift(commentObj);
          that.setState({
            "userData": that.state.userData
          })
        }
      })
    this.showComment();
  }






  render() {
    return (

      <div className="padding-30">


        <div id="div_innercontent">
          {/* Submenu. */}
          <div id="menu_level2">
            <ul className="buttons_navigate_lvl_2">
              <li className="selected_item">
                <Link to="/clients/customerinfo"><span>Asiakasrekisteri</span></Link>
              </li>
              <li>
                <Link to="/clients/addcustomer"><span>Lisää uusi asiakas</span></Link>
              </li>
            </ul>
          </div>
          {/* Notification */}
          {/* Content. */}
          <div id="div_content">
            <link rel="stylesheet" type="text/css" href="css/flexselect.css" />
            <link type="text/css" rel="stylesheet" href="css/customer_register.css" />
            <div className="customerContent">
              <div className="customerLeft">
                <div className="customerBar">
                  <div className="inputParent"><input type="text" id="customerSearch" title="Etsi asiakas asiakasrekisteristä syöttämällä hakuehtoja" autoComplete="off" maxLength={60} /><span className="loadingicon" style={{ left: '187px', top: '5px', display: 'none' }} /><span className="searchIcon" style={{ top: '8px', left: '10px' }} /><span className="emptyText" title="Etsi asiakas asiakasrekisteristä syöttämällä hakuehtoja" style={{ left: '35px', top: '9px' }}>Asiakashaku</span></div>
                  <span id="c-new_customer" className="customer_icon" title="Lisää uusi asiakas" />
                  <div className="clear" />
                </div>
                <div className="customerListContainer" style={{ height: '400px' }}>
                  <ul className="customerList">
                    <input id="next_row" type="hidden" defaultValue={20} />
                    <input id="total_rows" type="hidden" defaultValue={26} />

                    {this.state.userData.map(
                      (value, index) => {
                        console.log(value)
                        return (
                          <li className="branch-not-selected branch-selected" onClick={() => {
                            this.setState({
                              activeIndex: index
                            })
                          }}>
                            <div className="customerListItem ">

                              <p className="customerCompany">{value.companyName}</p><p className="customerContact">Nimi on nykyään pakollinen</p><input type="hidden" defaultValue={730} />
                            </div>
                          </li>
                        )
                      }
                    )}

                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">A-bus Oy</p>			<p className="customerContact">Matti Melamies</p>			<input type="hidden" defaultValue={722} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Bta Media Oy</p>			<p className="customerContact">Jukka Mikkola</p>			<input type="hidden" defaultValue={732} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">Dream Service</p>			<p className="customerContact">Kai Lehtonen</p>			<input type="hidden" defaultValue={748} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">Finnfor Oy</p>			<p className="customerContact">Tapio Lehtinen</p>			<input type="hidden" defaultValue={743} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Fysio Saarni</p>			<p className="customerContact">Tatu Saarni</p>			<input type="hidden" defaultValue={727} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Grafilo Oy</p>			<p className="customerContact">Antti Hassinen</p>			<input type="hidden" defaultValue={737} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Helsinki Bofori Oy</p>			<p className="customerContact">Kimmo Wirén</p>			<input type="hidden" defaultValue={746} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Invenco</p>			<p className="customerContact">Sakari Pitkäsalo</p>			<input type="hidden" defaultValue={711} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">Juutiprint Ky.</p>			<p className="customerContact">Esa Juutilainen</p>			<input type="hidden" defaultValue={700} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Kapotek</p>			<p className="customerContact">Welf Zaeske</p>			<input type="hidden" defaultValue={747} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">Kauko-Kustannus</p>			<p className="customerContact">Kauko Parkkinen</p>			<input type="hidden" defaultValue={739} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Kuulosirpakka Oy</p>			<p className="customerContact">Sirkku-Marja Väätäinen</p>			<input type="hidden" defaultValue={723} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Leader Oy</p>			<p className="customerContact">Tommi Liuha</p>			<input type="hidden" defaultValue={731} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Leakomatic Ab</p>			<p className="customerContact">Peter Linnavuori</p>			<input type="hidden" defaultValue={740} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Mail &amp; Print Partner Oy</p>			<p className="customerContact">Kari Pohjola</p>			<input type="hidden" defaultValue={741} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">Masterum Oü</p>			<p className="customerContact">Tapio Lehtinen</p>			<input type="hidden" defaultValue={742} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Neemia Oy</p>			<p className="customerContact">Joni Juutilainen</p>			<input type="hidden" defaultValue={735} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">One Way Mission</p>			<p className="customerContact">Tapani Suonto</p>			<input type="hidden" defaultValue={701} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">SilverPrint</p>			<p className="customerContact">Kauko Juvonen</p>			<input type="hidden" defaultValue={738} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Solace Media Oy</p>			<p className="customerContact">Mikko Ahlholm</p>			<input type="hidden" defaultValue={745} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Studio Infinitas</p>			<p className="customerContact">Tuomo Teiniranta</p>			<input type="hidden" defaultValue={729} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Suomen Autopalvelin Oy</p>			<p className="customerContact">Matti Koivu</p>			<input type="hidden" defaultValue={744} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title="Erääntyneitä laskuja">
                      <div className="customerListItem has_overdue_invoices">
                        <p className="customerCompany">UVM yhtiöt OY</p>			<p className="customerContact">Petri Väyrynen</p>			<input type="hidden" defaultValue={736} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Vantaan Kotikirkko</p>			<p className="customerContact">Harri Kröger</p>			<input type="hidden" defaultValue={733} />
                      </div>
                    </li>
                    <li className="branch-not-selected" title>
                      <div className="customerListItem ">
                        <p className="customerCompany">Vantaan Minttukirkko</p>			<p className="customerContact">Mika Impola</p>			<input type="hidden" defaultValue={728} />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="customerTotalCount">
                  <p>Haussa löytyi 26 asiakasta</p>
                </div>
              </div>
              <div className="contentRight" id="customerRight">
                <div className="formContainer" id="customerContainer">
                  <div>
                    <h2 id="customer_header">
                      {this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].companyName : ""}		<button id="delete_customer" className="basicButton leftIcon whiteButton" onClick={this.deleteUser}><span />Poista asiakas</button>
                      <div className="clear" />
                    </h2>
                    <div id="tabbed-view">
                      <ul id="c-nav">
                        <li className={this.state.clicks[0] ? "selected" : ""} onClick={() => { this.manageClick(0) }}><a href="#" id="customer_form" title="Asiakkaan tiedot">Asiakastiedot</a></li>
                        <li className={this.state.clicks[1] ? "selected" : ""} onClick={() => { this.manageClick(1) }}><a href="#" id="customer_history" title="Asiakkaaseen liittyvät tapahtumat, muistiinpanot">Asiakasmuistio</a></li>
                        <li className={this.state.clicks[2] ? "selected" : ""} onClick={() => { this.manageClick(2) }}><a href="#" id="customer_orders" title="Laskutetut ja keskeneräiset tilaukset">Tilaushistoria</a></li>
                        <div className="clear" />
                      </ul>
                      <div className="clear" />


                      {this.state.clicks[0] ? (
                        <div id="c-data">
                          <input type="hidden" id="currentTabId" defaultValue="customer_form" />
                          <div className="c-left">
                            <div className="address_container">
                              <h3 className="c-section_header"><span>Yleiset asiakastiedot</span>
                                <Link to="/editcustomer">
                                  <span id="c-edit_info" className="edit_icon customer_icon" title="Muokkaa asiakastietoja" onClick={() => this.onEdit(this.state.userData[this.state.activeIndex])} /></Link>
                                <div className="clear" />
                              </h3>
                              <table className="c-table" width="100%" cellSpacing={0} cellPadding={0} border={0} id="TABLE_1">
                                <tbody>
                                  <tr>
                                    <th colSpan={2}>Perustiedot</th>
                                  </tr>
                                  <tr>
                                    <td width="150px">Asiakasnumero</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].customerNumber : ""}</td></tr>
                                  <tr>
                                    <td>Asiakastyyppi</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].name : ""}</td>
                                  </tr>
                                  <tr>
                                    <th colSpan={2} className="middle_header">Yrityksen tiedot</th>
                                  </tr>
                                  <tr>
                                    <td>Yrityksen nimi</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].companyName : ""}</td>
                                  </tr>
                                  <tr>
                                    <td>Y-tunnus</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].businessId : ""}</td>
                                  </tr>
                                  {/*tr>
                              <td>Puhelinnumero</td>
                              <td></td>
                          </tr*/}
                                  <tr>
                                    <th colSpan={2} className="middle_header">Laskutus</th>
                                  </tr>
                                  <tr>
                                    <td>Maksuehdot</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].terms : ""}</td>
                                  </tr>
                                  <tr>
                                    <td>Alennusprosentti</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].discount : ""}</td>
                                  </tr>
                                  <tr>
                                    <td>Verkkolaskuosoite</td>
                                    <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].invoiceAddress : ""}</td>
                                  </tr>
                                  <tr>
                                    <td>Palveluntarjoajan tunnus</td>
                                    <td> {this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].providerId : ""}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th colSpan={2} className="middle_header">Muut tiedot</th>
                                  </tr>
                                  {/*tr>
                              <td>Asiointikieli</td>
                              <td>[Suomi / Englanti / Ruotsi / .. ]</td>
                          </tr*/}
                                  <tr>
                                    <td className="textarea-title" colSpan={2}>Lisätiedot</td>
                                  </tr>
                                  <tr>
                                    <td colSpan={2}><textarea rows={6} cols={10} width="100%" readOnly="readonly" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="c-right">
                            <div id="address_container">
                              <div id="address_dummy_header">
                                <h3 className="c-section_header">
                                  <span>Osoitteet</span>
                                  <div className="clear" />
                                </h3>
                              </div>
                              <select id="new_address">
                                <option value="default">Lisää uusi ..</option>
                                <option value={1}>Postiosoite</option><option value={2}>Laskutusosoite</option><option value={3}>Toimitusosoite</option>		</select>
                            </div>
                            <div id="contacts_container">
                              <h3 className="c-section_header"><span>Yhteyshenkilöt</span>
                                <span id="c-new_contact" className="customer_icon" title="Lisää uusi henkilö" />					<div className="clear" />
                              </h3>
                              <div className="c-contacts">
                                <div id="contact-0">
                                  <div className="contact_edit_form" style={{ display: 'none' }} />
                                </div>
                                <div id="contact-1">
                                  <table className="c-table c-edit_contacts contactData" cellSpacing={0} cellPadding={0} border={0} id="TABLE_2">
                                    <tbody>
                                      <tr>
                                        <td width="150px">Nimi</td>
                                        <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].name : ""}</td>
                                      </tr>
                                      <tr>
                                        <td>Puhelinnumero</td>
                                        <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].telephone : ""}</td>
                                      </tr>
                                      <tr>
                                        <td>Sähköposti</td>
                                        <td>{this.state.userData[this.state.activeIndex] ? this.state.userData[this.state.activeIndex].email : ""}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <span id="c-delete_contact-1" className="c-delete_contact c-delete_small contact_icon-1 customer_icon" title="Poista henkilö" style={{ display: 'none' }} />
                                  <span id="c-edit_contact-1" className="contact_icon-1 c-edit_contact c-edit_small customer_icon" title="Muokkaa henkilöä" style={{ display: 'none' }} />
                                  <div className="contact_edit_form" style={{ display: 'none' }} />
                                  <div className="clear" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>) : null}

                      <div className="clear" />

                      {/* Second block starts here */}
                      {this.state.clicks[1] ? (


                        <div className="c-history">
                          <h3 className="c-section_header">Kommentit
          <a href="#" id="c-new_comment" className={this.state.comment == true ? "original_value" : ""} onClick={() => this.showComment()}>+&nbsp;<span>Lisää uusi kommentti</span></a>
                          </h3>


                          {this.state.comment ? (<div id="comment_edit_form" className="original_value1" style={{}}>
                            {/* Muokattavien kenttien alkuperäiset arvot. */}
                            <input className="original_value" type="hidden" name="id" defaultValue={730} />
                            <input className="original_value" type="hidden" name="comment_id" defaultValue={0} />
                            <input className="original_value" type="hidden" name="comment" defaultValue />
                            <label htmlFor="comment"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Comment</font></font></label>
                            <div>

                              <textarea id="comment" name="comment" value={this.state.addComment} onChange={(e) => { console.log(e.target.value); this.setState({ addComment: e.target.value }) }} cols={60} rows={10} spellCheck="false" defaultValue={""} />


                            </div>
                            <button id="c-save_comment" className={this.state.comment == false ? "" : "original_value" + " basicButton whiteButton noshadow"} onClick={(event) => { this.addComment() }} ><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>save</font></font></button>

                            <button id="c-hide_form" className={this.state.comment == false ? "" : "original_value" + " basicButton whiteButton noshadow"} onClick={() => this.showComment()}><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Cancel</font></font></button>

                          </div>) : null}



                          <div id="comment_edit_form" style={{ display: 'none' }}>
                            {/* Muokattavien kenttien alkuperäiset arvot. */}
                            <input className="original_value" type="hidden" name="id" defaultValue={730} />
                            <input className="original_value" type="hidden" name="comment_id" defaultValue={0} />
                            <input className="original_value" type="hidden" name="comment" defaultValue />
                            <label htmlFor="comment">Kommentti</label>
                            <div>
                              <textarea id="comment" name="comment" cols={60} rows={10} spellCheck="false" />
                            </div>
                            <button id="c-save_comment" className="basicButton whiteButton noshadow">Tallenna</button>
                            <button id="c-hide_form" className="basicButton whiteButton noshadow">Peruuta</button>
                          </div>
                          <div id="c-comment_container">

                            {this.state.userData[this.state.activeIndex].comments.map(

                              (value, index, arr) => {
                                console.log("array of comment ------> ", arr);
                                return (
                                  <div className="c-comment">
                                    <div className="c-comment_header">{(new Date(value.date)).toLocaleDateString()} {(new Date(value.date)).toLocaleTimeString()} {value.name}
                                    </div>



                                    <div className="c-comment_content">
                                      <p>{value.comment}</p>
                                    </div>
                                  </div>
                                )
                              })
                            }




                          </div>
                        </div>

                      ) : null}


                      {/* <div id="c-comment_container">
                              <div class="c-comment">
                                <div class="c-comment_header"><p><p>4.7.2019 7.23.54 Tomi Salmi			</p></p>
                                  <span id='c-delete_comment' class='c-delete_small customer_icon' title='Poista kommentti'></span>
                                  <span id='c-edit_comment' class='c-edit_small customer_icon' title='Muokkaa kommenttia'></span>
                                  
                                </div>
                                <div class="c-comment_content">
                                      <p><p><p>12</p></p></p>
                                </div>
                              </div>
                            <div class="c-comment">
                              <div class="c-comment_header"><p><p>4.7.2019 7.23.54 Tomi Salmi			</p></p>
                                <span id='c-delete_comment' class='c-delete_small customer_icon' title='Poista kommentti'></span>
                                <span id='c-edit_comment' class='c-edit_small customer_icon' title='Muokkaa kommenttia'></span>
                              
                              </div>
                            </div> */}


                      {/* Seconds block ends here  */}

                      {/* Third block start here  */}
                      {this.state.clicks[2] ? (

                        <div class="c-left">
                          <br />
                          <div class="c-history_section">
                            <h3 class="c-section_header">Tilaukset</h3>
                            <table class="c-table" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td >Yhteensä</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Aktiivisia</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Laskuttamatta</td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </table>
                            <button id="c-nav_orders" class="basicButton whiteButton noshadow">Näytä tilaukset</button>
                          </div>
                          <div class="c-history_section">
                            <h3 class="c-section_header">Laskut</h3>
                            <table class="c-table" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td>Avoimia</td>
                                  <td>0</td>
                                </tr>
                                <tr>
                                  <td>Erääntyneitä</td>
                                  <td>0	</td>
                                </tr>
                              </tbody>
                            </table>
                            <button id="c-nav_invoices" class="basicButton whiteButton noshadow">Näytä laskut</button>
                          </div>
                        </div>) : null}

                      {/* third block ends here  */}

                      {/* </div> */}





                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>

        </div>

      </div>

    );
  };
}