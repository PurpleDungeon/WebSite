import React from 'react';
import Atropos from 'atropos/react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/atropos.css'
import atroposbg from './img/atropssvg/atropos-bg.svg'
import mountains from './img/atropssvg/atropos-mountains.svg'
import mountains2 from './img/atropssvg/atropos-mountains2.svg'
import dungeonEntrance from './img/atropssvg/dungeon_entrance.svg'
import purpleDunegon from './img/atropssvg/purple-dungeon.svg'

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
                    data-atropos-offset="2.5"
                    src={dungeonEntrance}
                    alt=""
                  />
                  <img
                    data-atropos-offset="4"
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