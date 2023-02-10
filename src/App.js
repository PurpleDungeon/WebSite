import img1 from './img/PurpleDungeonSmallLogoVariantPurple.png'
import logo from './img/PurpleDungeonVariantPurple2.png'
import './App.css';
import { Container, Row, Col, Image, Card, Button, ButtonGroup } from 'react-bootstrap';
import purpleProjects from './purpleProjects.json.js'
import personalProjects from './personalProjects.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image style={{ maxWidth: '100%' }} src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-screen-black d-flex align-items-center justify-content-center'>
        <Container fluid>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
              <Image style={{ maxWidth: '100%' }} className='rounded' src={img1} alt="img1"></Image>
            </Col>
            <Col className='px-5' sm={12} md={12} lg={6} xl={6} xxl={6}>
              <h2> What is Purple Dungeon? </h2>
              <p className="text-center">
                Purple Dungeon is an immaginary game studio made by Murasaki Simema (aka Simone Bergonzi). The studio is a place where Murasaki Simema put his personal project.
              </p>
              <h2 className='mt-4'> Who is Simone Bergonzi? </h2>
              <p className="text-center">
                Simone Bergonzi is a 21 yo developer from Italy. He is currently working in a local company as a Full Stack Developer on a Web Applications. His dream is to create a memorable RPG Game. His main programming languages are C# and Javascript. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='App-screen-black d-flex align-items-center justify-content-center'>
        <Container fluid>
          <h1>Purple Dungeon Projects</h1>
          <Row className='mt-5'>
            {purpleProjects.map(project => (
              <Col key={project.id} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-3 justify-content-center'>
                <Card style={{ width: '100%', color: '#1c1c1d', backgroundColor: '#8c7b8c' }}>
                  <Card.Img style={{ aspectRatio: 16/9 }} variant="top" src={project.src} alt={project.name} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      {project.caption}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" target="_blank" href={project.gitHub}>GitHub</Button>
                    <Button variant="outline-dark" href={project.link}>Page</Button>
                  </ButtonGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className='App-screen-black d-flex align-items-center justify-content-center'>
        <Container fluid>
          <h1>Other Projects</h1>
          <Row className='mt-5'>
            {personalProjects.map(project => (
              <Col key={project.id} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-3 justify-content-center'>
                <Card style={{ width: '100%', color: '#1c1c1d', backgroundColor: '#8c7b8c' }}>
                  <Card.Img style={{ aspectRatio: 16/9 }} variant="top" src={project.src} alt={project.name} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      {project.caption}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" target="_blank" href={project.gitHub}>GitHub</Button>
                    <Button variant="outline-dark" href={project.link}>Page</Button>
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
