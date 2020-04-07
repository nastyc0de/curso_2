import React, { Fragment } from 'react';
import {revisarSaldo} from '../helpers';

const Presupuesto = ({presupuesto,saldo}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:$ {presupuesto}
            </div>
            <div className={revisarSaldo(presupuesto,saldo)}>
                Saldo:$ {saldo}
            </div>
        </Fragment>
    );
}
 
export default Presupuesto;