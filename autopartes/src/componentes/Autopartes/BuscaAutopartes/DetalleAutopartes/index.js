import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import AutoparteEncontrada from './AutoparteEncontrada/index';

class DetalleAutoparte extends Component {

    constructor({ data, urlImg, usuario }){
        super();
        this.state = {
            data,
            urlImg,
            usuario
        };
    }

    rederAutopartesEncontradas() {
        const datos = this.props.data;
        console.log(datos);
        return datos.docs.map( pieza => <AutoparteEncontrada usuario={this.state.usuario} ano={pieza.data().ano} marca={pieza.data().marca} almacen={pieza.data().almacen} modelo={pieza.data().modelo} pieza={pieza.data().pieza} key={pieza.id} id={pieza.id} color={pieza.data().color} urlImg={this.props.urlImg} comentario={pieza.data().cvePieza} plano={pieza.data().plano} /> );
    }

    render = () => {
        return(
        <div>
            <Panel bsStyle="info">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Autoparte Encontrada</Panel.Title>
                </Panel.Heading>
                
                <Panel.Body>
                    <div>
                        { this.rederAutopartesEncontradas() }
                    </div>
                </Panel.Body>
            </Panel>
        </div>
        );
    };
};

export default DetalleAutoparte;