import React from 'react';
import Atropos from 'atropos/react';
import { Container, Row, Col } from 'react-bootstrap';
import './atropos.css'

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
                    data-atropos-offset="-4.5"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="-2.5"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-mountains.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="0"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-back.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="2"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-mid.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="4"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-forest-front.svg"
                    alt=""
                  />
                  <img
                    data-atropos-offset="5"
                    src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-logo-en.svg"
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