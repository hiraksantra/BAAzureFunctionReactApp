import axios from 'axios'
import './App.css'
import { Container, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function App() {


  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    axios.get('/api/login').then((response) => {
        setUserData(response.data.body);
        console.log(response.data)
      }).catch((error) => {
        console.error('Error fetching data:', error)
      });
  }, []);

  return (
    <>
      <header className="App-header">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/">MyApp</Navbar.Brand>
              <Navbar.Toggle aria-controls="main-navbar-nav" />
              <Navbar.Collapse id="main-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown title="Services" id="services-dropdown">
                    <NavDropdown.Item href="/service1">Service 1</NavDropdown.Item>
                    <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </header>
      <main style={{ minHeight: 'calc(100vh - 100px)' }} className='p-3 text-center'>
        { userData ? (<>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          </>
        ) : <Spinner style={{marginTop: "200px"}}/>}
      </main>
      <footer className='p-2 bg-dark text-white text-center'>
        <p>&copy; 2025 WTW</p>
      </footer>
    </>
  )
}

export default App
