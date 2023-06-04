import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="py-5">
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center her0-card bg-light w-75'>
                    <h1 className="text-center mb-4">Tic-tac-toe App</h1>
                    <p className="text-center mb-4">
                        This is a tic-tac-toe app that uses MERN and JWT authentication in an http-only cookie.
                        It also Redux Toolkit and the React Bootstrap library.
                    </p>
                    <div className="d-flex">
                        <Button variant="primary" href='/login' className="me-3">
                            Sign In
                        </Button>
                        <Button variant="secondary" href='/register' className="me-3">
                            Register
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero;
