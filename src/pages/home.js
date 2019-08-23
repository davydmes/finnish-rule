import React from 'react';
import '../css/home.css';
import logo_new from '../kuvat/logo_new.png'; 
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom';
// import '../css/buttons.css';
// import '../css/common.css';
// import '../css/dialog.css';
// import '../css/flexselect.css';
// import '../css/ledger.css';
// import '../css/menu.css'
// import '../css/notification.css';
// import '../css/style.css';
// import '../css/round.css';
// import '../css/table.css';
// import '../css/style1285.css';
// import '../css/variables.css';


const home = () => {
    return (
<div>

<div id='div_application'>

{/* <!-- Top area. --> */}
{/* <div id='div_top'>
<div id='div_toprow'>
<a id='logo' href='index.php'>
<img src={logo_new}/>
</a>

<div className='login_info'>Tomi Salmi<br/><a id='logout_link' href='login.php?reason=logout'>Kirjaudu ulos</a>
</div><div id='menu_level1'>
<ul className='buttons_navigate'>
<li >
<Link to='/timecard/record'>Time Card</Link>
</li>
<li >
<a href='index.php?page=customers'><span>Clients</span></a>
</li>
<li >
<a href='index.php?page=tasklist'><span>Orders</span></a>
</li>
<li >
<a href='index.php?page=task_not_billed'><span>Laskutus</span></a>
</li>
<li >
<a href='index.php?page=stock'><span>Storage</span></a>
</li>
<li >
<a href='index.php?page=accounts_ledger'><span>Reports</span></a>
</li>
<li >
<a href='index.php?page=company_info'><span>Settings</span></a>
</li>
</ul>
</div>

<div className='clear'></div>
</div>
</div> */}

{/* <!-- Menu. --> */}

<div id='div_innercontent'>
    {/* <!-- Submenu. --> */}
    <div id='menu_level2'>
<ul className='buttons_navigate_lvl_2'>
</ul>
</div>
</div>

        







        <div id='div_content'>
﻿<div className='login_information'>Viimeksi kirjauduttu 2019-07-19 13:25:20 ip-osoitteesta: 122.162.129.159</div><h3 className='bulletin'>Tiedotteet</h3>
<div className='news'>
	<a href='#'>Rule 1.8.9 päivitetty (18.2.2018)</a>
	<div>
		<p>Korjattu reskontran maksettujen ja maksamattomien laskujen haku. Nyt
			myös uudet maksupäivämäärällä merkityt maksusuoritukset haetaan
			oikein maksettuina.
		</p>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.8 päivitetty (27.1.2018)</a>
	<div>
		<ul>
			<li>Maksettu etukäteen poistettu laskun maksutapavalinnoista. Sen sijaan voidaan
				käyttää maksutapaa käteinen.
			</li>
			<li>Tulostustyön hinnan laskennassa käytetään arkkien määrälle oletusarvona
				painos kertaa sivumäärä, jos arkkien lukumäärä on jäänyt antamatta.
			</li>
			<li>Arkkien lukumäärän laskennassa paperin kokomerkintä luetaan nyt oikein. Joidenkin
				paperien nimissä saattoi olla merkintöjä, jotka tulkittiin virheellisesti.
			</li>
		</ul>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.7 päivitetty (21.1.2018)</a>
	<div>
		<p>Merkittäessä lasku maksetuksi reskontrassa myös maksupäivä on jatkossa
			annettava. Maksupäivä näkyy reskontran haussa ja tulosteessa.
		</p>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.6 päivitetty (6.1.2018)</a>
	<div>
		<ul>
			<li>Laskun maksetuksi merkinnässä näytetään nyt varmistusdialogi.</li>
			<li>Reskontran haku toimii nyt, vaikka kuluvalle vuodelle ei olisi
				vielä tulostettu laskuja.
			</li>
		</ul>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.5 päivitetty (18.12.2017)</a>
	<div>
		<p>Laskun esikatselun asettelu korjattu. Esikatselun pitäisi nyt olla koko ikkunan korkuinen.</p>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.4 päivitetty (10.12.2017)</a>
	<div>
		<ul>
			<li>Korjattu hyvityslaskun tulostus. Hyvityslaskun muodostaminen
				epäonnistui joskus, kun laskurivit sisälsivät tiettyjä erikoismerkkejä.
			</li>
			<li>Kokeillaan modernimpaa ulkoasua reskontran laskujen hakulomakkeelle.
				Navigointipainikkeet siirretty vierekkäin. <b>Huom.</b> Selain saattaa pitää muistissaan
				vanhoja tyylejä. Jos värit ja painikkeiden asettelu ei ole kohdallaan, kokeile
				ladata sivu uudestaan painelemalla reskontrasivulla <b>CTRL+F5</b>.
			</li>
			<li>Reskontrassa on nyt mahdollista navigoida eteenpäin, kun laskuja
				on päivätty tuleville kuukausille.
			</li>
		</ul>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.3 päivitetty (30.10.2017)</a>
	<div>
		<p>Korjattu moniosaisen tilauksen näyttäminen.</p>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.2 päivitetty (29.10.2017)</a>
	<div>
		<ul>
			<li>Reskontran haku on uusittu. Hakutulos päivittyy saman tien
					hakuehtoja muutettaessa ja hakutuloksessa on mahdollista navigoida
					helposti kuukausittain tai vuosittain. Laskun merkintä maksetuksi
					onnistuu yhdellä klikkauksella.
			</li>
			<li>
				Rule on siirretty modernille palvelinalustalle.
			</li>
			<li>
				Varaston haku korjattu.
			</li>
		</ul>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8.1 päivitetty (17.9.2017)</a>
	<div>
		<p>Tilausvahvistuksen kenttien otsikot on muutettu selkeämmiksi siten,
			että niissä puhutaan tilauksesta eikä tarjouksesta.</p>
	</div>
</div>
<div className='news'>
	<a href='#'>Rule 1.8 päivitetty (16.9.2017)</a>
	<div>
		<p>Versiopäivitys sisältää teknisiä muutoksia, jotka mahdollistavat
			jatkokehityksen modernilla alustalla.</p>
	</div>
</div>
</div>
</div>

</div>

    );
};

export default home;    