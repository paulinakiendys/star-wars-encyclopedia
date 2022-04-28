import { Link, NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { Container, Nav, Navbar } from "react-bootstrap"
const Navigation = ({ title }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">🛸 {title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

Navigation.defaultProps = {
    title: 'Star Wars Encyclopedia'
}

Navigation.propTypes = {
    title: PropTypes.string
}


export default Navigation