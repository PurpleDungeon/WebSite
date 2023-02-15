import React from 'react';
import Atropos from 'atropos/react';
import { Container, Row, Col } from 'react-bootstrap';
import './atropos.css'
import dungeonEntrance from './dungeon_entrance.svg'
import mountains from './atropos-mountains.svg'
import purpleDunegon from './Purple Dungeon.svg'

function App() {
  return (
    <div className="App">
      <div className='App-div-black d-flex align-items-center justify-content-center'>
        <Container>
          <h1> Purple Dungeon Website </h1>
          <Row>
            <Col>
              <div className="container">
                <Atropos
                  className="atropos-banner"
                  highlight={false}
                >
                  <img
                    className="atropos-banner-spacer"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="-4"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="-2"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-mountains.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="0"
                    src={mountains}
                    alt=""
                  />
                  <img
                    data-atropos-offset="3"
                    src={dungeonEntrance}
                    alt=""
                  />
                  <img
                    data-atropos-offset="5"
                    src={purpleDunegon}
                    alt=""
                  />
                </Atropos>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;