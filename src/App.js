import React, { useState } from 'react';
import img1 from './img/PurpleDungeonSmallLogoVariantPurple.png'
import logo from './img/PurpleDungeonVariantPurple2.png'
import './App.css';
import { Container, Row, Col, Image, Card, Button, ButtonGroup, Toast } from 'react-bootstrap';
import purpleProjects from './purpleProjects.json.js'
import personalProjects from './personalProjects.json'

function App() {
  const [show, setShow] = useState({});

  const changeShow = (id) => {
    console.log(id, show);
    setShow({...show, [id]: !show[id]});
  }

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
            <Col className='px-5' sm={12} md={12} lg={5} xl={5} xxl={5}>
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
          <Row className='mt-5 d-flex justify-content-center'>
            {purpleProjects.map(project => (
              <Col key={project.id} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-3 d-flex justify-content-center'>
                <Card style={{ width: '95%', color: '#1c1c1d', backgroundColor: '#ccb4d6' }}>
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
                    {!!project.link && project.link != '' 
                      ? <Button variant="outline-dark" href={project.link}>Page</Button>
                      : <Button variant="outline-dark">Details</Button>
                    }
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
          <Row className='mt-5 d-flex justify-content-center'>
            {personalProjects.map(project => (
              <Col key={project.id} sm={12} md={6} lg={4} xl={4} xxl={4} className='mb-3 d-flex justify-content-center'>
                <Card style={{ width: '95%', color: '#1c1c1d', backgroundColor: '#ccb4d6' }}>
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
                      {!!project.link && project.link !== '' 
                        ? <Button variant="outline-dark" href={project.link}>Page</Button>
                        : <Button variant="outline-dark" onClick={() => changeShow(project.id)}>Details</Button> 
                      }
                    </ButtonGroup>
                    {(!project.link || project.link === '' )
                      &&  
                      <Toast style={{ color: '#ccb4d6', backgroundColor: '#1c1c1d' }} show={!!show[project.id]} onClose={() => changeShow(project.id)}>
                        <Toast.Header style={{backgroundColor: "#745494", color: "#1c1c1d"}}>
                          <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                          />
                          <strong className="me-auto">{project.name}</strong>
                        </Toast.Header>
                        <Toast.Body>{project.details}</Toast.Body>
                      </Toast>
                    }
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

//TODO:
//use a toast (maybe when there isn't enought information use a toast anc not a page)
//more personal info (a new page? a toast? an offcanvas? a popover?)