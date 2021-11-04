import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (

        <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
            <Nav className="ml-auto topNav" navbar >
                <NavItem className="mr-4" >
                    <NavLink exact to="/companies">Companies</NavLink> </NavItem>
                <NavItem className="mr-4" >
                    <NavLink exact to="/jobs">Jobs</NavLink> </NavItem>
                <NavItem className="mr-4">
                    <NavLink exact to="/profile">Profile</NavLink>
                </NavItem>
            </Nav>
        </Navbar>

    )
}


export default NavBar;