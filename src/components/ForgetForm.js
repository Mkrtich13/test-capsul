import React from 'react';
import { Row, Col, TextInput } from 'react-materialize';
import ButtonCP from './ButtonCP';

function ForgetForm(props) {
    return (
        <div>
            <div className="mt-3">
                <TextInput style={{font: "1.2em"}} m={12} email validate label="Votre adresse email ..." />
            </div>
            <Row>
                <Col s={12} className="center-align">
                    <p onClick={() => props.switchFormConnect(props.forgetPassword)} style={{cursor: 'pointer'}} className="m-0" href="#">Se connecter ?</p>
                </Col>
            </Row>
            <Col s={12} className="center-align mt-3">
                <ButtonCP id="forgetPasswordSubmit" className="blue darken-3" moreLarge={true} text="Réinistialiser" />
            </Col>
        </div>
    )
}

export default ForgetForm;