import React, { useState, useContext, useEffect } from 'react';
import Navigation from '../components/Navigation';
import FamilleMember from '../components/FamilleMember';
import FamilleModal from '../components/FamilleModal';
import { Collapsible, CollapsibleItem, Row, Col, Modal } from 'react-materialize';
import GlobalContext from '../context/GlobalContext';

function Famille() {
    const contextValue = useContext(GlobalContext);
    useEffect(() => contextValue.setPage('MA FAMILLE'), []);

    const [useAddFamilyModal, setAddFamilyModal] = useState(false);

    useEffect(() => {
        setAddFamilyModal(false);
    });

    const displayFamilyMembers = (access) => {
        const membersToDisplay = [];
        contextValue.familyMembers.map(member => {
            if(!access) {
                if(!member.validate) {
                    membersToDisplay.push(<FamilleMember key={member.id} value={member} />);
                }
            } else {
                if(member.validate) {
                    membersToDisplay.push(<FamilleMember key={member.id} value={member} />);
                }
            }
        })

        return membersToDisplay;
    }

    return (
        <Col style={{padding: '1% 3%'}}>
            <Col className="famille-add-btn" style={{minHeight: '7vh', border: '2px dashed #0c5dc6', borderRadius: 5, padding:10}}>
                <FamilleModal setAddFamilyModal={setAddFamilyModal} action="add" trigger={<h6 style={{color: '#0c5dc6', display: 'flex', justifyContent: 'center'}} className="valign-wrapper center-align font-weight-bold p-3">Ajouter un membre à votre famille <i className="material-icons ml-2">add_circle</i></h6>} />
            </Col>
            <Col style={{marginTop: 30}}>
                <h5 className="font-weight-bold" style={{borderLeft: '3px solid #0c5dc6', paddingLeft: 10}}>Accès en attentes</h5>
                <div className="divider"></div>
                <Row className="mt-2">
                    { displayFamilyMembers(false) }
                </Row>
            </Col>
            <Col>
                <h5 className="font-weight-bold" style={{borderLeft: '3px solid #0c5dc6', paddingLeft: 10}}>Accès validés</h5>
                <div className="divider"></div>
                <Row className="mt-2">
                    { displayFamilyMembers(true) }
                </Row>
            </Col>
        </Col>
    )
}

export default Famille;