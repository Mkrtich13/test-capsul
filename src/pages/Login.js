import React, { useState } from "react";
import { Button, Row, Col, Modal } from 'react-materialize';
import ButtonCP from '../components/ButtonCP';
import Faq from '../pages/Faq';
import ForgetForm from '../components/ForgetForm';
import ConnectForm from '../components/ConnectForm';

function Login() {
    const [forgetPassword, setForgetPassword] = useState(false);

    const displayConnectForm = () => {
        let data = null;
        forgetPassword 
            ? data = <ForgetForm forgetPassword={forgetPassword} switchFormConnect={switchFormConnect} /> 
            : data = <ConnectForm forgetPassword={forgetPassword} switchFormConnect={switchFormConnect} />;

        return data
    }

    const switchFormConnect = (forgetPassword) => {
        forgetPassword ? setForgetPassword(false) : setForgetPassword(true);
        displayConnectForm();
    }    

    return (
        <Row className="m-0">
            <Col l={7} m={4} className="p-0">
                <div className="background-login"></div>
            </Col>
            <Col l={5} m={8} s={12}>
                <Row className="valign-wrapper" style={{padding: '1% 3%'}}>
                    <Col m={6}>
                        <Button className="font-weight-bold blue-text accent-2" flat waves="light">
                            RETOUR
                        </Button>
                    </Col>
                    <Col m={6} className="right-align">
                        <Modal id="faqModal" bottomSheet={true} style={{minHeight: '100%'}} trigger={<span><ButtonCP light={true} text="Consulter la faq" /></span>}>
                            <Faq />
                        </Modal>
                    </Col>
                </Row>
                <Col m={12} className="d-flex justify-content-center">
                    <div className="w-75 mt-1">
                        <h4 className="font-weight-bold center-align">Pour accéder à la plateforme,</h4><h4 className="m-0 font-weight-bold center-align">Connectez vous !</h4>
                        { displayConnectForm() }
                        <Col m={12}>
                            <p className="blue-text darken-1 font-weight-bold center-align">Condition générales d'utilisation</p>
                        </Col>
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default Login;
