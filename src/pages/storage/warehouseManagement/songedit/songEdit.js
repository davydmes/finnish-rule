import React, { Component } from 'react';
import './songEdit.css'
import { fetchApi } from '../../../../services/api';

class songEdit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: {},
      songs: [],
      iBox: ""

    }


  }



  componentDidMount() {
    if (this.props.location && this.props.location.query) {
      console.log(this.props.location.query);
      var prod = this.props.location.query;

      this.setState({
        product: prod,
        songs: prod.songs || []
      })
    }
  }

  addSong = () => {
    console.log(this.state.songs)
    if (this.state.product && this.state.product._id) {
      let header = { "Authorization": "token " + JSON.parse(localStorage.getItem("userData")).sessionId };
      var payload = new Object(this.state.product);
      var newSong = {
        name: this.state.iBox,
        date: new Date()
      }

      var bodyFormData = new FormData();
      payload.songs = payload.songs || [];
      payload.songs.push(newSong);
      payload.productId = payload._id;
      Object.keys(payload).forEach((key) => {
        bodyFormData.append('key', payload[key]);
      })

      fetchApi("/products/editProduct", "POST", payload, header)
        .then(response => {
          console.log("====>", response);
          if (response.data.success) {
            var songs = payload.songs;
            this.setState({
              songs: songs,
              iBox:""
            })
          }
        }, err => {
          console.log(err);
          alert("tapahtui virhe!");
        })
    }
    else{
      this.props.history.push("/storage/warehousemanagement");
    }


  }


  render() {
    return (


      <div className="popup" className="padding-30">
        <table style={{ border: '1px solid black', marginLeft: 'auto', marginRight: 'auto', background: 'white' }} align="center">
          <tbody><tr bgcolor="#525252" height="25px">
            <td className="blue" colSpan={3}><div align="center" className="valkonenteksti"><strong>Varastokappaleet</strong></div></td>
          </tr>
            <tr>
              <td>Tuote: </td>
            </tr>
            <tr>
              <td />
            </tr>
            <tr>
              <th>Sarjanumero</th>
              <th>Tila</th>
            </tr>
            {(this.state.songs.length > 0) ? this.state.songs.map((song) => {
              return (<tr>
                <td>{song.name}</td><td>Varastossa ({(new Date(song.date)).getDate()+"."+((new Date(song.date)).getMonth()+1) + "." +(new Date(song.date)).getFullYear()})</td>
              </tr>)
            }) : null}
            <tr>
              <td colSpan={2}>
                <p>Yhteensä {this.state.songs.length} kappaletta.</p>
                <input type="hidden" name="function" defaultValue="save" />
                <input className="original_value" type="hidden" name="old_id" defaultValue={0} />
                <input className="original_value" type="hidden" name="old_product_id" defaultValue={15} />
                <input className="original_value" type="hidden" name="old_serial_number" defaultValue />
                <p>Uuden kappaleen sarjanumero: <input type="text" name="new_serial_number" size={30} value={this.state.iBox} onChange={(e) => { this.setState({ iBox: e.target.value }) }} /> <input type="button" defaultValue="Tallenna" onClick={this.addSong} /></p>

              </td>
            </tr>
          </tbody></table>
      </div>

    );
  }
}

export default songEdit;