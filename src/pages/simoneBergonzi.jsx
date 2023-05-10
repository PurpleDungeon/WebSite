import React from "react";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar className='App-navbar'>
        <Container fluid>
          <Navbar.Brand href="/" style={{ 'color': '#ccb4d6' }}>Home</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App-screen-black d-flex align-items-center justify-content-center">
        <Container>
          <h1>Headline Text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            orci aliquet, gravida mi vitae, mollis est. Sed at eros cursus,
            vehicula ex at, dignissim tellus. Nullam lobortis fermentum
            hendrerit. Donec vel sollicitudin dolor. Quisque facilisis sodales
            libero vitae pellentesque. Praesent at ante quis ipsum porttitor
            tempor eu eu erat. Cras condimentum id dolor nec sagittis. Ut
            egestas metus eget condimentum vestibulum. In aliquam libero
            vestibulum, molestie nibh a, tristique ligula. Quisque in ante
            pretium, gravida risus a, pulvinar sapien. Vestibulum ac dui
            fermentum, suscipit tortor vel, gravida tellus. Morbi sollicitudin
            pretium turpis, pulvinar sagittis purus semper ut. Vivamus sed ex a
            arcu sollicitudin venenatis vel eget ligula. Pellentesque egestas
            tempus cursus. Maecenas placerat euismod mollis. Praesent fringilla
            turpis nibh, eget placerat massa consequat non. Phasellus vel
            pharetra dui, ut bibendum ante. Duis pellentesque magna eget est
            lobortis, et suscipit nulla fermentum. Donec consectetur nulla
            turpis, nec aliquam elit commodo at. Vestibulum gravida, dui nec
            consequat maximus, risus dui luctus purus, ut tempus massa lectus
            non velit.
          </p>
        </Container>
      </div>
      <div className="App-screen-purple d-flex align-items-center justify-content-center">
        <Container>
          <h1>Headline Text</h1>
          <p>
            Duis dapibus tincidunt nisl id ultrices. Sed venenatis velit lorem,
            non facilisis mauris bibendum quis. Maecenas congue scelerisque enim
            eu consectetur. Donec quis faucibus erat. Aenean sem dui, laoreet
            sed efficitur ac, mattis eu purus. Pellentesque mollis mi et ex
            sodales rhoncus. Nulla posuere elit sit amet purus pretium, quis
            dapibus lorem scelerisque. Integer malesuada metus ut orci tempor
            pulvinar. In facilisis elementum tellus, et commodo purus tempor sit
            amet. Integer consectetur quis leo et condimentum. Quisque tempor
            finibus velit nec elementum. Donec pharetra consectetur lorem id
            suscipit. Aenean quis risus dolor. Nunc lobortis lectus quis maximus
            condimentum. Etiam porttitor ac sem id semper. Donec sed metus sit
            amet diam bibendum tempor. Donec finibus ex leo, in mattis purus
            venenatis in. Aenean ut viverra nunc. Ut urna purus, pharetra vel
            efficitur nec, dignissim id tellus. Vivamus elementum risus ut
            tincidunt sollicitudin. Sed consequat lorem eu nunc dictum, vitae
            imperdiet diam dignissim. Integer blandit, risus ullamcorper rutrum
            malesuada, leo augue pellentesque arcu, nec dictum odio ante id
            mauris. Proin vitae tellus ipsum. Morbi condimentum bibendum lacus,
            eget pretium odio condimentum et. Morbi nulla orci, blandit non
            tristique non, tristique sed felis. In odio orci, scelerisque id
            eros sit amet, faucibus ultrices nisi. Ut hendrerit accumsan
            volutpat. Praesent dignissim urna ut ligula eleifend pharetra.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
