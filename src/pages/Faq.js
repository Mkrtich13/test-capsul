import React from "react";
import { Button, Row, Col, Modal, Icon } from 'react-materialize';

function Faq() {

    return(
        <Row className="p-0 m-0">
           <Col className="p-0 m-0" m={5}>
                <div className="background-faq"></div>
           </Col>
           <Col m={7}>
               <div className="d-flex justify-content-between">
                    <div className="w-100">
                        <p>? FAQ</p>
                    </div>
                    <div className="w-100 right-align">
                        <Button className="modal-close" flat><Icon>close</Icon></Button>
                    </div>
               </div>
               <Row style={{minHeight: '15vh'}} className="bg-primary">

               </Row>
               <h1>En construction</h1>
                
           </Col>
        </Row>
    )
}

export default Faq;