import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <Parallax
        speed={-50}
      >
        <div className='App-screen-black d-flex align-items-center justify-content-center'>
          <Container>
            <h1>Headline Text</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non orci aliquet, gravida mi vitae, mollis est. Sed at eros cursus, vehicula ex at, dignissim tellus. Nullam lobortis fermentum hendrerit. Donec vel sollicitudin dolor. Quisque facilisis sodales libero vitae pellentesque. Praesent at ante quis ipsum porttitor tempor eu eu erat. Cras condimentum id dolor nec sagittis.
              Ut egestas metus eget condimentum vestibulum. In aliquam libero vestibulum, molestie nibh a, tristique ligula. Quisque in ante pretium, gravida risus a, pulvinar sapien. Vestibulum ac dui fermentum, suscipit tortor vel, gravida tellus. Morbi sollicitudin pretium turpis, pulvinar sagittis purus semper ut. Vivamus sed ex a arcu sollicitudin venenatis vel eget ligula. Pellentesque egestas tempus cursus. Maecenas placerat euismod mollis. Praesent fringilla turpis nibh, eget placerat massa consequat non. Phasellus vel pharetra dui, ut bibendum ante. Duis pellentesque magna eget est lobortis, et suscipit nulla fermentum. Donec consectetur nulla turpis, nec aliquam elit commodo at. Vestibulum gravida, dui nec consequat maximus, risus dui luctus purus, ut tempus massa lectus non velit.
            </p>
          </Container>
        </div>
      </Parallax>
      <Parallax
        speed={50}
      >
        <div className='App-screen-purple d-flex align-items-center justify-content-center'>
          <Container>
            <h1>Headline Text</h1>
            <p>
              Duis dapibus tincidunt nisl id ultrices. Sed venenatis velit lorem, non facilisis mauris bibendum quis. Maecenas congue scelerisque enim eu consectetur. Donec quis faucibus erat. Aenean sem dui, laoreet sed efficitur ac, mattis eu purus. Pellentesque mollis mi et ex sodales rhoncus. Nulla posuere elit sit amet purus pretium, quis dapibus lorem scelerisque. Integer malesuada metus ut orci tempor pulvinar. In facilisis elementum tellus, et commodo purus tempor sit amet. Integer consectetur quis leo et condimentum.
              Quisque tempor finibus velit nec elementum. Donec pharetra consectetur lorem id suscipit. Aenean quis risus dolor. Nunc lobortis lectus quis maximus condimentum. Etiam porttitor ac sem id semper. Donec sed metus sit amet diam bibendum tempor. Donec finibus ex leo, in mattis purus venenatis in. Aenean ut viverra nunc.
              Ut urna purus, pharetra vel efficitur nec, dignissim id tellus. Vivamus elementum risus ut tincidunt sollicitudin. Sed consequat lorem eu nunc dictum, vitae imperdiet diam dignissim. Integer blandit, risus ullamcorper rutrum malesuada, leo augue pellentesque arcu, nec dictum odio ante id mauris. Proin vitae tellus ipsum. Morbi condimentum bibendum lacus, eget pretium odio condimentum et. Morbi nulla orci, blandit non tristique non, tristique sed felis. In odio orci, scelerisque id eros sit amet, faucibus ultrices nisi. Ut hendrerit accumsan volutpat. Praesent dignissim urna ut ligula eleifend pharetra.
            </p>
          </Container>
        </div>
      </Parallax>
      <Parallax
        speed={0}
      >
        <div className='App-screen-black d-flex align-items-center justify-content-center'>
          <Container>
            <h1>Headline Text</h1>
            <p>
              Praesent in laoreet libero, nec suscipit sapien. Donec feugiat, ante et viverra tincidunt, sapien nibh pulvinar felis, nec volutpat diam enim quis nisl. Fusce mollis ac ante id suscipit. In at pretium augue, sed lacinia augue. Integer facilisis, dui ac pellentesque placerat, orci diam pharetra arcu, in scelerisque diam mi a libero. Sed dui ligula, sodales sed libero a, dignissim lacinia lorem. Sed iaculis orci sit amet turpis ultrices ultrices. Sed sit amet ex tempus, aliquet nulla et, tempus urna. Ut laoreet ligula aliquet magna mattis, at pellentesque elit scelerisque. Pellentesque ut ultricies nisi. Donec luctus consectetur augue, in iaculis nisi elementum sit amet. Praesent tellus dolor, lacinia non nulla eu, rutrum egestas quam. Nunc ultrices tincidunt erat sit amet congue. Etiam pellentesque tempor arcu. Pellentesque gravida metus sed urna consectetur laoreet. Aenean vitae odio ac justo scelerisque vehicula vel ac odio.
              Pellentesque pretium pharetra enim ac rhoncus. Nullam auctor nibh quis sapien finibus, venenatis rutrum ipsum scelerisque. Maecenas varius risus quis diam aliquam tincidunt. Nam non vestibulum tellus. In egestas nec augue at maximus. Aenean iaculis varius hendrerit. Integer fringilla ultrices quam a dictum. Quisque lobortis lectus eget felis malesuada luctus. Integer suscipit dictum risus, sit amet convallis neque finibus ac. Praesent ante mi, eleifend et sem at, fermentum gravida nunc.
              Praesent egestas nisi sit amet varius luctus. In nec ligula mi. Vivamus velit massa, congue a vehicula nec, scelerisque sed mauris. Etiam finibus ante ut nunc posuere lacinia. Duis molestie, ligula sed semper commodo, justo odio cursus diam, ut consectetur neque mi et orci. Morbi elementum dui eget erat accumsan vehicula. Donec maximus lectus eu nisi dictum iaculis.
              Nunc dapibus, purus et lacinia rutrum, urna sapien pharetra dolor, eget auctor dolor diam id enim. Curabitur eu hendrerit nisi. Aliquam finibus lectus eget ullamcorper egestas. Integer pulvinar tempor tortor sit amet laoreet. Pellentesque vehicula mi odio. Nullam hendrerit sed orci id facilisis. Pellentesque faucibus molestie lacus vitae cursus. Aenean iaculis leo tortor, ut laoreet risus faucibus non. Donec nec maximus quam.
            </p>
          </Container>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
