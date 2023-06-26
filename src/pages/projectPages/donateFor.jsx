import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
    return (
      <div className="App">
        <Navbar className='App-navbar'>
          <Container fluid>
            <Navbar.Brand href="/"> 
              <button className="nav-neon-button"><span>HOME</span><i></i></button>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
}

export default App;