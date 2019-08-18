import React, { useContext, useState } from 'react';
import { Divider, Dropdown, Row, Col, Card, Icon, Button, Grow } from 'react-materialize';
import GlobalContext from '../context/GlobalContext';
import FamilleModal from './FamilleModal';

function FamilleMember(props) {
    const styles = {
        actions: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 24px'
        }
    }

    const contextValue = useContext(GlobalContext);

    const getActions = () => {
        let actions = [<div key="" style={styles.actions}>
                        <legend className="font-weight-bolder left-align">Ajouté le :</legend>
                        <legend className="font-weight-bolder right-align">{props.value.date}</legend>
                    </div>]
        
        if(props.value.validate) {
            return actions;
        } else {
            let i = 0;
            actions = [<div key="" style={styles.actions}>
                        <legend className="font-weight-bolder left-align">Demande d'ajout le :</legend>
                        <legend className="font-weight-bolder right-align">{props.value.date}</legend>
                    </div>]
            
            return props.value.submission 
                ? actions.concat(<div key={i++} className="w-100"><Button style={{borderRadius: 0}} className="w-100 grey" disabled>EN ATTENTE D'ACCEPTATION ...</Button></div>) 
                : actions.concat(<div key={i++} className="w-100" style={{display: 'flex'}}>
                                    <div className="w-50"><Button onClick={acceptInvitationFamily} waves="light" style={{borderRadius: 0}} className="w-100 blue darken-3">ACCEPTER</Button></div>
                                    <div className="w-50"><Button onClick={rejectFamily} waves="light" style={{borderRadius: 0}} className="w-100 pink darken-1">REFUSER</Button></div>
                                </div>);
        }
    }

    const getHeader = () => {
        const validateHeader = <Row>
                                    <Col m={6}>
                                        <div style={{width: '10%', marginLeft: 4}}>
                                            <span className="text-primary font-weight-bold">{props.value.pourc + '%'}</span>
                                        </div>
                                    </Col>
                                    <Col m={6} className="right-align family-dropdown">
                                        <Dropdown trigger={<Button flat waves="light"><Icon>more_vert</Icon></Button>}>
                                            <a className="right-align"><Icon>settings</Icon>Modifier</a>
                                            <Divider/>
                                            <a className="right-align"><Icon>compare_arrows</Icon>Gestion</a>
                                            <Divider/>
                                            <FamilleModal deleteMember={props.value} action={rejectFamily} trigger={<a className="right-align"><Icon>delete_outline</Icon>Supprimer</a>} />
                                        </Dropdown>
                                    </Col>
                                </Row>

        return props.value.validate ? validateHeader : getSubmissionHeader();
    }

    const getSubmissionHeader = () => {
        const submissionHeader = <Row>
                                    <Col m={6}></Col>
                                    <Col m={6} className="right-align">
                                        <Button onClick={rejectFamily} flat><Icon>delete_outline</Icon></Button>
                                    </Col>
                                </Row>
        
        return props.value.submission ? submissionHeader : <Row style={{minHeight: 36}}></Row>;
    }

    const acceptInvitationFamily = () => {
        const newData = props.value;
        newData.validate = true;
        const members = contextValue.familyMembers.filter(member => member.id != props.value.id);
        members.push(newData);
        
        contextValue.setFamilyMembers(members);
    }

    const rejectFamily = () => {
        const members = contextValue.familyMembers.filter(member => member.id != props.value.id);
        contextValue.setFamilyMembers(members);
    }

    return (
        <Col key={props.value.id} l={4} m={6} s={12}>
            <Card
                className="family-card"
                style={{bordeRadius: 50}}
                actions={ getActions() }
                >
                { getHeader() }
                <Row>
                    <Col m={3}></Col>
                    <Col m={6} className="center-align">
                        <img className="circle responsive-img w-75" src={props.value.image} />   
                    </Col>
                    <Col m={3}></Col>
                </Row>
                <Row>
                    <h6 className="font-weight-bolder center-align">{props.value.firstName +' '+ props.value.lastName}</h6>
                    <p className="grey-text lighten-1 center-align">{ props.value.status ? props.value.status : '-'}</p>
                </Row>
            </Card>
        </Col>
    )
}

export default FamilleMember;