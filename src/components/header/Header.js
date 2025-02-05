import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color": "gold"}}>
                    <i className="bi bi-camera-video-off-fill">Gold</i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: "100px"}}
                        navbarScroll
                    >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                <Button variant="outline-info">Login</Button>
                <Button variant="outline-info">Registration</Button>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}

export default Header
