import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

export const Header = styled.h1`
    color: ${props => props.color && props.color || 'white'} ;
    text-align: ${props => props.textAlign && props.textAlign || 'center'} ;;
    ${props => props.h1 && 'font-size: 2.5rem'}
    ${props => props.h2 && 'font-size: 2rem'}
    ${props => props.h3 && 'font-size: 1.5rem'}
    ${props => props.h4 && 'font-size: 1rem'}
    ${props => props.h5 && 'font-size: 0.5rem'}

     ${props => props.justify && 'justify-content: center;'}
     ${props => props.animation && '-webkit-animation: color-change 1s infinite;-moz-animation: color-change 1s infinite;-o-animation: color-change 1s infinite;-ms-animation: color-change 1s infinite;animation: color-change 1s infinite;'}
     @-webkit-keyframes color-change {
        0% { color: #dc3545; }
        50% { color: #17a2b8; }
        100% { color: #dc3545; }
    }
    @-moz-keyframes color-change {
        0% { color: #dc3545; }
        50% { color: #17a2b8; }
        100% { color: #dc3545; }
    }
    @-ms-keyframes color-change {
        0% { color: red; }
        50% { color: #17a2b8; }
        100% { color: #dc3545; }
    }
    @-o-keyframes color-change {
        0% { color: #dc3545; }
        50% { color: #17a2b8; }
        100% { color: #dc3545; }
    }
    @keyframes color-change {
        0% { color: #dc3545; }
        50% { color: #17a2b8; }
        100% { color: #dc3545; }
    }

`;

export const BtnToggle = styled(Button)`
    display: block;
    margin: 1rem 0;
    width: 400px;
    text-align: start;
`;

export const IconExpand = styled(ExpandMore)`
    position: relative;
    right: 35px;
    font-size: 35px !important;
    top: 18px;
    color: white;

`;

export const IconClose = styled(ExpandLess)`
    position: relative;
    right: 35px;
    font-size: 35px !important;
    top: 18px;
    color: white;

`;

export const BtnWrapper = styled.div`
    width: 424px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Content = styled.div`
    margin-left: 30px;
`;