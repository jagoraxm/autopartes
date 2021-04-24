import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autopartes from '../componentes/Autopartes/index';

class AutopartesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Autopartes usuario={this.props.usuario}></Autopartes>
         );
    }
}
 
AutopartesContainer.propTypes = {
    usuario: PropTypes.func.isRequired
  }
  

  const mapStateToProps = ({ usuario }) => ({ usuario });

export default connect(mapStateToProps, null)(AutopartesContainer);