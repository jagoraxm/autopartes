import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUsuario } from '../actions/index';
import { auth } from '../componentes/FirestoreConfig';
import $ from 'jquery';
import { Panel, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import Autopartes from '../componentes/Autopartes/index';

class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            estatusError: 99,
            usuario: null
        };

        this.handleLogin = this.handleLogin.bind(this);
    } 

    handleLogin() {

        var email = $("#usuario").val();
        var password = $("#password").val();
    
        console.log(email +"-" + password);
      
        auth.signInWithEmailAndPassword(email, password).then(result => {
            this.props.setUsuario1(email);
            this.setState({ usuario:email, estatusError: 99 });
            console.log(result);
        }).catch(error => {
            if(error.code == "auth/invalid-email" || error.code == "auth/user-not-found" || error.code == "auth/wrong-password"){
                console.log("La dirección de correo es incorrecta");
                this.setState({estatusError: 2});
            }
            console.log(error);
        });
;      }

    render() { 
        return (
            <div>
{
            this.state.estatusError == 2 ? 
               
                <div className='Login' align="center">
                <Alert bsStyle="danger">ERROR!! Dirección de correo o password es incorrecta</Alert> 
                <div className="col-md-12 col-xs-12">
                
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Vendamos Autopartes</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup controlId="usuario">
                            <FormControl type="text" placeholder="Ingresa usuario" />
                        </FormGroup>

                        <FormGroup controlId="password">
                            <FormControl type="password" placeholder="Ingresa contraseña" />
                        </FormGroup>
                    </Panel.Body>
                </Panel>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleLogin} block>
                    Ingresar
                </Button>
            </div>
        </div>
                :
              this.state.usuario === null ?

            <div className='Login' align="center">
                <div className="col-md-12 col-xs-12">
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Vendamos Autopartes</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup controlId="usuario">
                            <FormControl type="text" placeholder="Ingresa usuario" />
                        </FormGroup>

                        <FormGroup controlId="password">
                            <FormControl type="password" placeholder="Ingresa contraseña" />
                        </FormGroup>
                    </Panel.Body>
                </Panel>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleLogin} block>
                    Ingresar
                </Button>
            </div>
        </div>
        :
        <Autopartes usuario={this.props.usuario}></Autopartes>
}
 </div>
 );
    }
}

LoginContainer.propTypes = {
    //setUsuario: PropTypes.func.isRequired
  }
  
  const mapDispatchToProps = dispatch => ({
    setUsuario1: value => dispatch(setUsuario(value))
  });

  const mapStateToProps = ({ usuario }) => ({ usuario });
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);