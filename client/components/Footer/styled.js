import styled from 'styled-components';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
`;
export const CardTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0px;
`;
export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0px;
    svg {
        margin: 0 20px;
        cursor: pointer;
        }
`;
export const LinkWrapper = styled(Link)`
    text-decoration: 'none';
    height: 25px;
    margin: 0 20px;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    padding: 0 20px;
    font-size: 1.25rem;
    &:hover {
        text-decoration: 'none';
    }
`;
export const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
    margin: 0 20px;
`;