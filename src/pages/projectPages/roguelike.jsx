import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='App-div-black d-flex align-items-center justify-content-center'>
        <Container>
          <h1> Roguelike </h1>
          <Row className='mt-5'>
            <Col>
              <Row className='mb-3'>
                <h2>Documentation:</h2>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Controller</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"PlayerController.cs"</span> is the script that manages the player's movements.</p>
                    <p>It permit the player to move, shoot and manage both the dash action and his cooldown bar.</p>
                    <p>It even manage the change at the sprite during invincibility frames</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Health Controller</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"PlayerHealthController.cs"</span> is the script that manage the player health.</p>
                    <p>It is called to damage the player and to make him invincible. It call the "UIController.cs" to update the UI Health Bar</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Enemy Controller</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"EnemyController.cs"</span> is the script that manages the enemies' movements and health.</p>
                    <p>It permit the enemy to move and shoot, if it is melee or ranged, and his vision range.</p>
                    <p>It even manage the health and, with the "AfterDeathAnimation.cs" it activate the death of the enemy.</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Bullet and Enemy Bullet</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"PlayerBullet.cs" and "EnemyBullet.cs"</span> are the scripts that manage the bullets that run on the screen</p>
                    <p>"PlayerBullet.cs" manage the movements of the player bullet and call the "EnemyController.cs" to damage the enemy</p>
                    <p>"EnemyBullet.cs" manage the movements of the player bullet and call the "PlayerHealthController.cs" to damage the player</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
