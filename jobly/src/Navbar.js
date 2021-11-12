import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import UserContext from "./UserContext";

function NavBar({ logout }) {

    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <Nav className="ml-auto topNav" navbar >
                <NavItem className="mr-4" >
                    <NavLink exact to="/companies">Companies</NavLink> </NavItem>
                <NavItem className="mr-4" >
                    <NavLink exact to="/jobs">Jobs</NavLink> </NavItem>
                <NavItem className="mr-4">
                    <NavLink exact to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem className="mr-4">
                    <NavLink exact to="/" onClick={logout}>
                        Logout {currentUser.first_name || currentUser.username}
                    </NavLink>
                </NavItem>
            </Nav>
        )
    }

    function logoutNav() {

        return (
            <Nav className="LogoutNav">
                <NavItem className="mr-4" >
                    <NavLink exact to="/login">Login</NavLink> </NavItem>
                <NavItem className="mr-4" >
                    <NavLink exact to="/signup">SignUp</NavLink> </NavItem>
            </Nav>
        )
    }
    return (

        <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
            {currentUser ? loggedInNav() : logoutNav()}
        </Navbar>

    )
}


export default NavBar;