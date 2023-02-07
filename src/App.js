import img1 from './img/PurpleDungeonSmallLogoVariantPurple.png'
import logo from './img/PurpleDungeonVariantPurple.png'
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-screen-black d-flex align-items-center justify-content-center' id='section-1'>
        <Container fluid>
          <Row className="me-3">
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <img className='rounded' src={img1} alt="img1"></img>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <h1> What is Purple Dungeon? </h1>
              <p className="text-center">
                Purple Dungeon is a spiritual folder, where Murasaki Simema (aka Simone Bergonzi) put his personal project
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
