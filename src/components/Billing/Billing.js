import React, { Component } from 'react';
import {consultEndpoint} from './../../services/consultEndpoint';

class Billing extends Component{
    
    constructor(props){
        
        super(props);

        this.state = {
            detalhamento: []
        }

    }

    componentDidMount(){

        consultEndpoint('faturamento').then(data => this.setState(data));

    }

    render(){
        return(

            <div>
                <h2 className="mt-2">Faturamento</h2>

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Total por forma de pagamento
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th className="text-right">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.detalhamento.map((item, index) => {
                                            return(

                                                <tr key={ index }>
                                                    <td>{item.descricao}</td>
                                                    <td className="text-right">
                                                        {item.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                                                    </td>
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

export default Billing;