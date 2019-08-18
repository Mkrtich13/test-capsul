import React from 'react';
import { Button } from 'react-materialize';

function ButtonCP(props) {
    let round = 80;
    let className = props.className;
    let waves = "light";
    props.square ? round = 0 : round = 80;

    const styles = {
        borderRadius: round,
        paddingRight: null,
        paddingLeft: null
    }

    if(props.moreLarge) {
        styles.paddingRight = '22%';
        styles.paddingLeft = '22%';
    }

    if(props.light) {
        className += " blue-text darken-5 white";
        styles.border = "1.2px solid #1565C0";
        //waves = "dark";
    }

    return (
        <Button
            className={className}
            waves={waves}
            large
            style={styles}
        >{props.text}
        </Button>
    )
}

export default ButtonCP;