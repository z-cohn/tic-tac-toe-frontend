import { Nav, Navbar, Container } from 'react-bootstrap';
import useLogout from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const handleLogoutClick = async () => {
        await logout();
        navigate('/');
    }

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect >
                <Container>
                    <Navbar.Brand href='/'>Tic-tac-toe</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/login'>
                                Sign In
                            </Nav.Link>
                            <Nav.Link href='/register'>
                                Register
                            </Nav.Link>
                            <Nav.Link href='/links'>
                                Links
                            </Nav.Link>
                            <Nav.Link onClick={() => handleLogoutClick()}>
                                Log Out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
