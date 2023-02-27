import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
import images from './img/adventureStory/images.js'

function App() {
  return (
    <div className="App">
      <div className='App-div-black d-flex align-items-center justify-content-center'>
        <Container>
          <h1> Adventure Story </h1>
          <Row className='mt-5'>
            <Col>
              <Row className='mb-3'>
                <h2>Features:</h2>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h3>Game manager</h3>
                  </Row>
                  <Row>
                    <p>The "GameManager.cs" is the script that manages the various features of the game. It contains the Stats of the players, their coins and items and manages them, and alerts the various features the state of others.</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Movement, Switching Scenes and Camera</h3>
                  </Row>
                  <Row>
                    <p>Through the "PlayerController.cs" script, player movements are managed. The script handles user input, animations, and prevents the PG from leaving the boundaries of the map.</p>
                    <p>Through the "ToArea.cs" and "FromArea.cs" scripts, transitions between one scene and another are handled. The "ToArea.cs" script is used to send a player to another scene, while the "FromArea.cs" is used to receive a player from another scene.</p>
                    <p>Through the "PlayerController.cs" script, player movements are managed. The script handles user input, animations, and prevents the PG from leaving the boundaries of the map.</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Dialog System</h3>
                  </Row>
                  <Row>
                    <p>Through the "DialogManager.cs" and "DialogActivator.cs" scripts, dialogs are managed. The "DialogManager.cs" pops up the dialog box, the name box when prompted, keeps the messages going, and closes the dialog boxes when finished. The "DialogActivator.cs", on the other hand, is responsible for calling the "DialogManager.cs" only when appropriate by passing it the dialog to appear.</p>
                  </Row>
                  <Row>
                    <Image src={images.dialogManager}></Image>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Stats</h3>
                  </Row>
                  <Row>
                    <p>The "CharStats.cs" take care of keeping a player's stats saved. Through this script you can heal your player or increase his experience, which, if it reaches the right numbers, allows leveling up and then increasing his stats, all managed by this script.</p>
                  </Row>
                  <Row>
                    <Image src={images.stats}></Image>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Menu</h3>
                  </Row>
                  <Row>
                    <p>
                      With the "GameMenu" script you manage the In-Game Menu. Besides controlling when to open or close it, it manages all the operation of the menu and the various submenus:
                      <ul>
                        <li>Updates the stats of the players in the main menu</li>
                        <li>Opens and closes the submenus</li>
                        <li>Updates the stats of the Stats submenu</li>
                        <li>Displays Items in the Items menu</li>
                        <li>Activates the Use and Discard functions of the Items menu</li>
                        <li>Allows you to close the game with the Quit button</li>
                      </ul>
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.menu}></Image>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Items</h3>
                  </Row>
                  <Row>
                    <p>With the "Item.cs", "ItemButton.cs" and "PickUpItem.cs" scripts, the objects are managed. The "Item.cs" script represents the various objects by containing all the information and functions that the game and the player need to use them. "ItemButton.cs" represents the item in the various menus that can be used in the game (Menu Items, Shop and the Battle menu Items). "PickUpItem.cs" allows the player to pick up items from the ground.</p>
                  </Row>
                  <Row>
                    <Image src={images.items}></Image>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Shop</h3>
                  </Row>
                  <Row>
                    <p>
                      The "Shop.cs" and "ShopKeeper.cs" scripts run the store system. "Shop.cs" manages the menu:
                      <ul>
                        <li>Opening and closing the menu</li>
                        <li>Opening and closing the Buy and Sell submenus</li>
                        <li>Allows the use of the Buy and Sell buttons.</li>
                      </ul>
                      The "ShopKeeper.cs" script is used to activate the "Shop.cs" by passing it the items that can be purchased by the player. The list of items can be wired or received via API.
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.shop}></Image>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Battle System</h3>
                  </Row>
                  <Row>
                    <p>It is probably the most important and longest part in an RPG so it is necessary to analyze it by part</p>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h4>Battle Manager</h4>
                      </Row>
                      <Row>
                        <p>
                          The "BattleManager.cs" script is the heart of the Battle System and contains most of the functions needed to make battles work:
                          <ul>
                            <li>Contains references to all the windows and other objects that the Battle System needs</li>
                            <li>Contains all the information pertaining to the current battle</li>
                            <li>Brings up the battle screen</li>
                            <li>Creates the various Battle Characters, both player and NPCs</li>
                            <li>Advances turns</li>
                            <li>Updates the status of the battle</li>
                            <li>Decides what NPCs are doing</li>
                            <li>Manages the damage taken and done</li>
                            <li>Updates the stats window</li>
                            <li>Manages the moves that can be used by players</li>
                            <li>Opens the battle menus: Target, Magic and Items</li>
                            <li>Updates the items in the battle menu Items</li>
                            <li>Activates the function to use items</li>
                            <li>Activates the End of Battle and GameOver Coroutines</li>
                          </ul>
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.battleManager}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Characters</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleChar.cs" manages the various players and NPCs that are in the battle, contains their statistics, what moves they can use, and some useful information and functions for the program to function.</p>
                      </Row>
                      <Row>
                        <h4>Battle Move</h4>
                      </Row>
                      <Row>
                        <p>"BattleMove.cs" is a class that handles the various moves, both the normal Slash and the various spells.</p>
                      </Row>
                      <Row>
                        <h4>Attack Effect</h4>
                      </Row>
                      <Row>
                        <p>The script "AttackEffect.cs" handles the on-screen effects of attacks</p>
                      </Row>
                      <Row>
                        <Image src={images.attackEffect}></Image>
                      </Row>
                      <Row>
                        <h4>Select Target</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleTargetButton.cs" handles the target on which the player wants to make an attack</p>
                      </Row>
                      <Row>
                        <Image src={images.selectTarget}></Image>
                      </Row>                      
                      <Row>
                        <h4>Select Magic</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleMagicSelect.cs" handles the player's choice of magic</p>
                      </Row>
                      <Row>
                        <Image src={images.selectMagic}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Notification</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleNotification.cs" handles notifications that may appear during battle such as the death of a player in the party or lack of mana to do a spell</p>
                      </Row>
                      <Row>
                        <Image src={images.battleNotification}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Starter</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleStarter.cs" is used to start a battle. Depending on the three Boolean fields it will call "BattleManager.cs" passing it the list of enemies and rewards to appear by randomly taking one of several saved enemy sets.</p>
                      </Row>
                      <Row>
                        <h4>Battle Rewards</h4>
                      </Row>
                      <Row>
                        <p>The script "BattleReward.cs" is called at the end of a battle in case of victory. When called it opens the rewards menu showing the player what he got from the battle, when the menu closes the script will add the various rewards to the inventory and add experience to the players</p>
                      </Row>
                      <Row>
                        <Image src={images.battleRewards}></Image>
                      </Row>
                      <Row>
                        <h4>Game Over</h4>
                      </Row>
                      <Row>
                        <p>“GameOver.cs” viene chiamato al termine di una battaglia in caso di sconfitta. Quando viene chiamato chiama la scena GameOver</p>
                      </Row>
                      <Row>
                        <Image src={images.gameOver}></Image>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;