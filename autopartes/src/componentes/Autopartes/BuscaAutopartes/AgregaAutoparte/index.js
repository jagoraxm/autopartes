import React, {Component} from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import firebase from '../../../FirestoreConfig';
import $ from 'jquery';
import '@firebase/firestore';

class AgregaAutoparte extends Component{
    
    constructor(){
        super();
        this.state = {
            statusError: 0
        };
    } 

    handleBuscarAutopartes = () => {
        const datoBuscado = $("#txtBuscar").val();
        const marca = $("#marca").val();
        const modelo = $("#modelo").val();
        const plano = $("#plano").val();
        const color = $("#color").val();
        const almacen = $("#almacen").val();

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        var piezasRef = db.collection('piezas');
        console.log("Buscar: "+datoBuscado);

        if(marca !== null && marca !== ""){   
            console.log("BUSCARÉ MARCA: "+marca);
            piezasRef.where('marca','==',`${marca}`).get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
                //snapshot.docs.map(doc => {
                //    console.log("DATA: "+doc.data());
                //});
            });    
        }else if(modelo !== null && modelo !== ""){
            console.log("BUSCARÉ MODELO: "+modelo);
            piezasRef.where('modelo','==',`${modelo}`).get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
                //snapshot.docs.map(doc => {
                //    console.log("DATA: "+doc.data());
                //});
            });  
        }else if(color !== null && color !== ""){
            console.log("BUSCARÉ COLOR: "+color);
            piezasRef.where('color','==',`${color}`).get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
                //snapshot.docs.map(doc => {
                //    console.log("DATA: "+doc.data());
                //});
            });
        }else if(plano !== null && plano !== ""){
            console.log("BUSCARÉ PLANO: "+plano);
            piezasRef.where('plano','==',`${plano}`).get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
                //snapshot.docs.map(doc => {
                //    console.log("DATA: "+doc.data());
                //});
            });
        }else if(almacen !== null && almacen !== ""){
            console.log("BUSCARÉ ALMACEN: "+almacen);
            piezasRef.where('almacen','==',`${almacen}`).get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
                //snapshot.docs.map(doc => {
                //    console.log("DATA: "+doc.data());
                //});
            });
        }
    }

    agregaAutoparte = data => {
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const autoRef = db.collection("piezas").add({
          almacen: data.almacen,
          color: data.color,
          modelo: data.modelo,
          marca: data.marca,
          plano: data.plano, 
          pieza: data.pieza,
          estatus: "POR VENDER"
        });  
        data = null;
        console.log(autoRef);
        document.getElementById("pieza").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("color").value = "";
        document.getElementById("almacen").value = "";
        document.getElementById("plano").value = "";
      };

    handleGuardaAutoparte = () => {
        const pieza = document.getElementById("pieza").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const color = document.getElementById("color").value;
        const almacen = document.getElementById("almacen").value;
        const plano = document.getElementById("plano").value;

        const autoparteAdd = {
            pieza: pieza,
            marca: marca,
            modelo: modelo,
            color: color,
            almacen: almacen,
            plano: plano
        };
        console.log(autoparteAdd);
        if(pieza !== "" && marca !== "" && modelo !== "" && color !== "" && almacen !== "" && plano !== ""){
            this.setState({estatusError: 2});
            this.agregaAutoparte(autoparteAdd);
        }
        else{
            this.setState({estatusError: 3});
            document.getElementById("pieza").value = "";
            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("color").value = "";
            document.getElementById("almacen").value = "";
            document.getElementById("plano").value = "";
        }
    }

    render = () => {
    console.log('Render');    
    return(
        <div className='agregaAutoparte'>
            {
                this.state.estatusError===2 ? 
                    <Alert bsStyle="danger">ERROR!! No llenaste todos los campos a Guardar</Alert> 
                : this.state.estatusError===3 ? 
                    <Alert bsStyle="info">Se guardará tu Pieza</Alert>
                :
                    null
                }
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Agregar Autoparte</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <form>
                        <FormGroup controlId="pieza">
                            <ControlLabel>Pieza</ControlLabel>
                            <FormControl type="text" placeholder="Ingresa texto para la pieza" />
                        </FormGroup>

                        <FormGroup controlId="marca">
                            <ControlLabel>Marca</ControlLabel>
                            <FormControl componentClass="select"placeholder="Selecciona Marca">
                                <option value="">Selecciona Marca</option>
                                <option value="ACURA">ACURA</option>
                                <option value="ALFA ROMEO">ALFA ROMEO</option>
                                <option value="">TODOS</option>
                                <option value="AMC">AMC</option>
                                <option value="AUDI">AUDI</option>
                                <option value="BMW">BMW</option>
                                <option value="BUICK">BUICK</option>
                                <option value="CADILLAC">CADILLAC</option>
                                <option value="CHEVROLET">CHEVROLET</option>
                                <option value="CHRYSLER">CHRYSLER</option>
                                <option value="DATSUN">DATSUN</option>
                                <option value="DINA">DINA</option>
                                <option value="DODGE">DODGE</option>
                                <option value="EAGLE">EAGLE</option>
                                <option value="FIAT">FIAT</option>
                                <option value="FORD">FORD</option>
                                <option value="FREIGHTLINER">FREIGHTLINER</option>
                                <option value="GMC">GMC</option>
                                <option value="HINO">HINO</option>
                                <option value="HONDA">HONDA</option>
                                <option value="HUMMER">HUMMER</option>
                                <option value="HYUNDAI">HYUNDAI</option>
                                <option value="INFINITI">INFINITI</option>
                                <option value="INTERNATIONAL">INTERNATIONAL</option>
                                <option value="ISUZU">ISUZU</option>
                                <option value="JAGUAR">JAGUAR</option>
                                <option value="JEEP">JEEP</option>
                                <option value="KENWORTH">KENWORTH</option>
                                <option value="KIA">KIA</option>
                                <option value="LAND ROVER">LAND ROVER</option>
                                <option value="LEXUS">LEXUS</option>
                                <option value="LINCOLN">LINCOLN</option>
                                <option value="MACK">MACK</option>
                                <option value="MAZDA">MAZDA</option>
                                <option value="MERCEDES BENZ">MERCEDES BENZ</option>
                                <option value="MERCURY">MERCURY</option>
                                <option value="MINI">MINI</option>
                                <option value="MITSUBISHI">MITSUBISHI</option>
                                <option value="NISSAN">NISSAN</option>
                                <option value="OLDSMOBILE">OLDSMOBILE</option>
                                <option value="PETERBILT">PETERBILT</option>
                                <option value="PEUGEOT">PEUGEOT</option>
                                <option value="PLYMOUTH">PLYMOUTH</option>
                                <option value="PONTIAC">PONTIAC</option>
                                <option value="PORSCHE">PORSCHE</option>
                                <option value="RAMBLER">RAMBLER</option>
                                <option value="RENAULT">RENAULT</option>
                                <option value="SAAB">SAAB</option>
                                <option value="SATURN">SATURN</option>
                                <option value="SCION">SCION</option>
                                <option value="SEAT">SEAT</option>
                                <option value="SMART">SMART</option>
                                <option value="SUBARU">SUBARU</option>
                                <option value="SUZUKI">SUZUKI</option>
                                <option value="TOYOTA">TOYOTA</option>
                                <option value="UNIVERSAL">UNIVERSAL</option>
                                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                <option value="VOLVO">VOLVO</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="modelo">
                            <ControlLabel>Modelo</ControlLabel>
                            <FormControl componentClass="select" placeholder="Selecciona Modelo">
                                <option value="">Selecciona Modelo</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="125">125</option>
                                <option value="156">156</option>
                                <option value="200">200</option>
                                <option value="206">206</option>
                                <option value="207">207</option>
                                <option value="208">208</option>
                                <option value="220">220</option>
                                <option value="228">228</option>
                                <option value="300">300</option>
                                <option value="301">301</option>
                                <option value="306">306</option>
                                <option value="307">307</option>
                                <option value="308">308</option>
                                <option value="320">320</option>
                                <option value="323">323</option>
                                <option value="325">325</option>
                                <option value="328">328</option>
                                <option value="330">330</option>
                                <option value="335">335</option>
                                <option value="340">340</option>
                                <option value="357">357</option>
                                <option value="359">359</option>
                                <option value="365">365</option>
                                <option value="367">367</option>
                                <option value="377">377</option>
                                <option value="378">378</option>
                                <option value="379">379</option>
                                <option value="381">381</option>
                                <option value="387">387</option>
                                <option value="405">405</option>
                                <option value="406">406</option>
                                <option value="407">407</option>
                                <option value="420">420</option>
                                <option value="428">428</option>
                                <option value="500">500</option>
                                <option value="508">508</option>
                                <option value="510">510</option>
                                <option value="567">567</option>
                                <option value="610">610</option>
                                <option value="620">620</option>
                                <option value="626">626</option>
                                <option value="710">710</option>
                                <option value="720">720</option>
                                <option value="800">800</option>
                                <option value="929">929</option>
                                <option value="1500">1500</option>
                                <option value="2008">2008</option>
                                <option value="2500">2500</option>
                                <option value="3008">3008</option>
                                <option value="3500">3500</option>
                                <option value="3800">3800</option>
                                <option value="4000">4000</option>
                                <option value="4200">4200</option>
                                <option value="4300">4300</option>
                                <option value="4400">4400</option>
                                <option value="4700">4700</option>
                                <option value="6000">6000</option>
                                <option value="8100">8100</option>
                                <option value="8200">8200</option>
                                <option value="8300">8300</option>
                                <option value="8500">8500</option>
                                <option value="8600">8600</option>
                                <option value="9000">9000</option>
                                <option value="9004">9004</option>
                                <option value="9200">9200</option>
                                <option value="9370">9370</option>
                                <option value="9400">9400</option>
                                <option value="9670">9670</option>
                                <option value="9900">9900</option>
                                <option value="128I">128I</option>
                                <option value="130I">130I</option>
                                <option value="200_C">200 C</option>
                                <option value="200_SX">200 SX</option>
                                <option value="240_SX">240 SX</option>
                                <option value="300_C">300 C</option>
                                <option value="300_M">300 M</option>
                                <option value="300Z">300Z</option>
                                <option value="320I">320I</option>
                                <option value="323I">323I</option>
                                <option value="325I">325I</option>
                                <option value="328I">328I</option>
                                <option value="330I">330I</option>
                                <option value="350Z">350Z</option>
                                <option value="370Z">370Z</option>
                                <option value="4_RUNNER">4 RUNNER</option>
                                <option value="400_SS">400 SS</option>
                                <option value="4300_IHC">4300 IHC</option>
                                <option value="4300LP">4300LP</option>
                                <option value="500L">500L</option>
                                <option value="500X">500X</option>
                                <option value="525I">525I</option>
                                <option value="528I">528I</option>
                                <option value="530I">530I</option>
                                <option value="540I">540I</option>
                                <option value="545I">545I</option>
                                <option value="9-3">9-3</option>
                                <option value="9-5">9-5</option>
                                <option value="9-7">9-7</option>
                                <option value="A-10">A-10</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="A3">A3</option>
                                <option value="A4">A4</option>
                                <option value="A5">A5</option>
                                <option value="A6">A6</option>
                                <option value="A7">A7</option>
                                <option value="A8">A8</option>
                                <option value="ACADIA">ACADIA</option>
                                <option value="ACCENT">ACCENT</option>
                                <option value="ACCORD">ACCORD</option>
                                <option value="ACHIEVA">ACHIEVA</option>
                                <option value="ADVENTURE">ADVENTURE</option>
                                <option value="AERIO">AERIO</option>
                                <option value="AEROSTAR">AEROSTAR</option>
                                <option value="ALBEA">ALBEA</option>
                                <option value="ALERO">ALERO</option>
                                <option value="ALHAMBRA">ALHAMBRA</option>
                                <option value="ALLANTE">ALLANTE</option>
                                <option value="ALLROAD">ALLROAD</option>
                                <option value="ALLURE">ALLURE</option>
                                <option value="ALMERA">ALMERA</option>
                                <option value="ALTEA">ALTEA</option>
                                <option value="ALTIMA">ALTIMA</option>
                                <option value="AMAROK">AMAROK</option>
                                <option value="AMERICAN">AMERICAN</option>
                                <option value="AMIGO">AMIGO</option>
                                <option value="APRIO">APRIO</option>
                                <option value="APV">APV</option>
                                <option value="ARIES">ARIES</option>
                                <option value="ARMADA">ARMADA</option>
                                <option value="ASCENDER">ASCENDER</option>
                                <option value="ASPEN">ASPEN</option>
                                <option value="ASTRA">ASTRA</option>
                                <option value="ASTRO">ASTRO</option>
                                <option value="ASX">ASX</option>
                                <option value="ATITUDE">ATITUDE</option>
                                <option value="ATLANTIC">ATLANTIC</option>
                                <option value="ATOS">ATOS</option>
                                <option value="ATS">ATS</option>
                                <option value="ATTITUDE">ATTITUDE</option>
                                <option value="AURA">AURA</option>
                                <option value="AURORA">AURORA</option>
                                <option value="AVALANCHE">AVALANCHE</option>
                                <option value="AVALON">AVALON</option>
                                <option value="AVANZA">AVANZA</option>
                                <option value="AVENGER">AVENGER</option>
                                <option value="AVEO">AVEO</option>
                                <option value="AVIATOR">AVIATOR</option>
                                <option value="AXIOM">AXIOM</option>
                                <option value="AXXESS">AXXESS</option>
                                <option value="AZERA">AZERA</option>
                                <option value="AZTEK">AZTEK</option>
                                <option value="B2000">B2000</option>
                                <option value="B210">B210</option>
                                <option value="B2200">B2200</option>
                                <option value="B2300">B2300</option>
                                <option value="B2400">B2400</option>
                                <option value="B2500">B2500</option>
                                <option value="B2600">B2600</option>
                                <option value="B3000">B3000</option>
                                <option value="B4000">B4000</option>
                                <option value="BARRACUDA">BARRACUDA</option><option value="BEAT">BEAT</option><option value="BEETLE">BEETLE</option><option value="BELAIR">BELAIR</option><option value="BERETTA">BERETTA</option><option value="BISCAYNE">BISCAYNE</option><option value="BLAZER">BLAZER</option><option value="BOBCAT">BOBCAT</option><option value="BONNEVILLE">BONNEVILLE</option><option value="BORA">BORA</option><option value="BRASILIA">BRASILIA</option><option value="BRAVADA">BRAVADA</option><option value="BRONCO">BRONCO</option><option value="BRONCO_II">BRONCO II</option><option value="BROUGHAM">BROUGHAM</option><option value="BUSINESS">BUSINESS</option><option value="C10">C10</option><option value="C15">C15</option><option value="C1500">C1500</option><option value="C20">C20</option><option value="C2000">C2000</option><option value="C25">C25</option><option value="C2500">C2500</option><option value="C30">C30</option><option value="C320">C320</option><option value="C35">C35</option><option value="C350">C350</option><option value="C3500">C3500</option><option value="C70">C70</option><option value="CABRIO">CABRIO</option><option value="CABRIOLET">CABRIOLET</option><option value="CABSTAR">CABSTAR</option><option value="CADDY">CADDY</option><option value="CALAIS">CALAIS</option><option value="CALIBER">CALIBER</option><option value="CAMARO">CAMARO</option><option value="CAMION">CAMION</option><option value="CAMIONES">CAMIONES</option><option value="CAMRY">CAMRY</option><option value="CANYON">CANYON</option><option value="CAPRICE">CAPRICE</option><option value="CAPTIVA">CAPTIVA</option><option value="CAPTUR">CAPTUR</option><option value="CARAVAN">CARAVAN</option><option value="CARAVELLE">CARAVELLE</option><option value="CARGO_VAN">CARGO VAN</option><option value="CARIBE">CARIBE</option><option value="CARRY">CARRY</option><option value="CASCADIA">CASCADIA</option><option value="CAVALIER">CAVALIER</option><option value="CAYENNE">CAYENNE</option><option value="CELEBRITY">CELEBRITY</option><option value="CELICA">CELICA</option><option value="CENTURY">CENTURY</option><option value="CENTURY_CST120">CENTURY CST120</option><option value="CHALLENGER">CHALLENGER</option><option value="CHARGER">CHARGER</option><option value="CHEROKEE">CHEROKEE</option><option value="CHEVY">CHEVY</option><option value="CHEVY_PICK UP">CHEVY PICK UP</option><option value="CHEVY_VAN">CHEVY VAN</option><option value="CHEYENNE">CHEYENNE</option><option value="CIMARRON">CIMARRON</option><option value="CIRRUS">CIRRUS</option><option value="CITATION">CITATION</option><option value="CITY">CITY</option><option value="CIVIC">CIVIC</option><option value="CJ5">CJ5</option><option value="CJ6">CJ6</option><option value="CJ7">CJ7</option><option value="CK-1500">CK-1500</option><option value="CK-2500">CK-2500</option><option value="CK-3500">CK-3500</option><option value="CL">CL</option><option value="CLASE_A">CLASE A</option><option value="CLASE_B">CLASE B</option><option value="CLASE_C">CLASE C</option><option value="CLASE_E">CLASE E</option><option value="CLASE_G">CLASE G</option><option value="CLASE_M">CLASE M</option><option value="CLASE_R">CLASE R</option><option value="CLASICO">CLASICO</option><option value="CLIO">CLIO</option><option value="CLK">CLK</option><option value="CLS">CLS</option><option value="CLUB_WAGON">CLUB WAGON</option><option value="COBALT">COBALT</option><option value="COLONY_PARK">COLONY PARK</option><option value="COLORADO">COLORADO</option><option value="COLUMBIA">COLUMBIA</option><option value="COMANCHE">COMANCHE</option><option value="COMBI">COMBI</option><option value="COMET">COMET</option><option value="COMMANDER">COMMANDER</option><option value="COMPASS">COMPASS</option><option value="CONCORD">CONCORD</option><option value="CONCORDE">CONCORDE</option><option value="CONCOURS">CONCOURS</option><option value="CONDOR">CONDOR</option><option value="CONTINENTAL">CONTINENTAL</option><option value="CONTOUR">CONTOUR</option><option value="COOPER">COOPER</option><option value="CORDOBA">CORDOBA</option><option value="COROLLA">COROLLA</option><option value="CORONA">CORONA</option><option value="CORONADO">CORONADO</option><option value="CORONET">CORONET</option><option value="CORSA">CORSA</option><option value="CORSAR">CORSAR</option><option value="CORSICA">CORSICA</option><option value="CORVETTE">CORVETTE</option><option value="COUGAR">COUGAR</option><option value="COUNTRY_SQUIRE">COUNTRY SQUIRE</option><option value="COURIER">COURIER</option><option value="CR-V">CR-V</option><option value="CRAFTER">CRAFTER</option><option value="CRESSIDA">CRESSIDA</option><option value="CRETA">CRETA</option><option value="CROSSFIRE">CROSSFIRE</option><option value="CROSSFOX">CROSSFOX</option><option value="CROSSTOUR">CROSSTOUR</option><option value="CROWN_VICTORIA">CROWN VICTORIA</option><option value="CRUZ">CRUZ</option><option value="CRUZE">CRUZE</option><option value="CRX">CRX</option><option value="CSX">CSX</option><option value="CTS">CTS</option><option value="CUBE">CUBE</option><option value="CUSTOM">CUSTOM</option><option value="CUTLASS">CUTLASS</option><option value="CX3">CX3</option><option value="CX5">CX5</option><option value="CX7">CX7</option><option value="CX9">CX9</option><option value="CXS">CXS</option><option value="D100">D100</option><option value="D150">D150</option><option value="D200">D200</option><option value="D21">D21</option><option value="D22">D22</option><option value="D23">D23</option><option value="D250">D250</option><option value="D300">D300</option><option value="D350">D350</option><option value="DAKOTA">DAKOTA</option><option value="DART">DART</option><option value="DART_K">DART K</option><option value="DATSUN">DATSUN</option><option value="DAYTONA">DAYTONA</option><option value="DENALI">DENALI</option><option value="DERBY">DERBY</option><option value="DERBY_VAN">DERBY VAN</option><option value="DEVILLE">DEVILLE</option><option value="DINA">DINA</option><option value="DINASTY">DINASTY</option><option value="DIPLOMAT">DIPLOMAT</option><option value="DTS">DTS</option><option value="DUCATO">DUCATO</option><option value="DUCATO_CARGO VAN">DUCATO CARGO VAN</option><option value="DURANGO">DURANGO</option><option value="DURASTAR">DURASTAR</option><option value="DUSTER">DUSTER</option><option value="DUTRO">DUTRO</option><option value="E-150">E-150</option><option value="E-250">E-250</option><option value="E-320">E-320</option><option value="E-350">E-350</option><option value="E-450">E-450</option><option value="E-550">E-550</option><option value="E-SERIES">E-SERIES</option><option value="EAGLE">EAGLE</option><option value="ECHO">ECHO</option><option value="ECLIPSE">ECLIPSE</option><option value="ECONOLINE">ECONOLINE</option><option value="ECONOLINE_VAN">ECONOLINE VAN</option><option value="ECOSPORT">ECOSPORT</option><option value="EDGE">EDGE</option><option value="EIGHTY_EIGHT">EIGHTY EIGHT</option><option value="EL">EL</option><option value="EL_DORADO">EL DORADO</option><option value="ELANTRA">ELANTRA</option><option value="ELECTRA">ELECTRA</option><option value="ELEMENT">ELEMENT</option><option value="ELF">ELF</option><option value="ENCLAVE">ENCLAVE</option><option value="ENCORE">ENCORE</option><option value="ENDEAVOR">ENDEAVOR</option><option value="ENVOY">ENVOY</option><option value="EOS">EOS</option><option value="EPICA">EPICA</option><option value="EQUATOR">EQUATOR</option><option value="EQUINOX">EQUINOX</option><option value="ERA">ERA</option><option value="ES250">ES250</option><option value="ES300">ES300</option><option value="ES350">ES350</option><option value="ESCALADE">ESCALADE</option><option value="ESCAPE">ESCAPE</option><option value="ESCORT">ESCORT</option><option value="ESCUDO">ESCUDO</option><option value="ESTACAS">ESTACAS</option><option value="EUROCLIO">EUROCLIO</option><option value="EUROPA">EUROPA</option><option value="EUROVAN">EUROVAN</option><option value="EXCURSION">EXCURSION</option><option value="EXEO">EXEO</option><option value="EXPEDITION">EXPEDITION</option><option value="EXPERT">EXPERT</option><option value="EXPLORER">EXPLORER</option><option value="EXPRESS_VAN">EXPRESS VAN</option><option value="F-100">F-100</option><option value="F-150">F-150</option><option value="F-200">F-200</option><option value="F-250">F-250</option><option value="F-350">F-350</option><option value="F-450">F-450</option><option value="F-550">F-550</option><option value="F-750">F-750</option><option value="F-SERIES">F-SERIES</option><option value="F53">F53</option><option value="FAIRLANE">FAIRLANE</option><option value="FAIRMONT">FAIRMONT</option><option value="FALCON">FALCON</option><option value="FAMSA">FAMSA</option><option value="FH12">FH12</option><option value="FH16">FH16</option><option value="FIERO">FIERO</option><option value="FIESTA">FIESTA</option><option value="FIFTH_AVENUE">FIFTH AVENUE</option><option value="FIGO">FIGO</option><option value="FIRE_BIRD">FIRE BIRD</option><option value="FIREFLY">FIREFLY</option><option value="FIRENZA">FIRENZA</option><option value="FIT">FIT</option><option value="FIVE_HUNDRED">FIVE HUNDRED</option><option value="FJ_CRUISER">FJ CRUISER</option><option value="FL">FL</option><option value="FL_120">FL 120</option><option value="FL60">FL60</option><option value="FL70">FL70</option><option value="FL80">FL80</option><option value="FLD">FLD</option><option value="FLD120">FLD120</option><option value="FLEETWOOD">FLEETWOOD</option><option value="FLEX">FLEX</option><option value="FLUENCE">FLUENCE</option><option value="FM">FM</option><option value="FM12">FM12</option><option value="FOCUS">FOCUS</option><option value="FORENZA">FORENZA</option><option value="FORESTER">FORESTER</option><option value="FORFOUR">FORFOUR</option><option value="FORTE">FORTE</option><option value="FORTWO">FORTWO</option><option value="FOX">FOX</option><option value="FREELANDER">FREELANDER</option><option value="FREESTAR">FREESTAR</option><option value="FREESTYLE">FREESTYLE</option><option value="FRONTIER">FRONTIER</option><option value="FUSION">FUSION</option><option value="FX35">FX35</option><option value="FX4">FX4</option><option value="G10">G10</option><option value="G2">G2</option><option value="G20">G20</option><option value="G3">G3</option><option value="G30">G30</option><option value="G35">G35</option><option value="G37">G37</option><option value="G4">G4</option><option value="G5">G5</option><option value="G6">G6</option><option value="GALANT">GALANT</option><option value="GALAXIE">GALAXIE</option><option value="GEO_PRIZM">GEO PRIZM</option><option value="GEO_TRACKER">GEO TRACKER</option><option value="GHIA">GHIA</option><option value="GIULIETTA">GIULIETTA</option><option value="GLK">GLK</option><option value="GOL">GOL</option><option value="GOLF">GOLF</option><option value="GR2000">GR2000</option><option value="GRANADA">GRANADA</option><option value="GRAND_AM">GRAND AM</option><option value="GRAND_CARAVAN">GRAND CARAVAN</option><option value="GRAND_CHEROKEE">GRAND CHEROKEE</option><option value="GRAND_I10">GRAND I10</option><option value="GRAND_MARQUIS">GRAND MARQUIS</option><option value="GRAND_PRIX">GRAND PRIX</option><option value="GRAND_RAID">GRAND RAID</option><option value="GRAND_TORINO">GRAND TORINO</option><option value="GRAND_VITARA">GRAND VITARA</option><option value="GRAND_VOYAGER">GRAND VOYAGER</option><option value="GRAND_WAGONEER">GRAND WAGONEER</option><option value="GRANDE_PUNTO">GRANDE PUNTO</option><option value="GRANDIS">GRANDIS</option><option value="GRANITE">GRANITE</option><option value="GTI">GTI</option><option value="GTO">GTO</option><option value="GTX">GTX</option><option value="GUAYIN">GUAYIN</option><option value="GX470">GX470</option><option value="H_SERIES">H SERIES</option><option value="H-100">H-100</option><option value="H2">H2</option><option value="H3">H3</option><option value="H3T">H3T</option><option value="HARDBODY">HARDBODY</option><option value="HARVESTER">HARVESTER</option><option value="HEAVY_DUTY">HEAVY DUTY</option><option value="HHR">HHR</option><option value="HIACE">HIACE</option><option value="HIGHLANDER">HIGHLANDER</option><option value="HIKARI">HIKARI</option><option value="HILUX">HILUX</option><option value="HNR">HNR</option><option value="HOMBRE">HOMBRE</option><option value="HR-V">HR-V</option><option value="I_30">I 30</option><option value="I_35">I 35</option><option value="I-10">I-10</option><option value="I-290">I-290</option><option value="I-370">I-370</option><option value="I10">I10</option><option value="I30">I30</option><option value="IBIZA">IBIZA</option><option value="ICHI_VAN">ICHI VAN</option><option value="IDEA">IDEA</option><option value="IDEA_ADVENTURE">IDEA ADVENTURE</option><option value="IKON">IKON</option><option value="ILX">ILX</option><option value="IMPALA">IMPALA</option><option value="IMPERIAL">IMPERIAL</option><option value="IMPREZA">IMPREZA</option><option value="INTEGRA">INTEGRA</option><option value="INTERCEPTOR">INTERCEPTOR</option><option value="INTREPID">INTREPID</option><option value="INTRIGUE">INTRIGUE</option><option value="ION">ION</option><option value="IX35">IX35</option><option value="IX38">IX38</option><option value="JETTA">JETTA</option><option value="JIMMY">JIMMY</option><option value="JOURNEY">JOURNEY</option><option value="JUKE">JUKE</option><option value="JX35">JX35</option><option value="K10">K10</option><option value="K1500">K1500</option><option value="K2500">K2500</option><option value="K294-411">K294-411</option><option value="K30">K30</option><option value="K3500">K3500</option><option value="KA">KA</option><option value="KANGOO">KANGOO</option><option value="KICKS">KICKS</option><option value="KIZASHI">KIZASHI</option><option value="KODIAK">KODIAK</option><option value="KOLEOS">KOLEOS</option><option value="L200">L200</option><option value="LACROSSE">LACROSSE</option><option value="LAGUNA">LAGUNA</option><option value="LANCER">LANCER</option><option value="LAND_CRUISER">LAND CRUISER</option><option value="LAREDO">LAREDO</option><option value="LASER">LASER</option><option value="LEAF">LEAF</option><option value="LEBARON">LEBARON</option><option value="LEGACY">LEGACY</option><option value="LEMANS">LEMANS</option><option value="LEON">LEON</option><option value="LESABRE">LESABRE</option><option value="LHS">LHS</option><option value="LIBERTY">LIBERTY</option><option value="LINEA">LINEA</option><option value="LOBO">LOBO</option><option value="LOGAN">LOGAN</option><option value="LS">LS</option><option value="LTD">LTD</option><option value="LUCERNE">LUCERNE</option><option value="LUCINO">LUCINO</option><option value="LUMINA">LUMINA</option><option value="LUPO">LUPO</option><option value="LUV">LUV</option><option value="M2">M2</option><option value="M2_SERIES">M2 SERIES</option><option value="M3">M3</option><option value="M4">M4</option><option value="MACAN">MACAN</option><option value="MAGNUM">MAGNUM</option><option value="MALIBU">MALIBU</option><option value="MANAGER">MANAGER</option><option value="MARAUDER">MARAUDER</option><option value="MARCH">MARCH</option><option value="MARINER">MARINER</option><option value="MARK">MARK</option><option value="MARK_LT">MARK LT</option><option value="MATIZ">MATIZ</option><option value="MATRIX">MATRIX</option><option value="MAVERICK">MAVERICK</option><option value="MAXIMA">MAXIMA</option><option value="MAXX">MAXX</option><option value="MDX">MDX</option><option value="MEDIUM_DUTY">MEDIUM DUTY</option><option value="MEGANE">MEGANE</option><option value="MERCURY">MERCURY</option><option value="MERIVA">MERIVA</option><option value="METRO">METRO</option><option value="MIATA">MIATA</option><option value="MICRA">MICRA</option><option value="MICROBUS">MICROBUS</option><option value="MILAN">MILAN</option><option value="MINI_VAN">MINI VAN</option><option value="MIRAGE">MIRAGE</option><option value="MITO">MITO</option><option value="MKC">MKC</option><option value="MKS">MKS</option><option value="MKT">MKT</option><option value="MKX">MKX</option><option value="MKZ">MKZ</option><option value="ML">ML</option><option value="ML320">ML320</option><option value="ML430">ML430</option><option value="ML500">ML500</option><option value="MOBI">MOBI</option><option value="MONACO">MONACO</option><option value="MONARCH">MONARCH</option><option value="MONDEO">MONDEO</option><option value="MONTANA">MONTANA</option><option value="MONTECARLO">MONTECARLO</option><option value="MONTEGO">MONTEGO</option><option value="MONTEREY">MONTEREY</option><option value="MONTERO">MONTERO</option><option value="MONZA">MONZA</option><option value="MOUNTAINEER">MOUNTAINEER</option><option value="MPV">MPV</option><option value="MURANO">MURANO</option><option value="MUSTANG">MUSTANG</option><option value="MX3">MX3</option><option value="MX5">MX5</option><option value="MX6">MX6</option><option value="MYSTIQUE">MYSTIQUE</option><option value="NAVAJO">NAVAJO</option><option value="NAVIGATOR">NAVIGATOR</option><option value="NAVISTAR">NAVISTAR</option><option value="NEON">NEON</option><option value="NEW_RAM">NEW RAM</option><option value="NEW_YORKER">NEW YORKER</option><option value="NINETY_EIGHT">NINETY EIGHT</option><option value="NITRO">NITRO</option><option value="NKR">NKR</option><option value="NOTE">NOTE</option><option value="NOVA">NOVA</option><option value="NP300">NP300</option><option value="NPR">NPR</option><option value="NUBIRA">NUBIRA</option><option value="NV2500">NV2500</option><option value="NX">NX</option><option value="OASIS">OASIS</option><option value="ODYSSEY">ODYSSEY</option><option value="OMEGA">OMEGA</option><option value="OPTIMA">OPTIMA</option><option value="OPTRA">OPTRA</option><option value="ORLANDO">ORLANDO</option><option value="OUTBACK">OUTBACK</option><option value="OUTLANDER">OUTLANDER</option><option value="OUTLOOK">OUTLOOK</option><option value="P10">P10</option><option value="P30">P30</option><option value="PACIFICA">PACIFICA</option><option value="PALIO">PALIO</option><option value="PALIO_ADVENTURE">PALIO ADVENTURE</option><option value="PANDA">PANDA</option><option value="PANEL">PANEL</option><option value="PARK_AVENUE">PARK AVENUE</option><option value="PARTNER">PARTNER</option><option value="PASEO">PASEO</option><option value="PASSAT">PASSAT</option><option value="PASSAT_CC">PASSAT CC</option><option value="PASSPORT">PASSPORT</option><option value="PATHFINDER">PATHFINDER</option><option value="PATRIOT">PATRIOT</option><option value="PERSUIT">PERSUIT</option><option value="PETERBILT">PETERBILT</option><option value="PHANTOM">PHANTOM</option><option value="PICK_UP">PICK UP</option><option value="PICK_UP 1500">PICK UP 1500</option><option value="PICK_UP 2500">PICK UP 2500</option><option value="PICK_UP 3500">PICK UP 3500</option><option value="PILOT">PILOT</option><option value="PLATINA">PLATINA</option><option value="PLYMOUTH">PLYMOUTH</option><option value="POINTER">POINTER</option><option value="POINTER_PICK UP">POINTER PICK UP</option><option value="POLO">POLO</option><option value="PRELUDE">PRELUDE</option><option value="PRERUNNER">PRERUNNER</option><option value="PREVIA">PREVIA</option><option value="PRIUS">PRIUS</option><option value="PRIZM">PRIZM</option><option value="PROBE">PROBE</option><option value="PROSTAR">PROSTAR</option><option value="PROSTAR_LA617">PROSTAR LA617</option><option value="PROTEGE">PROTEGE</option><option value="PT_CRUISER">PT CRUISER</option><option value="PU">PU</option><option value="PULSAR">PULSAR</option><option value="Q2">Q2</option><option value="Q3">Q3</option><option value="Q45">Q45</option><option value="Q5">Q5</option><option value="Q50">Q50</option><option value="Q7">Q7</option><option value="Q8">Q8</option><option value="QUATTRO">QUATTRO</option><option value="QUEST">QUEST</option><option value="QX4">QX4</option><option value="QX56">QX56</option><option value="QX60">QX60</option><option value="R1500">R1500</option><option value="R2500">R2500</option><option value="R34">R34</option><option value="R3500">R3500</option><option value="R4000">R4000</option><option value="R4500">R4500</option><option value="R5500">R5500</option><option value="RABBIT">RABBIT</option><option value="RAIDER">RAIDER</option><option value="RAINIER">RAINIER</option><option value="RAM">RAM</option><option value="RAM_1500">RAM 1500</option><option value="RAM_2500">RAM 2500</option><option value="RAM_3500">RAM 3500</option><option value="RAM_4000">RAM 4000</option><option value="RAM_50">RAM 50</option><option value="RAM_700">RAM 700</option><option value="RAM_CHARGER">RAM CHARGER</option><option value="RAM_PRO MASTER">RAM PRO MASTER</option><option value="RAM_VAN">RAM VAN</option><option value="RAMBLER">RAMBLER</option><option value="RANGE_ROVER">RANGE ROVER</option><option value="RANGER">RANGER</option><option value="RAPTOR">RAPTOR</option><option value="RAV_4">RAV 4</option><option value="RDX">RDX</option><option value="REATTA">REATTA</option><option value="REGAL">REGAL</option><option value="REGENCY">REGENCY</option><option value="RELAY">RELAY</option><option value="RENDEZVOUS">RENDEZVOUS</option><option value="RENEGADE">RENEGADE</option><option value="RENO">RENO</option><option value="RIDGELINE">RIDGELINE</option><option value="RIO">RIO</option><option value="RIVIERA">RIVIERA</option><option value="RL">RL</option><option value="ROADMASTER">ROADMASTER</option><option value="RODEO">RODEO</option><option value="ROGUE">ROGUE</option><option value="ROUTAN">ROUTAN</option><option value="RS4">RS4</option><option value="RS6">RS6</option><option value="RSX">RSX</option><option value="RUBICON">RUBICON</option><option value="RVR">RVR</option><option value="RX350">RX350</option><option value="RX450">RX450</option><option value="S-10">S-10</option><option value="S-15">S-15</option><option value="S-600">S-600</option><option value="S-CROSS">S-CROSS</option><option value="S-TYPE">S-TYPE</option><option value="S15">S15</option><option value="S3">S3</option><option value="S4">S4</option><option value="S40">S40</option><option value="S5">S5</option><option value="S6">S6</option><option value="S60">S60</option><option value="S70">S70</option><option value="S8">S8</option><option value="S80">S80</option><option value="SABLE">SABLE</option><option value="SAFARI">SAFARI</option><option value="SAFRANE">SAFRANE</option><option value="SAKURA">SAKURA</option><option value="SAMURAI">SAMURAI</option><option value="SANDERO">SANDERO</option><option value="SANTA_FE">SANTA FE</option><option value="SATURN">SATURN</option><option value="SATURN_VUE">SATURN VUE</option><option value="SAVANA">SAVANA</option><option value="SAVEIRO">SAVEIRO</option><option value="SCALA">SCALA</option><option value="SCALADE">SCALADE</option><option value="SCANIA">SCANIA</option><option value="SCENIC">SCENIC</option><option value="SCION">SCION</option><option value="SCIROCCO">SCIROCCO</option><option value="SCRAMBLER">SCRAMBLER</option><option value="SEBRING">SEBRING</option><option value="SEDAN">SEDAN</option><option value="SENTRA">SENTRA</option><option value="SEPHIA">SEPHIA</option><option value="SEQUOIA">SEQUOIA</option><option value="SERIE_1">SERIE 1</option><option value="SERIE_2">SERIE 2</option><option value="SERIE_3">SERIE 3</option><option value="SERIE_4">SERIE 4</option><option value="SERIE_4000">SERIE 4000</option><option value="SERIE_5">SERIE 5</option><option value="SERIE_7">SERIE 7</option><option value="SERIE_D">SERIE D</option><option value="SERIE_L">SERIE L</option><option value="SERIE_M">SERIE M</option><option value="SERIE_M5">SERIE M5</option><option value="SERIE_S">SERIE S</option><option value="SERIE_T">SERIE T</option><option value="SEVILLE">SEVILLE</option><option value="SHADOW">SHADOW</option><option value="SHARAN">SHARAN</option><option value="SIDEKICK">SIDEKICK</option><option value="SIENNA">SIENNA</option><option value="SIERRA">SIERRA</option><option value="SIERRA_1500">SIERRA 1500</option><option value="SILHOUETTE">SILHOUETTE</option><option value="SILVERADO">SILVERADO</option><option value="SKYHAWK">SKYHAWK</option><option value="SKYLARK">SKYLARK</option><option value="SLK">SLK</option><option value="SOLARA">SOLARA</option><option value="SOLSTICE">SOLSTICE</option><option value="SOMERSET">SOMERSET</option><option value="SONATA">SONATA</option><option value="SONIC">SONIC</option><option value="SONOMA">SONOMA</option><option value="SONORA">SONORA</option><option value="SORENTO">SORENTO</option><option value="SOUL">SOUL</option><option value="SPACE_STAR">SPACE STAR</option><option value="SPARK">SPARK</option><option value="SPIRIT">SPIRIT</option><option value="SPORT_TRAC">SPORT TRAC</option><option value="SPORTAGE">SPORTAGE</option><option value="SPORTVAN">SPORTVAN</option><option value="SPORTWAGEN">SPORTWAGEN</option><option value="SPRINT">SPRINT</option><option value="SPRINTER">SPRINTER</option><option value="SQ5">SQ5</option><option value="SRX">SRX</option><option value="STANZA">STANZA</option><option value="STEPWAY">STEPWAY</option><option value="STRADA">STRADA</option><option value="STRATUS">STRATUS</option><option value="STS">STS</option><option value="SUBURBAN">SUBURBAN</option><option value="SUMMIT">SUMMIT</option><option value="SUNBIRD">SUNBIRD</option><option value="SUNDANCE">SUNDANCE</option><option value="SUNFIRE">SUNFIRE</option><option value="SUNRUNNER">SUNRUNNER</option><option value="SUPER_DUTY">SUPER DUTY</option><option value="SUPER_V8">SUPER V8</option><option value="SUPRA">SUPRA</option><option value="SWIFT">SWIFT</option><option value="SWING">SWING</option><option value="SX">SX</option><option value="SX4">SX4</option><option value="SYCLONE">SYCLONE</option><option value="T100">T100</option><option value="T170">T170</option><option value="T2000">T2000</option><option value="T270">T270</option><option value="T300">T300</option><option value="T370">T370</option><option value="T387">T387</option><option value="T400">T400</option><option value="T600">T600</option><option value="T660">T660</option><option value="T800">T800</option><option value="T880">T880</option><option value="T900">T900</option><option value="TACOMA">TACOMA</option><option value="TAHOE">TAHOE</option><option value="TALON">TALON</option><option value="TAURUS">TAURUS</option><option value="TC_04">TC 04</option><option value="TEMPEST">TEMPEST</option><option value="TEMPO">TEMPO</option><option value="TERCEL">TERCEL</option><option value="TERRAIN">TERRAIN</option><option value="TERRAZA">TERRAZA</option><option value="THUNDERBIRD">THUNDERBIRD</option><option value="TIBURON">TIBURON</option><option value="TIGRA">TIGRA</option><option value="TIGUAN">TIGUAN</option><option value="TIIDA">TIIDA</option><option value="TITAN">TITAN</option><option value="TL">TL</option><option value="TLX">TLX</option><option value="TOLEDO">TOLEDO</option><option value="TOPAZ">TOPAZ</option><option value="TORNADO">TORNADO</option><option value="TORRENT">TORRENT</option><option value="TOUAREG">TOUAREG</option><option value="TOWN_CAR">TOWN CAR</option><option value="TOWN_COUNTRY">TOWN COUNTRY</option><option value="TRACER">TRACER</option><option value="TRACKER">TRACKER</option><option value="TRAFIC">TRAFIC</option><option value="TRAIL_BLAZER">TRAIL BLAZER</option><option value="TRANS_AM">TRANS AM</option><option value="TRANS_SPORT">TRANS SPORT</option><option value="TRANSIT">TRANSIT</option><option value="TRANSPORT">TRANSPORT</option><option value="TRANSPORTER">TRANSPORTER</option><option value="TRANSTAR">TRANSTAR</option><option value="TRAVERSE">TRAVERSE</option><option value="TRAX">TRAX</option><option value="TRIBUTE">TRIBUTE</option><option value="TROOPER">TROOPER</option><option value="TSUBAME">TSUBAME</option><option value="TSURU">TSURU</option><option value="TSX">TSX</option><option value="TT">TT</option><option value="TUCSON">TUCSON</option><option value="TUNDRA">TUNDRA</option><option value="TYPHOON">TYPHOON</option><option value="UNIVERSAL">UNIVERSAL</option><option value="UNO">UNO</option><option value="UP">UP</option><option value="UPLANDER">UPLANDER</option><option value="URVAN">URVAN</option><option value="V40">V40</option><option value="V50">V50</option><option value="V70">V70</option><option value="VALIANT">VALIANT</option><option value="VAN">VAN</option><option value="VANDEN">VANDEN</option><option value="VARIOS">VARIOS</option><option value="VECTRA">VECTRA</option><option value="VENTO">VENTO</option><option value="VENTURE">VENTURE</option><option value="VERANO">VERANO</option><option value="VERNA">VERNA</option><option value="VERSA">VERSA</option><option value="VHD">VHD</option><option value="VIANO">VIANO</option><option value="VIBE">VIBE</option><option value="VILLAGER">VILLAGER</option><option value="VIOS">VIOS</option><option value="VISION">VISION</option><option value="VITARA">VITARA</option><option value="VITO">VITO</option><option value="VN">VN</option><option value="VNL">VNL</option><option value="VNL_3RA GEN">VNL 3RA GEN</option><option value="VNM">VNM</option><option value="VNR">VNR</option><option value="VOLARE">VOLARE</option><option value="VOLT">VOLT</option><option value="VOYAGER">VOYAGER</option><option value="VT">VT</option><option value="VUE">VUE</option><option value="W350">W350</option><option value="W900">W900</option><option value="WAGON">WAGON</option><option value="WAGONEER">WAGONEER</option><option value="WIA">WIA</option><option value="WINDSTAR">WINDSTAR</option><option value="WRANGLER">WRANGLER</option><option value="WRX">WRX</option><option value="X-TERRA">X-TERRA</option><option value="X-TRAIL">X-TRAIL</option><option value="X-TYPE">X-TYPE</option><option value="X1">X1</option><option value="X3">X3</option><option value="X4">X4</option><option value="X5">X5</option><option value="X6">X6</option><option value="X90">X90</option><option value="XC60">XC60</option><option value="XC70">XC70</option><option value="XC90">XC90</option><option value="XD">XD</option><option value="XL7">XL7</option><option value="XLR">XLR</option><option value="XS">XS</option><option value="YARIS">YARIS</option><option value="YUKON">YUKON</option><option value="Z28">Z28</option><option value="Z3">Z3</option><option value="Z4">Z4</option><option value="ZAFIRA">ZAFIRA</option><option value="ZDX">ZDX</option><option value="ZEPHYR">ZEPHYR</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="plano">
                            <ControlLabel>Plano</ControlLabel>
                            <FormControl componentClass="select" placeholder="Selecciona Plano">
                                <option value="">Selecciona Plano</option>
                                <option value="DEL/IZQ">DEL/IZQ</option>
                                <option value="DEL/DER">DEL/DER</option>
                                <option value="TRA/IZQ">TRA/IZQ</option>
                                <option value="TRA/DER">TRA/DER</option>
                                <option value="OTRO">OTRO</option>
                                <option value="UNICA">ÚNICA</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="color">
                            <ControlLabel>Color</ControlLabel>
                            <FormControl componentClass="select" placeholder="Selecciona Color">
                                <option value="">Selecciona Color</option>
                                <option value="BLANCO">BLANCO</option>
                                <option value="NEGRO">NEGRO</option>
                                <option value="PLATA">PLATA</option>
                                <option value="AZUL">AZUL</option>
                                <option value="VERDE">VERDE</option>
                                <option value="ORO">ORO</option>
                                <option value="ROJO">ROJO</option>
                                <option value="GRIS OXFORD">GRIS OXFORD</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="almacen">
                            <ControlLabel>Almacen</ControlLabel>
                            <FormControl componentClass="select" placeholder="Selecciona Almacen">
                                <option value="">Selecciona Almacen</option>
                                <option value="ALM1">ALM1</option>
                                <option value="BODEGA">BODEGA</option>
                            </FormControl>
                        </FormGroup>

                        <Button bsStyle="primary" onClick={this.handleGuardaAutoparte}>Guardar</Button>
                        <Button bsStyle="primary" onClick={this.handleBuscarAutopartes}>Buscar</Button>
                    </form>
                </Panel.Body>
            </Panel>
        </div>
    )};
}

export default AgregaAutoparte;