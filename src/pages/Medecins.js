import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

function Medecins(props) {
    const globalContextValue = useContext(GlobalContext);
    useEffect(() => globalContextValue.setPage('MES MEDECINS'), []);

    return (
        <div className="container">
            <h1>Medecins</h1>
        </div>
    )
}

export default Medecins;