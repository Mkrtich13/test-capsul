import React, { useContext, useEffect  } from 'react';
import { Modal, Button, Icon, Col, TextInput, Checkbox, Row, Divider } from 'react-materialize';
import GlobalContext from '../context/GlobalContext';
import uuid from 'uuid/v4';

function FamilleModal(props) {
    const contextValue = useContext(GlobalContext);

    // A deplacer plus tard
    const addFamilyMember = () => {
        const addFamilyInput = document.querySelector('#addFamilyInput');
        let members = contextValue.familyMembers;
      
        if(addFamilyInput.value) {
            const administMe = document.querySelector('#administMe').checked;
            const administHim = document.querySelector('#administHim').checked;

            const event = new Date();
            const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
            const date = event.toLocaleDateString('fr-Fr', dateOptions);

            const newMember = {
                id: uuid(), 
                firstName: 'Bob', 
                lastName: 'Grimbert', 
                status: administMe ? 'Administrateur' : '',
                image: 'https://fakeimg.pl/250x250/',
                validate: false,
                date: date,
                submission: true,
                pourc: '75'
            }

            members.push(newMember);

            contextValue.setFamilyMembers(members);
            props.setAddFamilyModal(true);

            document.querySelector('.famille-modal button').click();
        }
        
    }

    const getModalContent = () => {
        if(props.deleteMember) {
            return (
                <Col className="mt-3">
                    <Divider />
                    <Row className="valign-wrapper">
                        <Col m={6} className="mt-1 right-align">
                            <img className="w-25 circle" src={props.deleteMember.image} value="profile pic" />
                        </Col>
                        <Col m={6} className="mt-1">
                            <h6 className="font-weight-bold">{props.deleteMember.firstName +' '+ props.deleteMember.lastName}</h6>
                            <p className="grey-text">{props.deleteMember.status ? props.deleteMember.status : '-'}</p>
                        </Col>
                    </Row> 
                    <Divider />
                    <h6 className="grey-text mt-2 center-align">Une fois supprimée, il faudra le rajouter pour rétablir ! Continuer ?</h6>
                </Col>
            )
        } else {
            return (
                <div>
                    <p style={{fontSize: '1.3em'}} className="center-align font-weight-bold grey-text lighten-1">
                    Afin d'ajouter un membre à votre famille, renseigner son numéro de sécurité sociale
                    </p>
                    <Col style={{display: 'flex', justifyContent: 'center'}} className="p-3">
                        <div className="center-align w-25">
                            <TextInput id="addFamilyInput" className="" label="N° de sécurité sociale *" />
                        </div>
                    </Col>
                    <div className="d-flex justify-content-center">
                        <div className="w-50" style={{marginLeft: '18%'}}>
                            <div>
                                <Checkbox id="administMe" value="" label="Je peux administrer cette personne" />
                            </div>
                            <div>
                                <Checkbox id="administHim" value="" label="Cette personne peut m'administrer" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const generateModal = () => {
        return (
            <div>
            <h2 className="center-align font-weight-bold">{props.deleteMember ? "Etes vous sur de vouloir supprimer ce membre ?" : "Ajouter un membre à votre famille"}</h2>
            { getModalContent() }
            <Col className="p-4">
                <div className="center-align">
                    <Button waves="light" style={{borderRadius: 40}} onClick={props.deleteMember ? props.action : addFamilyMember} large className="blue darken-3">{props.deleteMember ? "Supprimer ce membre" : "Ajouter le membre"}</Button>
                </div>
            </Col>
            </div>
        )
    }

    return (
        <Modal className="bg-light famille-modal" style={{minHeight: '100%'}} bottomSheet={true} trigger={props.trigger}>
            <Col className="right-align">
                <Button className="modal-close text-primary font-weight-bold" flat waves="light">
                    Fermer
                    <Icon right>
                    close
                    </Icon>
                </Button>
            </Col>
            <Col className="container mt-3">
                { generateModal() }
            </Col>
        </Modal>
    )
}

export default FamilleModal;