import React from "react";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar className='App-navbar'>
        <Container fluid>
          <Navbar.Brand href="/" style={{ 'color': '#ccb4d6' }}> 
            <button className="nav-neon-button"><span>HOME</span><i></i></button>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container>
          <h1>Meet Simone</h1>
          <p>
            Simone Bergonzi is a 21-year-old full-stack developer proficient in Javascript/Typescript, C#, and experienced with Vue, NodeJs, and Unity. 
            He enjoys RPG video games and find inspiration in anime and manga. 
            With a diverse set of skill and a passion for technology and interactive storytelling, Simone brings creativity and analytical thinking to their work, constantly striving for growth in the software development field.
          </p>
        </Container>
      </div>
      <div className="App-screen-purple d-flex align-items-center justify-content-center">
        <Container>
          <h1>Study and Career Path</h1>
          <p>
            Simone holds a Secondary School Diploma in IT from ISII Marconi with a score of 90. 
            He had made an internship at Amada Italia, where they developed a Windows Application in C# to manage internal files. 
            Currently employed as a full-stack developer at a local software house, specialized in Javascript/Typescript, working with NodeJS and frameworks like Vue. 
            Alongside their work, they are pursuing a degree in Computer Science at UNIPR, further expanding their knowledge and skills. 
            Simone is dedicated to growth and poised for a successful career in computer science.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
