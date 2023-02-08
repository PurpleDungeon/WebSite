import img1 from './img/PurpleDungeonSmallLogoVariantPurple.png'
import logo from './img/PurpleDungeonVariantPurple.png'
import './App.css';
import { Container, Row, Col, Image, Card, Button, ButtonGroup } from 'react-bootstrap';

function App() {
  let projects = [{
    id: 1,
    src: 'https://picsum.photos/1600/900',
    name: 'project 1',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nis'
  }, {
    id: 2,
    src: 'https://picsum.photos/1600/900',
    name: 'project 2',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nis'
  }, {
    id: 3,
    src: 'https://picsum.photos/1600/900',
    name: 'project 3',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nis'
  }, {
    id: 4,
    src: 'https://picsum.photos/1600/900',
    name: 'project 4',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nis'
  }]

  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-screen-black d-flex align-items-center justify-content-center' id='section-1'>
        <Container fluid>
          <Row className='me-3 d-flex align-items-center justify-content-center'>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <Image className='rounded' src={img1} alt="img1"></Image>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
              <h1> What is Purple Dungeon? </h1>
              <p className="text-center">
                Purple Dungeon is a spiritual folder where Murasaki Simema (aka Simone Bergonzi) put his personal project to create
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='App-screen-black d-flex align-items-center justify-content-center' id='section-1'>
        <Container fluid>
          <Row>
            {projects.map(item => (
              <Col key={item.id} sm={4} md={4} lg={4} xl={4} xxl={4} className='mb-3 d-flex align-items-center justify-content-center'>
                <Card border="dark" style={{ width: '100%', color: '#1c1c1d', backgroundColor: '#745494' }}>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.caption}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="dark">GitHub</Button>
                    <Button variant="outline-dark">Page</Button>
                  </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
