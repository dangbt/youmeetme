import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';
import React, { PropTypes } from 'react';

const NavigationbarContainer = ({className, children}) => (
    <div className={className}>
        <Nav >
            { children }
        </Nav>
    </div>
);
// SidebarContainer.propTypes = {
//     className: PropTypes.string,
//   };
const NavigationbarWrapper = styled(NavigationbarContainer)`
    .nav {
        /* position: relative;
        left:100px; */
    
    }
    .nav-link {
        
    }
    
`;

export default NavigationbarWrapper;