import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component{
    render(){
        return(

            <div>
                <h2 className="mt-2 mb-3">Página não encontrada!</h2>
                <Link to="/" className="btn btn-success">Voltar ao início</Link>
            </div>

        );
    }
}

export default NotFound;