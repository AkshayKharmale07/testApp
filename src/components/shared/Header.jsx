import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 





function Header() {
    return (

        <header className="App-header">
            <div className="navigation-area">
                <Navbar bg="light" expand="md" className="stickNavbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img className="d-block w-50 img-fluid" src="images/logo.jpg" alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav d-flex d-xl-none" id="hamburger">
                        <svg width="50" height="50" viewBox="0 0 100 100">
                      <path class="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                      <path class="line line2" d="M 20,50 H 80" />
                      <path class="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                        </Navbar.Toggle> 
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="me-auto navbar-expand-xl">
                                <Nav.Item> <Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                                <Nav.Item> <Nav.Link href="/about">About Us</Nav.Link></Nav.Item>
                                <Nav.Item> <Nav.Link href="#">Services</Nav.Link></Nav.Item>
                                <Nav.Item> <Nav.Link href="#">Contact Us</Nav.Link></Nav.Item>
                                <Nav.Item>


                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Item>
                                <Nav.Item> <Nav.Link href="#" className="btn-main">Call Now</Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;