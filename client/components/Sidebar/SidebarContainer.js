import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';
import React, { PropTypes } from 'react';

const SidebarContainer = ({className, children}) => (
    <div className={className}>
        <Nav >
            { children }
        </Nav>
    </div>
);
// SidebarContainer.propTypes = {
//     className: PropTypes.string,
//   };
const SidebarWrapper = styled(SidebarContainer)`
    .nav {
        position: fixed;
        display: flex;
        flex-direction: column;
        height:100%;
        background-color: #363636;
        justify-content:center;
    }
    .nav-link {
        text-align:center;
        white-space: nowrap;
        padding: 10px;

    }
    
`;

export default SidebarWrapper;