import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

function Capsules(props) {
    const globalContextValue = useContext(GlobalContext);
    useEffect(() => globalContextValue.setPage('MES CAPSULES'), []);

    return (
        <div className="container">
            <h1>Capsules</h1>
        </div>
    )
}

export default Capsules;