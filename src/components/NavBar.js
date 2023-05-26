import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import avatar from "../images/juicy-yellow-cat.png"

const NavBar = () => {
    return (<>
        {<Navbar bg="secondary" expand="false" className="mb-5">
            <Container fluid>
                <Navbar.Brand style={{fontSize: "30px", color: "#fff"}} href="#">Meower</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor: "#fff", border: "1px solid #fff"}} aria-controls={`offcanvasNavbar-expand-false`}/>
                <Navbar.Offcanvas
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{display: "flex", alignItems: "center"}} id={`offcanvasNavbarLabel-expand-false`}>
                            <img style={{width: "30px", height: "30px", objectFit: "cover", marginRight: "5px"}} src={avatar} alt="user avatar"/>
                            Oksana
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Posts</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Item className="mt-3">email: o.komarova92@yandex.ru</Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>}
    </>);
};

export default NavBar;