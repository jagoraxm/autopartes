import React, {Component} from 'react';
import BuscaAutopartes from './BuscaAutopartes/index';

class Autopartes extends Component {

    constructor(usuario){
        super(usuario);
        this.state = {
            estatusError: 99,
            usuario
        };

        console.log(this.state.usuario);
    } 

    //Se ejecuta una única vez en el componente después de construirse y renderizarse
    componentWillMount() {
    }

    componentDidMount() {
    }
    
    componentWillUpdate(nextProps, nextState) {
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    }

    
    
    
    render = () => {
        return(
            <div className='Autopartes'>
            
                <BuscaAutopartes usuario={this.state.usuario.usuario}></BuscaAutopartes>
            </div>
        )}; 
}

export default Autopartes;