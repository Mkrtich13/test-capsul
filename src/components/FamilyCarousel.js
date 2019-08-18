import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Icon } from 'react-materialize';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CarouselFamily from './Carousel';
//import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../context/GlobalContext';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(0, 2),
    },
}));

function FamilyCarousel(props) {
    const globalContextValue = useContext(GlobalContext);
    const classes = useStyles();
    
    //const [carouselUpdate, setCarouselUpdate] = useState(false);

    //useEffect(() => setCarouselUpdate(false));

    const getFamilyNumber = () => {
        let nbMembers = 0;
        globalContextValue.familyMembers.map(member => {
            if(member.validate) {
                nbMembers++;
            }
        });

        return nbMembers;
    }

    const getCarouselFamily = () => {
        let familyMembers = [];
        globalContextValue.familyMembers.map(member => {
            if(member.validate) {
                familyMembers.push(member)
            }
        });

        return <CarouselFamily familyMembers={familyMembers} />
    }

    return (
        <Row className="valign-wrapper family-carousel-div">
            <Col m={2} className="center-align">
                <h6 style={{marginLeft: '6%'}} className="white-text">Famille { globalContextValue.user.lastName }</h6>
                <h6 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="white-text font-weight-bold">{ getFamilyNumber() } membres {<Icon>keyboard_arrow_right</Icon>}</h6>
            </Col>
            <Col m={8}>
                { getCarouselFamily() }
            </Col>
            <Col m={2} className="notif-div center-align">
                <IconButton aria-label="4 pending messages" className={classes.margin}>
                    <Badge badgeContent={7} color="secondary">
                        <Icon className="white-text notification-icone">notifications_none</Icon>
                    </Badge>
                </IconButton>
            </Col>
        </Row>
    )
}

export default FamilyCarousel;