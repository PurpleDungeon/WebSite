import React from 'react';
import Atropos from 'atropos/react';
import { Container, Row, Col } from 'react-bootstrap';
import './atropos.css'
import atroposbg from './img/atropos-bg.svg'
import mountains from './img/atropos-mountains.svg'
import mountains2 from './img/atropos-mountains2.svg'
import dungeonEntrance from './img/dungeon_entrance.svg'
import purpleDunegon from './img/purple-dungeon.svg'

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
                    src={atroposbg}
                    alt=""
                  />
                  <img
                    data-atropos-offset="-4"
                    src={atroposbg}
                    alt=""
                  />
                  <img
                    data-atropos-offset="-2"
                    src={mountains}
                    alt=""
                  />
                  <img
                    data-atropos-offset="0"
                    src={mountains2}
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