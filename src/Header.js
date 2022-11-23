import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem('user-info'));
    console.log(username);

    function logout() {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">E-Com</Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Product List</Link>
                                <Link to="/add"> Add Product</Link>
                                <Link to="/update"> Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login"> Login</Link>
                                <Link to="/register"> Register</Link>
                            </>
                    }
                </Nav>
                <Nav>
                    {
                        localStorage.getItem('user-info') ?
                            <NavDropdown title={username && username.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown> : ""
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;