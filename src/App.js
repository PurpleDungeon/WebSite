import logo from './img/PurpleDungeonSmallLogoVariantPurple.png'
import img1 from './img/PurpleDungeonVariantPurple.png'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-div-right'>
        <Container fluid>
          <Row>
            <Col sm={7} md={7} lg={7} xl={7} xxl={7}>
              <img src={img1} alt="img1"></img>
            </Col>
            <Col sm={5} md={5} lg={5} xl={5} xxl={5}>
              <h1> What is Purple Dungeon? </h1>
              <p class="text-center">
                Purple Dungeon is a spiritual folder, where Murasaki Simema (aka Simone Bergonzi) put his personal project
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <p> © 2021 Purple Dungeon </p>
      </footer>
    </div>
  );
}

export default App;
