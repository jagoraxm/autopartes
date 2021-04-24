import React, {Component} from 'react';
import { ListGroupItem, ListGroup, Button, FormControl, Alert } from 'react-bootstrap';
import firestore from '../../../../FirestoreConfig';

class AutoparteEncontrada extends Component{ 

    constructor(usuario){
        super();
        this.state = {
            statusError: 0,
            usuario
        };

        this.handleVendeAutoparte = this.handleVendeAutoparte.bind(this);
    }

    handleVendeAutoparte = (idPieza, e) => {
        let compAuto = this;

        console.log(idPieza);
        
        const db = firestore;
        db.settings({
            timestampsInSnapshots: true
        });
        
        var piezasRef = db.collection('piezas').doc(idPieza);
        var monto = "";
        if(document.getElementById(idPieza).value != null)
            monto = document.getElementById(idPieza).value;
        
        console.log("monto= " + monto);
        var d= new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();

        if(monto !== "" && Number(monto)){
            // Set the "capital" field of the city 'DC'
            return piezasRef.update({
                monto: monto,
                estatus: 'VENDIDO',
                fechaVenta: date + '/' + month + '/' + year,
                horaVenta: hour + ':' + minutes + ':' + seconds
            })
            .then(function() {
                console.log("Document successfully updated! " + idPieza);
                //window.location.href = 'http://localhost:3000/';
                compAuto.setState({
                    estatusError: 3,
                    props: null
                });
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });   
        }else{
            compAuto.setState({
                estatusError: 2,
            });
        }
        
    }

    render = () => {
        const { urlImg, marca, modelo, pieza, almacen, ano, color, id, comentario, plano } = this.props;
        return(
        <div>
            {
                this.state.estatusError===2 ? 
                    <div>
                    <Alert bsStyle="danger">ERROR!! No llenaste el monto o lo hiciste de forma incorrecta</Alert> 
                    <ListGroup>
                    <ListGroupItem header={pieza}>
                        {almacen} | {marca} | {modelo} | {plano} | {ano} | {color} <br></br> {comentario} <br></br>
                            <Button 
                                bsStyle="success" 
                                onClick={this.handleVendeAutoparte.bind(this, id)}
                                type="submit">Vender
                            </Button>
                            <FormControl size="sm" id={id} type="text" placeholder="Ingresa el monto $$$" />
                    </ListGroupItem>
                </ListGroup>
                </div>
                : this.state.estatusError===3 ? 
                    <Alert bsStyle="info">Se vendio la Pieza</Alert>
                :
                <ListGroup>
                    <ListGroupItem header={pieza}>
                        {almacen} | {marca} | {modelo} | {plano} | {ano} | {color} <br></br> {comentario} <br></br>
                            <Button 
                                bsStyle="success" 
                                onClick={this.handleVendeAutoparte.bind(this, id)}
                                type="submit">Vender
                            </Button>
                            <FormControl size="sm" id={id} type="text" placeholder="Ingresa el monto $$$" />
                    </ListGroupItem>
                </ListGroup>
            }
        </div>
        )
    };
}

export default AutoparteEncontrada;