import React, {Component} from 'react';
import { Navbar, FormControl, ControlLabel, FormGroup, Button, Grid, Row, Col, Alert, Panel, ButtonGroup } from 'react-bootstrap';
import DetalleAutoparte from './DetalleAutopartes/index';
import firebase from '../../FirestoreConfig';
import $ from 'jquery';

import './styles.css';

class BuscaAutopartes extends Component {

    constructor(usuario){
        super(usuario);
        this.state = {
            autopartes: [],
            estatusError: 99,
            modelos: [],
            usuario
        };
    } 

    filtra = (snapshot) => {

    }

    handleCargaModelos = () => {
        const marca = document.getElementById("marca").value;

        $("#modelo").empty();
        var lista = document.getElementById("modelo");
        var op4 = new Option("Selecciona Producto",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        db.collection(marca).get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["modelos"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    handleCargaProductos = () => {

        $("#pieza").empty();
        var lista = document.getElementById("pieza");
        var op4 = new Option("Selecciona Modelo",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        
        db.collection("producto").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["productos"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    handleCargaLados = () => {

        $("#plano").empty();
        var lista = document.getElementById("plano");
        var op4 = new Option("Selecciona Lado",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        db.collection("lado").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["lados"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    handleCargaMarcas = () => {

        $("#marca").empty();
        var lista = document.getElementById("marca");
        var op4 = new Option("Selecciona Marca",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        db.collection("marca").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["marcas"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    handleCargaAlmacenes = () => {

        $("#almacen").empty();
        var lista = document.getElementById("almacen");
        var op4 = new Option("Selecciona Bodega",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        db.collection("almacen").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["almacenes"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    handleCargaColores = () => {

        $("#color").empty();
        var lista = document.getElementById("color");
        var op4 = new Option("Selecciona Color",""); 
	    lista.appendChild(op4); 

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        db.collection("color").get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                //console.log(doc.id, "==>", doc.data())
                var modelosarray = doc.data()["colores"];
                
                //this.setState({modelos: modelosarray});
                //var lista = document.getElementById("modelo");
                for(var x=0; x<modelosarray.length;x++){
                    //options = options + "<option value='"+modelosarray[x]+"'>"+modelosarray[x]+"</option>";
                    var op2 = new Option(modelosarray[x],modelosarray[x]); 
	                lista.appendChild(op2); 
                }
            });
        });
    }

    cargaModelos = () => {
    }

    handleBuscarAutopartes = () => {
        //var datoBuscado = $("#txtBuscar").val();
        var marca = $("#marca").val();
        var modelo = $("#modelo").val();
        var plano = $("#plano").val();
        var color = $("#color").val();
        var almacen = $("#almacen").val();
        var pieza = $("#pieza").val();
        //const cvePieza = $("#cvePieza").val();
        var ano = $("#ano").val();

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        var piezasRef = db.collection('piezas');
        var filtro = [];
        //console.log("Buscar: "+datoBuscado);

        if(pieza !== null && pieza !== "" && pieza !== undefined){
            console.log("BUSCARÉ Pieza: "+pieza);
            filtro.push(['pieza',`${pieza}`]);
            /*piezasRef.where('pieza','==',`${pieza}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        } 
        if(ano !== null && ano !== "" && ano !== undefined){
            console.log("BUSCARÉ AÑO: "+ano);
            filtro.push(['ano',`${ano}`]);
            /*piezasRef.where('ano','==',`${ano}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        if(marca !== null && marca !== "" && marca !== undefined){   
            console.log("BUSCARÉ MARCA: "+marca);
            filtro.push(['marca',`${marca}`])
            /*piezasRef.where('marca','==',`${marca}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        if(modelo !== null && modelo !== "" && modelo !== undefined){
            console.log("BUSCARÉ MODELO: "+modelo);
            filtro.push(['modelo',`${modelo}`])
            /*piezasRef.where('modelo','==',`${modelo}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        if(color !== null && color !== "" && color !== undefined){
            console.log("BUSCARÉ COLOR: "+color);
            filtro.push(['color',`${color}`])
            /*piezasRef.where('color','==',`${color}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        if(plano !== null && plano !== "" && plano !== undefined){
            console.log("BUSCARÉ PLANO: "+plano);
            filtro.push(['plano',`${plano}`])
            /*piezasRef.where('plano','==',`${plano}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        if(almacen !== null && almacen !== "" && almacen !== undefined){
            console.log("BUSCARÉ ALMACEN: "+almacen);
            filtro.push(['almacen',`${almacen}`])
            /*piezasRef.where('almacen','==',`${almacen}`).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
            });*/
        }
        var indiceFiltro = (filtro.length);
        
        if(indiceFiltro === 1 ){
            piezasRef.where(filtro[0][0],'==',filtro[0][1]).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(filtro[0][1]);
            });    
        }
        if(indiceFiltro === 2 ){
            piezasRef.where(filtro[0][0],'==',filtro[0][1]).where(filtro[1][0],'==',filtro[1][1]).where('estatus','==','POR VENDER').get().then((snapshot) => {
                this.setState({ autopartes: snapshot });
                this.setState({ estatusError: 0 });
                console.log(snapshot);
            });    
        }
        if(indiceFiltro === 3 ){
            piezasRef.where(filtro[0][0],'==',filtro[0][1]).where(filtro[1][0],'==',filtro[1][1]).where(filtro[2][0],'==',filtro[2][1]).where('estatus','==','POR VENDER').get().then((snapshot) => {
                    this.setState({ autopartes: snapshot });
                    this.setState({ estatusError: 0 });
                    console.log(filtro);
                });    
        }
        if(indiceFiltro === 4 ){
            piezasRef
                .where(filtro[0][0],'==',filtro[0][1])
                .where(filtro[1][0],'==',filtro[1][1])
                .where(filtro[2][0],'==',filtro[2][1])
                .where(filtro[3][0],'==',filtro[3][1])
                .where('estatus','==','POR VENDER').get().then((snapshot) => {
                    this.setState({ autopartes: snapshot });
                    this.setState({ estatusError: 0 });
                    console.log(filtro[1][1]);
                });    
        }
        if(indiceFiltro === 5 ){
            piezasRef
                .where(filtro[0][0],'==',filtro[0][1])
                .where(filtro[1][0],'==',filtro[1][1])
                .where(filtro[2][0],'==',filtro[2][1])
                .where(filtro[3][0],'==',filtro[3][1])
                .where(filtro[4][0],'==',filtro[4][1])
                .where('estatus','==','POR VENDER').get().then((snapshot) => {
                    this.setState({ autopartes: snapshot });
                    this.setState({ estatusError: 0 });
                    console.log(filtro[1][1]);
                });    
        } 
        if(indiceFiltro === 6 ){
            piezasRef
                .where(filtro[0][0],'==',filtro[0][1])
                .where(filtro[1][0],'==',filtro[1][1])
                .where(filtro[2][0],'==',filtro[2][1])
                .where(filtro[3][0],'==',filtro[3][1])
                .where(filtro[4][0],'==',filtro[4][1])
                .where(filtro[5][0],'==',filtro[5][1])
                .where('estatus','==','POR VENDER').get().then((snapshot) => {
                    this.setState({ autopartes: snapshot });
                    this.setState({ estatusError: 0 });
                    console.log(filtro[1][1]);
                });    
        } 
        if(indiceFiltro === 7 ){
            piezasRef
                .where(filtro[0][0],'==',filtro[0][1])
                .where(filtro[1][0],'==',filtro[1][1])
                .where(filtro[2][0],'==',filtro[2][1])
                .where(filtro[3][0],'==',filtro[3][1])
                .where(filtro[4][0],'==',filtro[4][1])
                .where(filtro[5][0],'==',filtro[5][1])
                .where(filtro[6][0],'==',filtro[6][1])
                .where('estatus','==','POR VENDER').get().then((snapshot) => {
                    this.setState({ autopartes: snapshot });
                    this.setState({ estatusError: 0 });
                    console.log(snapshot);
                });    
        } 
        if((pieza !== null && pieza !== "" && pieza !== undefined) || 
           (modelo !== null && modelo !== "" && modelo !== undefined) ||
           (ano !== null && ano !== "" && ano !== undefined) ||
           (marca !== null && marca !== "" && marca !== undefined) ||
           (modelo !== null && modelo !== "" && modelo !== undefined) ||
           (color !== null && color !== "" && color !== undefined) ||
           (plano !== null && plano !== "" && plano !== undefined) ||
           (almacen !== null && almacen !== "" && almacen !== undefined)){
            
                pieza = "";
                modelo = "";
                ano = "";
                marca = "";
                modelo = "";
                color = "";
                plano = "";
                almacen = "";
                document.getElementById("pieza").value = "";
                document.getElementById("marca").value = "";
                document.getElementById("modelo").value = "";
                $("#modelo").empty();
                var lista = document.getElementById("modelo");
                var op2 = new Option("Selecciona Modelo",""); 
	            lista.appendChild(op2); 
                document.getElementById("color").value = "";
                document.getElementById("almacen").value = "";
                document.getElementById("plano").value = "";
                document.getElementById("cvePieza").value = "";
                document.getElementById("ano").value = "";
        }
        else {
            this.setState({ estatusError: 2 });
        }
    }

    agregaAutoparte = data => {
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        console.log(this.props.usuario);
        
        const autoRef = db.collection("piezas").add({
            cvePieza: data.cvePieza,
            almacen: data.almacen,
            ano: data.ano,
            color: data.color,
            modelo: data.modelo,
            marca: data.marca,
            plano: data.plano, 
            pieza: data.pieza,
            estatus: "POR VENDER",
            usuario: this.props.usuario
        });  
        data = null;
        console.log(autoRef);
        document.getElementById("pieza").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        $("#modelo").empty();
        var lista = document.getElementById("modelo");
        var op2 = new Option("Selecciona Modelo",""); 
	    lista.appendChild(op2); 
        document.getElementById("color").value = "";
        document.getElementById("almacen").value = "";
        document.getElementById("plano").value = "";
        document.getElementById("cvePieza").value = "";
        document.getElementById("ano").value = "";
      };

    handleGuardaAutoparte = () => {
        const pieza = document.getElementById("pieza").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const color = document.getElementById("color").value;
        const almacen = document.getElementById("almacen").value;
        const plano = document.getElementById("plano").value;
        const cvePieza = document.getElementById("cvePieza").value;
        const ano = document.getElementById("ano").value;

        const autoparteAdd = {
            cvePieza: cvePieza,
            pieza: pieza,
            ano: ano,
            marca: marca,
            modelo: modelo,
            color: color,
            almacen: almacen,
            plano: plano
        };
        console.log(autoparteAdd);
        if(pieza !== "" && marca !== "" && modelo !== "" && color !== "" && almacen !== "" && plano !== "" && cvePieza !== "" && ano !== "" ){
            this.setState({estatusError: 5});
            this.agregaAutoparte(autoparteAdd);
        }
        else{
            this.setState({estatusError: 4});
            /*document.getElementById("pieza").value = "";
            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("color").value = "";
            document.getElementById("almacen").value = "";
            document.getElementById("plano").value = "";
            document.getElementById("cvePieza").value = "";
            document.getElementById("ano").value = "";*/
        }
    }

    //Se ejecuta una única vez en el componente después de construirse y renderizarse
    componentWillMount() {
        //console.log('componentWillMount');
        
    }

    componentDidMount() {
        //console.log('componentDidMount');
        this.handleCargaProductos();
        this.handleCargaColores();
        this.handleCargaAlmacenes();
        this.handleCargaLados();
        this.handleCargaMarcas();
    }
    
    componentWillUpdate(nextProps, nextState) {
        //console.log('componentWillUpdate');
    }
    
    componentDidUpdate(prevProps, prevState) {
        //console.log('componentDidUpdate');
    }
    
    
    render = () => {
        //console.log('Render');
        return(
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="./">Autopartes</a>
                        </Navbar.Brand>
                        
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            {
                                this.state.estatusError===2 ? 
                                        <Alert bsStyle="danger">ERROR!! No llenaste el campo de búsqueda</Alert> 
                                    : 
                                        this.state.estatusError===1 ? 
                                            <Alert bsStyle="warning">ERROR!! La búsqueda no arroja resultados</Alert> 
                                        :  
                                            this.state.estatusError === 0 ?
                                                <DetalleAutoparte data={this.state.autopartes} urlImg="http://moucha-net.com/img/Logo_big.png" usuario={this.state.usuario}></DetalleAutoparte>
                                            : 
                                                null               
                            }
                            <ButtonGroup vertical block>
                                                <Button bsSize="large" bsStyle="warning" onClick={this.handleBuscarAutopartes}>Buscar</Button>
                                            </ButtonGroup>
                        </Col>
                        <Col xs={12} md={6}>
                        <div className='agregaAutoparte'>
                                {
                                    this.state.estatusError===4 ? 
                                        <Alert bsStyle="danger">ERROR!! No llenaste todos los campos a Guardar</Alert> 
                                    : this.state.estatusError===5 ? 
                                        <Alert bsStyle="success">Se guardo tu Pieza</Alert>
                                    :
                                        null
                                    }
                                <Panel bsStyle="info">
                                    <Panel.Heading>
                                        <Panel.Title componentClass="h3">Agregar Autoparte</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body>
                                        <form>
                                            <FormGroup controlId="cvePieza">
                                                <ControlLabel>Comentarios</ControlLabel>
                                                <FormControl type="text" placeholder="Ingresa comentarios para la pieza" />
                                            </FormGroup>

                                            <FormGroup controlId="pieza">
                                                <ControlLabel>Pieza</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Pieza">
                                                    
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="ano">
                                                <ControlLabel>Año</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Año">
                                                    <option value="">Selecciona Año</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2011">2011</option>
                                                    <option value="2010">2010</option>
                                                    <option value="2009">2009</option>
                                                    <option value="2008">2008</option>
                                                    <option value="2007">2007</option>
                                                    <option value="2006">2006</option>
                                                    <option value="2005">2005</option>
                                                    <option value="2004">2004</option>
                                                    <option value="2003">2003</option>
                                                    <option value="2002">2002</option>
                                                    <option value="2001">2001</option>
                                                    <option value="2000">2000</option>
                                                    <option value="ANTERIOR">ANTERIOR</option>
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="marca">
                                                <ControlLabel>Marca</ControlLabel>
                                                <FormControl componentClass="select"placeholder="Selecciona Marca" onChange={this.handleCargaModelos}>
                                                    <option value="">Selecciona Marca</option>
                                                    <option value="AUDI">AUDI</option>
                                                    <option value="BMW">BMW</option>
                                                    <option value="CHEVROLET">CHEVROLET</option>
                                                    <option value="CHRYSLER">CHRYSLER</option>
                                                    <option value="DODGE">DODGE</option>
                                                    <option value="FIAT">FIAT</option>
                                                    <option value="FORD">FORD</option>
                                                    <option value="GMC">GMC</option>
                                                    <option value="HONDA">HONDA</option>
                                                    <option value="HYUNDAI">HYUNDAI</option>
                                                    <option value="JEEP">JEEP</option>
                                                    <option value="KIA">KIA</option>
                                                    <option value="LAND ROVER">LAND ROVER</option>
                                                    <option value="MAZDA">MAZDA</option>
                                                    <option value="MITSUBISHI">MITSUBISHI</option>
                                                    <option value="NISSAN">NISSAN</option>
                                                    <option value="PEUGEOT">PEUGEOT</option>
                                                    <option value="RENAULT">RENAULT</option>
                                                    <option value="SEAT">SEAT</option>
                                                    <option value="SUZUKI">SUZUKI</option>
                                                    <option value="TOYOTA">TOYOTA</option>
                                                    <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="modelo">
                                                <ControlLabel>Modelo</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Modelo">
                                                <option value="">Selecciona Modelo</option>
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="plano">
                                                <ControlLabel>Lado</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Plano">
                                                   
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="color">
                                                <ControlLabel>Color</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Color">
                                                   
                                                </FormControl>
                                            </FormGroup>

                                            <FormGroup controlId="almacen">
                                                <ControlLabel>Almacen</ControlLabel>
                                                <FormControl componentClass="select" placeholder="Selecciona Almacen">
                                                   
                                                </FormControl>
                                            </FormGroup>
                                            <ButtonGroup vertical block>
                                                <Button bsSize="large" bsStyle="primary" onClick={this.handleGuardaAutoparte}>Guardar</Button>
                                            </ButtonGroup>
                                        </form>
                                    </Panel.Body>
                                </Panel>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )}; 
}

export default BuscaAutopartes;