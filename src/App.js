import img1 from './img/PurpleDungeonSmallLogoVariantPurple.png'
import logo from './img/PurpleDungeonVariantPurple.png'
import './App.css';
import { Container, Row, Col, Image, Card, Button, ButtonGroup } from 'react-bootstrap';

function App() {
  let projects = [{
    id: 1,
    src: 'https://picsum.photos/1600/900',
    name: 'Adventure Story',
    caption: 'A simple RPG game based on Dragon Quest 1. The game is written in C# and uses the Unity engine. The game is only a sandbox and is not a complete game. It was made for a school project.',
    gitHub: 'https://github.com/MurasakiSimema/RPGEsame'
  }, {
    id: 2,
    src: 'https://picsum.photos/1600/900',
    name: 'Werewolf',
    caption: 'A Telegram bot that allows you to play the game WereWolf in a Group. The game is written in NodeJs and uses the node-telegram-bot-api node module. It was made for a school project.',
    gitHub: 'https://github.com/MurasakiSimema/botwerewolf'
  }, {
    id: 3,
    src: 'https://picsum.photos/1600/900',
    name: 'Simple Chat',
    caption: 'A simple console chat that allows you to send message to other people on the same computer. The chat is written in NodeJs and uses the enquirer node module. It was made for a school project.',
    gitHub: 'https://github.com/MurasakiSimema/SimpleChat'
  }, {
    id: 4,
    src: 'https://picsum.photos/1600/900',
    name: 'Eva Platform',
    caption: 'A simple platform game like the google dinosaur game. The game is written in HTML, Javascript and CSS. It was made for a school project. There are some eastereggs in the game, try some password.',
    gitHub: 'https://github.com/MurasakiSimema/EvaPlatform'
  }, {
    id: 5,
    src: 'https://picsum.photos/1600/900',
    name: 'Crowdfunding',
    caption: 'A simple crowdfunding platform. The platform is written in PHP and use the Paypal\'s API for the payment sections. It was made for a school project with some classmates. Unfortunately some minor fix are lost on the school\'s servers.',
    gitHub: 'https://github.com/CrowdfoundingCrew/Crowdfounding'
  }, {
    id: 6,
    src: 'https://picsum.photos/1600/900',
    name: 'Purple Dungeon',
    caption: 'This website is written in ReactJs and uses the react-bootstrap node module. It is hosted by Firebase. It is this website that you are currently viewing. Currently it is still work in progress.',
    gitHub: 'https://github.com/PurpleDungeon/WebSite'
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
            {projects.map(project => (
              <Col key={project.id} sm={4} md={4} lg={4} xl={4} xxl={4} className='mb-3 d-flex align-items-center justify-content-center'>
                <Card border="dark" style={{ width: '100%', color: '#1c1c1d', backgroundColor: '#ccb4d6' }}>
                  <Card.Img variant="top" src={project.src} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      {project.caption}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="dark" target="_blank" href={project.gitHub}>GitHub</Button>
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
