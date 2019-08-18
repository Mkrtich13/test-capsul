import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Tabs, Tab, Row, Col, Collapsible, CollapsibleItem, TextInput, Button } from 'react-materialize';
import GlobalContext from '../context/GlobalContext';

function Dashboard() {
    const globalContextValue = useContext(GlobalContext);
    useEffect(() => globalContextValue.setPage('DASHBOARD'), []);

    //const [arrowIconChangeState, setArrowIconChange] = useState([]);
    const updateCollapseIcon = () => {
        //arrowIconState == "keyboard_arrow_down" ? setArrowIcon("keyboard_arrow_up") : setArrowIcon("keyboard_arrow_down");
    }

    const displayDateSelect = () => {
        const accordionTab = [];
        const accordionItemsTab = [];
        const monthsTab = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        const yearTab = ['2019', '2018'];
        
        monthsTab.reverse();
        monthsTab.map((month, index) => {
            accordionItemsTab.push(
                <a href="#" key={index} style={{fontSize: '1.1em'}} className="font-weight-bold grey-text d-block dashboard-months-link">{month}</a>
            )
        })

        yearTab.map((year, index) => {
            accordionTab.push(
                    <CollapsibleItem key={index} expanded header={<span className="font-weight-bolder">{year}</span>} iconClassName="text-primary">
                        { accordionItemsTab }
                    </CollapsibleItem>
            )
        })

        return accordionTab;
    } 
    
    return (
        <div style={{padding: '1% 3%', minHeight: '30vh'}}>
            <Tabs className="tab-dashboard z-depth-2 tabs-fixed-width" options={{swipeable: false}}>
                <Tab title="Mon carnet de santé" active className="mt-1">
                    <Row>
                        <Col m={2} className="left-align">
                            <p style={{fontSize: '1.1em'}} className="text-primary font-weight-bolder">Filtrer</p>
                            <Collapsible className="dashboard-collapse-filtre" accordion={true}>
                                <CollapsibleItem expanded header={<span onClick={updateCollapseIcon} className="font-weight-bolder">Médecin</span>} iconClassName="text-primary" icon="keyboard_arrow_down">
                                <span className="font-weight-bold grey-text">Dr Elena Dupont</span>
                                </CollapsibleItem>
                                <CollapsibleItem header={<span onClick={updateCollapseIcon} className="font-weight-bolder">Thematique</span>} iconClassName="text-primary" icon="keyboard_arrow_down">
                                <span className="font-weight-bold grey-text">empty</span>
                                </CollapsibleItem>
                                <CollapsibleItem header={<span onClick={updateCollapseIcon} className="font-weight-bolder">Type de post</span>} iconClassName="text-primary" icon="keyboard_arrow_down">
                                <span className="font-weight-bold grey-text">empty</span>
                                </CollapsibleItem>
                            </Collapsible>
                        </Col>
                        <Col m={8} style={{paddingRight: '4%'}}>
                            <Row style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="dashboard-search">
                                    <TextInput icon="search" placeholder="Rechercher" />
                                </div>
                            </Row>
                            <Row style={{marginBottom: 0}}>
                                <Col m={5} className="right-align">
                                    <Button floating large className="bg-primary" waves="light" icon="star_border" />
                                </Col>
                                <Col m={2} className="center-align">
                                    <Button floating large className="bg-primary btn-dashboard-add" waves="light" icon="add" />
                                </Col>
                                <Col m={5} className="left-align">
                                    <Button floating large className="bg-primary" waves="light" icon="subdirectory_arrow_right" />
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 0}}>
                                <Col m={6} style={{minHeight: '8vh'}}>
                                </Col>
                                <Col style={{borderLeft: '3px solid #1565C0', minHeight: '8vh'}} m={6}>
                                </Col>
                            </Row>
                            <Row>
                                <Col m={4}>
                                    
                                </Col>
                                <Col m={4} style={{minHeight: '5vh', borderRadius: 20}} className="bg-secondary">
                                    <div>
                                        <p className="white-text font-weight-bold center-align">21 JANVIER 2019</p>
                                    </div>
                                </Col>
                                <Col m={4}>
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col m={2} className="right-align">
                            <p style={{fontSize: '1.1em'}} className="text-primary font-weight-bolder">Date</p>
                            <Collapsible className="dashboard-collapse-date" accordion={true}>
                                { displayDateSelect() }
                            </Collapsible>
                        </Col>
                    </Row>
                    
                </Tab>
                <Tab title="Ma fiche médicale d'urgence" className="mt-1">
                    <Col>
                        
                    </Col>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Dashboard;