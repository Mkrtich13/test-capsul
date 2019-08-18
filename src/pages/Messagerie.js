import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

function Messagerie(props) {
    const globalContextValue = useContext(GlobalContext);
    useEffect(() => globalContextValue.setPage('MESSAGERIE'), []);

    return (
        <div className="container">
            <h1>Messagerie</h1>
        </div>
    )
}

export default Messagerie;