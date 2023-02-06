import logo from './img/PurpleDungeonSmallLogoVariantPurple.png'
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Container className='App-div-right'>
          <h1> What is Purple Dungeon? </h1>
        </Container>
      </body>
      <footer>
        <p> © 2021 Purple Dungeon </p>
      </footer>
    </div>
  );
}

export default App;
