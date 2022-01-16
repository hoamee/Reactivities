import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7184/api/activities').then(res => {
      console.log(res);
      setActivities(res.data);
    })
  }, [])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown"  id="">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListGroup as="ul">
        {
            activities.map((activity: any) => (
              <ListGroup.Item autoSave="li" className="text-white bg-transparent" key={activity.id}>
                {activity.title}
              </ListGroup.Item>
            ))
          }
        </ListGroup>
        <ul>
          
        </ul>
      </header>
    </div>
  );
}

export default App;
