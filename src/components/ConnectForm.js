import React from 'react';
import { Row, Col, TextInput, Checkbox } from 'react-materialize';
import { Link } from "react-router-dom";
import ButtonCP from './ButtonCP';
import Navigation from './Navigation';

function ConnectForm(props) {
    return (
        <div>
            <div className="mt-3">
                <TextInput style={{font: "1.2em"}} m={12} email validate label="Votre adresse email ..." />
                <TextInput s={12} password label="Votre mot de passe ..." />
            </div>
            <Row>
                <Col m={6} s={12} className="center-align">
                    <p onClick={() => props.switchFormConnect(props.forgetPassword)} style={{cursor: 'pointer'}} className="m-0" href="#">Mot de passe oublié ?</p>
                </Col>
                <Col m={6} s={12} className="center-align">
                    <Checkbox value="Rester connecté" label="Rester connecté" />
                </Col>
            </Row>
            <Col s={12} className="center-align mt-3">
                <Link to="/dashboard"><ButtonCP className="blue darken-3" moreLarge={true} text="Se connecter" /></Link>
            </Col>
        </div>
    )
}

export default ConnectForm;