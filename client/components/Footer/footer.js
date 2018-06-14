import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import { CardTitleWrapper, IconWrapper, LinkWrapper, FontAwesomeIconWrapper, FooterWrapper } from './styled'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlus';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFax from '@fortawesome/fontawesome-free-solid/faFax';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <FooterWrapper>
            <Card>
                <CardBody>
                    <CardTitleWrapper>
                        <Link to='/home' style={{fontSize: '1.25rem', textDecoration: 'none'}} >Home</Link>
                        <LinkWrapper to='/chat' >Chat</LinkWrapper>
                        <CardTitle>YOU MEET ME</CardTitle>
                        <LinkWrapper to='/profile' >Profile</LinkWrapper>
                        <Link to='/support' style={{fontSize: '1.25rem',  textDecoration: 'none'}} >Support</Link>
                    </CardTitleWrapper>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faFacebook} size="6x" spin />
                        <FontAwesomeIconWrapper icon={faGooglePlus} size="6x" spin />
                        <FontAwesomeIcon icon={faTwitter} size="6x" spin />
                    </IconWrapper>
                </CardBody>
            </Card>
        </FooterWrapper>
    );
};

export default Footer;