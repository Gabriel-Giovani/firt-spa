import React, { Component } from 'react';
import {consultEndpoint} from './../../services/consultEndpoint';

class Consults extends Component{
    
    constructor(props){

        super(props);

        this.state = {
            realizadas: [],
            marcadas: []
        }

    }

    componentDidMount(){

        consultEndpoint('consultas').then(data => this.setState(data));

    }
    
    render(){
        return(

            <div>
                <h2 className="mt-2">Consultas</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Realizadas
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.realizadas.map((item, index) => {
                                            return (
                                                <tr key={ index }>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header">
                                Marcadas
                            </div>
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.marcadas.map((item, index) => {
                                            return(

                                                <tr key={ index }>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>

                                            );
                                        })
                                    }            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Consults;