import React, { Fragment } from 'react';

const Presupuesto = ({presupuesto,saldo}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:$ {presupuesto}
            </div>
            <div className="alert">
                Saldo:$ {saldo}
            </div>
        </Fragment>
    );
}
 
export default Presupuesto;