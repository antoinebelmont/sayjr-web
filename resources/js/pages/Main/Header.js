import React from "react";
import { connect } from "react-redux";
import { toggleMobileNavVisibility } from "../../reducers/Layout";
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ showMobileMenu, toggleMobileNavVisibility }) => (
    <Navbar fluid={true}>
        <Navbar.Header>
            <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                onClick={toggleMobileNavVisibility}
            >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav>
                <NavItem href="/">
                    <i className="fa fa-dashboard"></i>
                </NavItem>
            </Nav>
            <div className="separator"></div>
            <Navbar.Form pullLeft>
                <FormGroup>
                    <span className="input-group-addon">
                        <i className="fa fa-search"></i>
                    </span>
                    <FormControl type="text" placeholder="Buscar servicios" />
                </FormGroup>
            </Navbar.Form>
            <Nav pullRight>
                <Link to="/logout" role='button'>Cerrar Sesión</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const mapDispatchToProp = dispatch => ({
    toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(
    null,
    mapDispatchToProp
)(Header);
