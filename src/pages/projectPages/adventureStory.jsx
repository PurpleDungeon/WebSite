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
                <h2>Documentation:</h2>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h3>Game manager</h3>
                  </Row>
                  <Row>
                    <p>The <span className='important-text'>"GameManager.cs" </span>is the script that manages the various features of the game.</p>
                    <p>It contains the Stats of the players, their coins and alerts the various features the state of others.</p>
                    <p>This script is in charge of saving and loading data so that the player can pause the game, and it contain and manage player's items</p>
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
                    <p>Through the <span className='important-text'>"PlayerController.cs"</span> script, player movements are managed. The script handles user input, animations, and prevents the PG from leaving the boundaries of the map.</p>
                    <p>Through the <span className='important-text'>"ToArea.cs" and "FromArea.cs"</span> scripts, transitions between one scene and another are handled. The "ToArea.cs" script is used to send a player to another scene, while the "FromArea.cs" is used to receive a player from another scene.</p>
                    <p>Through the <span className='important-text'>"PlayerController.cs"</span> script, player movements are managed. The script handles user input, animations, and prevents the PG from leaving the boundaries of the map.</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Audio System</h3>
                  </Row>
                  <Row>
                    <p>Through the <span className='important-text'>"AudioManager.cs"</span> the game can play and stop both Sound Effect and Background Music in every situation (Enter a city, starting a battle, using an attack and similar)</p>
                  </Row>
                </Col>
              </Row>
              <hr class="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Quest System</h3>
                  </Row>
                  <Row>
                    <p>With the <span className='important-text'>"QuestManager.cs"</span> script the game save and manage a list of variable to activate and deactivate some Quest Object</p>
                    <p><span className='important-text'>"QuestObject.cs"</span> is the script that activate and deactivate other object in the game based on the "QuestManager.cs" variables</p>
                    <p><span className='important-text'>"QuestMarker.cs"</span> is in charge to call the "QuestManager.cs" to activate and deactivare variables in various situations</p>
                    <p>In combo with the Dialog System the game can activate quest even after a Dialogue</p>
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
                    <p>Through the <span className='important-text'>"DialogManager.cs"</span> and "DialogActivator.cs" scripts, dialogs are managed. The "DialogManager.cs" pops up the dialog box, the name box when prompted, keeps the messages going, and closes the dialog boxes when finished.</p>
                    <p>The <span className='important-text'>"DialogActivator.cs"</span>, on the other hand, is responsible for calling the "DialogManager.cs" only when appropriate by passing it the dialog to appear.</p>
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
                    <p>The <span className='important-text'>"CharStats.cs"</span> take care of keeping a player's stats saved. Through this script you can heal your player or increase his experience, which, if it reaches the right numbers, allows leveling up and then increasing his stats, all managed by this script.</p>
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
                      With the <span className='important-text'>"GameMenu.cs"</span> script you manage the In-Game Menu. Besides controlling when to open or close it, it manages all the operation of the menu and the various submenus:
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
                    <p>With the <span className='important-text'>"Item.cs", "ItemButton.cs" and "PickUpItem.cs"</span> scripts, the objects are managed.</p> 
                    <p>The <span className='important-text'>"Item.cs"</span> script represents the various objects by containing all the information and functions that the game and the player need to use them.</p>
                    <p>The <span className='important-text'>"ItemButton.cs"</span> represents the item in the various menus that can be used in the game (Menu Items, Shop and the Battle menu Items).</p>
                    <p>The <span className='important-text'>"PickUpItem.cs"</span> allows the player to pick up items from the ground.</p>
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
                      The <span className='important-text'>"Shop.cs" and "ShopKeeper.cs"</span> scripts run the store system. "Shop.cs" manages the menu:
                      <ul>
                        <li>Opening and closing the menu</li>
                        <li>Opening and closing the Buy and Sell submenus</li>
                        <li>Allows the use of the Buy and Sell buttons.</li>
                      </ul>
                      The <span className='important-text'>"ShopKeeper.cs"</span> script is used to activate the "Shop.cs" by passing it the items that can be purchased by the player. The list of items can be wired or received via API.
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
                          The <span className='important-text'>"BattleManager.cs"</span> script is the heart of the Battle System and contains most of the functions needed to make battles work:
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
                        <h4>Battle Characters and Boss</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleChar.cs"</span> manages the various players and NPCs that are in the battle, contains their statistics, what moves they can use, and some useful information and functions for the program to function.</p>
                        <p>This script can be used to create some special enemys, like boss and similar, by creating a new classes that inherits from a BattleChar and then by overriding the ChooseAttack method</p>
                      </Row>
                      <Row>
                        <h4>Battle Move</h4>
                      </Row>
                      <Row>
                        <p>The <span className='important-text'>"BattleMove.cs"</span> is a class that handles the various moves, both the normal Slash and the various spells.</p>
                      </Row>
                      <Row>
                        <h4>Attack Effect</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"AttackEffect.cs"</span> handles the on-screen effects of attacks</p>
                      </Row>
                      <Row>
                        <Image src={images.attackEffect}></Image>
                      </Row>
                      <Row>
                        <h4>Select Target</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleTargetButton.cs"</span> handles the target on which the player wants to make an attack</p>
                      </Row>
                      <Row>
                        <Image src={images.selectTarget}></Image>
                      </Row>                      
                      <Row>
                        <h4>Select Magic</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleMagicSelect.cs"</span> handles the player's choice of magic</p>
                      </Row>
                      <Row>
                        <Image src={images.selectMagic}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Notification</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleNotification.cs"</span> handles notifications that may appear during battle such as the death of a player in the party or lack of mana to do a spell</p>
                      </Row>
                      <Row>
                        <Image src={images.battleNotification}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Starter</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleStarter.cs"</span> is used to start a battle. Depending on the three Boolean fields it will call "BattleManager.cs" passing it the list of enemies and rewards to appear by randomly taking one of several saved enemy sets.</p>
                      </Row>
                      <Row>
                        <h4>Battle Rewards</h4>
                      </Row>
                      <Row>
                        <p>The script <span className='important-text'>"BattleReward.cs"</span> is called at the end of a battle in case of victory. When called it opens the rewards menu showing the player what he got from the battle, when the menu closes the script will add the various rewards to the inventory and add experience to the players</p>
                      </Row>
                      <Row>
                        <Image src={images.battleRewards}></Image>
                      </Row>
                      <Row>
                        <h4>Game Over</h4>
                      </Row>
                      <Row>
                        <p>The <span className='important-text'>"GameOver.cs"</span> is called at the end of a loosed battle. When it's called it recall the GameOver scene</p>
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