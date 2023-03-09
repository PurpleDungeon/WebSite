import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='App-div-black d-flex align-items-center justify-content-center'>
        <Container>
          <h1> Roguelike </h1>
          <Row className='mt-5'>
            <Col>
              <Row className='mb-3'>
                <h2>Features:</h2>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Controller</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"PlayerController.cs"</span> is the script that manages the player's movements.</p>
                    <p>It permit the player to move, shoot and manage both the dash action and his cooldown bar</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
