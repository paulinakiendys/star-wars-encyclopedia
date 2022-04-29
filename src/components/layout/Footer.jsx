import { FaGithub } from 'react-icons/fa'
import { Container, Navbar } from 'react-bootstrap'
const Footer = () => {
    return (
        <footer>
            <Navbar variant="dark" className='dark-grey p-3'>
                <Container className="justify-content-center">
                    <a target="_blank" rel="noreferrer" href="https://github.com/paulinakiendys/">
                        <FaGithub />
                    </a>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer