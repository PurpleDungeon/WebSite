import React from "react";
import { Col, Container, Image, Navbar, Row } from "react-bootstrap";
import img1 from "./img/simoneBergonzi/questions-bro.svg"
import img2 from "./img/simoneBergonzi/college-project-bro.svg"
import img3 from "./img/simoneBergonzi/writing-room-bro.svg"

function App() {
  return (
    <div className="App">
      <Navbar className='App-navbar'>
        <Container fluid>
          <Navbar.Brand href="/">
            <button className="nav-neon-button"><span>HOME</span><i></i></button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container>
          <h1>Meet Simone</h1>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={12} lg>
              <p>
                Simone Bergonzi is a 21-year-old full-stack developer proficient in Javascript/Typescript, C#, and experienced with Vue, NodeJs, and Unity.
                He enjoys RPG video games and find inspiration in anime and manga.
                With a diverse set of skill and a passion for technology and interactive storytelling, Simone brings creativity and analytical thinking to their work, constantly striving for growth in the software development field.
              </p>
            </Col>
            <Col sm={12} md={12} lg>
              <Image src={img1} style={{height: '100%'}}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-screen-light-purple d-flex align-items-center justify-content-center">
        <Container>
          <Col>
            <h1>Study and Career Path</h1>
            <Row className="d-flex align-items-center justify-content-center">
              <Col sm={12} md={12} lg>
                <Image src={img2} style={{height: '100%'}}/>
              </Col>
              <Col sm={12} md={12} lg>
                <p>
                  Simone holds a Secondary School Diploma in IT from ISII Marconi with a score of 90.
                  He had made an internship at Amada Italia, where they developed a Windows Application in C# to manage internal files.
                  Currently employed as a full-stack developer at a local software house named LikableHair, specialized in Javascript/Typescript, working with NodeJS and frameworks like Vue and Svelte.
                  He is recently entering the world of DevOps by working on Docker based systems.
                  Alongside their work, they are pursuing a degree in Computer Science at UNIPR, further expanding their knowledge and skills.
                  Simone is dedicated to growth and poised for a successful career in computer science.
                </p>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container>
          <h1>Personal Passions and Hobbies</h1>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={12} lg>
              <p>
                Beyond the world of software development, Simone leads a vibrant and fulfilling personal life. 
                He is an avid lover of RPG video games, finding inspiration in his immersive storytelling and intricate world-building. 
                In his downtime, Simone can often be found exploring virtual realms and embarking on epic quests. 
                Additionally, he draws inspiration from anime and manga, appreciating the artistry and narrative depth found in these mediums. 
                Whether it's uncovering hidden treasures in a game or diving into the captivating narratives of anime and manga, Simone's personal passions invigorate his creativity and fuel his drive for innovative problem-solving allowing him to bring a unique perspective to his work as a developer.
              </p>
            </Col>
            <Col sm={12} md={12} lg>
              <Image src={img3} style={{width: '100%'}}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
