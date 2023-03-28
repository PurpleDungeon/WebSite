import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import images from "./img/adventureStory/images.js";

function App() {
  return (
    <div className="App">
      <div className="App-div-black d-flex align-items-center justify-content-center">
        <Container>
          <h1> Adventure Story </h1>
          <Row className="mt-5">
            <Col>
              <Row className="mb-3">
                <h2>Documentation:</h2>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h3>Game manager</h3>
                  </Row>
                  <Row>
                    <p>
                      The{" "}
                      <span className="important-text">"GameManager.cs" </span>
                      is the script that manages the various features of the
                      game.
                    </p>
                    <p>
                      It contains the Stats of the players, their coins and
                      alerts the various features the state of others.
                    </p>
                    <p>
                      This script is in charge of saving and loading data so
                      that the player can pause the game, and it contain and
                      manage player's items
                    </p>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Movement, Switching Scenes and Camera</h3>
                  </Row>
                  <Row>
                    <p>
                      Through the{" "}
                      <span className="important-text">
                        "PlayerController.cs"
                      </span>{" "}
                      script, player movements are managed. The script handles
                      user input, animations, and prevents the PG from leaving
                      the boundaries of the map.
                    </p>
                    <p>
                      Through the{" "}
                      <span className="important-text">
                        "ToArea.cs" and "FromArea.cs"
                      </span>{" "}
                      scripts, transitions between one scene and another are
                      handled. The "ToArea.cs" script is used to send a player
                      to another scene, while the "FromArea.cs" is used to
                      receive a player from another scene.
                    </p>
                    <p>
                      Through the{" "}
                      <span className="important-text">
                        "PlayerController.cs"
                      </span>{" "}
                      script, player movements are managed. The script handles
                      user input, animations, and prevents the PG from leaving
                      the boundaries of the map.
                    </p>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Audio System</h3>
                  </Row>
                  <Row>
                    <p>
                      Through the{" "}
                      <span className="important-text">"AudioManager.cs"</span>{" "}
                      the game can play and stop both Sound Effect and
                      Background Music in every situation (Enter a city,
                      starting a battle, using an attack and similar)
                    </p>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Quest System</h3>
                  </Row>
                  <Row>
                    <p>
                      With the{" "}
                      <span className="important-text">"QuestManager.cs"</span>{" "}
                      script the game save and manage a list of variable to
                      activate and deactivate some Quest Object
                    </p>
                    <p>
                      <span className="important-text">"QuestObject.cs"</span>{" "}
                      is the script that activate and deactivate other object in
                      the game based on the "QuestManager.cs" variables
                    </p>
                    <p>
                      <span className="important-text">"QuestMarker.cs"</span>{" "}
                      is in charge to call the "QuestManager.cs" to activate and
                      deactivare variables in various situations
                    </p>
                    <p>
                      In combo with the Dialog System the game can activate
                      quest even after a Dialogue
                    </p>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Dialog System</h3>
                  </Row>
                  <Row>
                    <p>
                      Through the{" "}
                      <span className="important-text">"DialogManager.cs"</span>{" "}
                      and "DialogActivator.cs" scripts, dialogs are managed. The
                      "DialogManager.cs" pops up the dialog box, the name box
                      when prompted, keeps the messages going, and closes the
                      dialog boxes when finished.
                    </p>
                    <p>
                      The{" "}
                      <span className="important-text">
                        "DialogActivator.cs"
                      </span>
                      , on the other hand, is responsible for calling the
                      "DialogManager.cs" only when appropriate by passing it the
                      dialog to appear.
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.dialogManager}></Image>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Player Stats</h3>
                  </Row>
                  <Row>
                    <p>
                      The <span className="important-text">"CharStats.cs"</span>{" "}
                      take care of keeping a player's stats saved. Through this
                      script you can heal your player or increase his
                      experience, which, if it reaches the right numbers, allows
                      leveling up and then increasing his stats, all managed by
                      this script.
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.stats}></Image>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Menu</h3>
                  </Row>
                  <Row>
                    <p>
                      With the{" "}
                      <span className="important-text">"GameMenu.cs"</span>{" "}
                      script you manage the In-Game Menu. Besides controlling
                      when to open or close it, it manages all the operation of
                      the menu and the various submenus:
                    </p>
                    <ul>
                      <li>Updates the stats of the players in the main menu</li>
                      <li>Opens and closes the submenus</li>
                      <li>Updates the stats of the Stats submenu</li>
                      <li>Displays Items in the Items menu</li>
                      <li>
                        Activates the Use and Discard functions of the Items
                        menu
                      </li>
                      <li>Allows you to close the game with the Quit button</li>
                    </ul>
                  </Row>
                  <Row>
                    <Image src={images.menu}></Image>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Items</h3>
                  </Row>
                  <Row>
                    <p>
                      With the{" "}
                      <span className="important-text">
                        "Item.cs", "ItemButton.cs" and "PickUpItem.cs"
                      </span>{" "}
                      scripts, the objects are managed.
                    </p>
                    <p>
                      The <span className="important-text">"Item.cs"</span>{" "}
                      script represents the various objects by containing all
                      the information and functions that the game and the player
                      need to use them.
                    </p>
                    <p>
                      The{" "}
                      <span className="important-text">"ItemButton.cs"</span>{" "}
                      represents the item in the various menus that can be used
                      in the game (Menu Items, Shop and the Battle menu Items).
                    </p>
                    <p>
                      The{" "}
                      <span className="important-text">"PickUpItem.cs"</span>{" "}
                      allows the player to pick up items from the ground.
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.items}></Image>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Shop</h3>
                  </Row>
                  <Row>
                    <p>
                      The{" "}
                      <span className="important-text">
                        "Shop.cs" and "ShopKeeper.cs"
                      </span>{" "}
                      scripts run the store system. "Shop.cs" manages the menu:
                    </p>
                    <ul>
                      <li>Opening and closing the menu</li>
                      <li>Opening and closing the Buy and Sell submenus</li>
                      <li>Allows the use of the Buy and Sell buttons.</li>
                    </ul>
                    <p>
                      The{" "}
                      <span className="important-text">"ShopKeeper.cs"</span>{" "}
                      script is used to activate the "Shop.cs" by passing it the
                      items that can be purchased by the player. The list of
                      items can be wired or received via API.
                    </p>
                  </Row>
                  <Row>
                    <Image src={images.shop}></Image>
                  </Row>
                </Col>
              </Row>
              <hr className="rounded"></hr>
              <Row>
                <Col>
                  <Row>
                    <h3>Battle System</h3>
                  </Row>
                  <Row>
                    <p>
                      It is probably the most important and longest part in an
                      RPG so it is necessary to analyze it by part
                    </p>
                  </Row>
                  <Row>
                    <Col>
                      <Row>
                        <h4>Battle Manager</h4>
                      </Row>
                      <Row>
                        <p>
                          The{" "}
                          <span className="important-text">
                            "BattleManager.cs"
                          </span>{" "}
                          script is the heart of the Battle System and contains
                          most of the functions needed to make battles work:
                        </p>
                        <ul>
                          <li>
                            Contains references to all the windows and other
                            objects that the Battle System needs
                          </li>
                          <li>
                            Contains all the information pertaining to the
                            current battle
                          </li>
                          <li>Brings up the battle screen</li>
                          <li>
                            Creates the various Battle Characters, both player
                            and NPCs
                          </li>
                          <li>Advances turns</li>
                          <li>Updates the status of the battle</li>
                          <li>Decides what NPCs are doing</li>
                          <li>Manages the damage taken and done</li>
                          <li>Updates the stats window</li>
                          <li>Manages the moves that can be used by players</li>
                          <li>
                            Opens the battle menus: Target, Magic and Items
                          </li>
                          <li>Updates the items in the battle menu Items</li>
                          <li>Activates the function to use items</li>
                          <li>
                            Activates the End of Battle and GameOver Coroutines
                          </li>
                        </ul>
                      </Row>
                      <Row>
                        <Image src={images.battleManager}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Characters and Boss</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleChar.cs"
                          </span>{" "}
                          manages the various players and NPCs that are in the
                          battle, contains their statistics, what moves they can
                          use, and some useful information and functions for the
                          program to function.
                        </p>
                        <p>
                          This script can be used to create some special enemys,
                          like boss and similar, by creating a new classes that
                          inherits from a BattleChar and then by overriding the
                          ChooseAttack method
                        </p>
                      </Row>
                      <Row>
                        <h4>Battle Move</h4>
                      </Row>
                      <Row>
                        <p>
                          The{" "}
                          <span className="important-text">
                            "BattleMove.cs"
                          </span>{" "}
                          is a className that handles the various moves, both
                          the normal Slash and the various spells.
                        </p>
                      </Row>
                      <Row>
                        <h4>Attack Effect</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "AttackEffect.cs"
                          </span>{" "}
                          handles the on-screen effects of attacks
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.attackEffect}></Image>
                      </Row>
                      <Row>
                        <h4>Select Target</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleTargetButton.cs"
                          </span>{" "}
                          handles the target on which the player wants to make
                          an attack
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.selectTarget}></Image>
                      </Row>
                      <Row>
                        <h4>Select Magic</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleMagicSelect.cs"
                          </span>{" "}
                          handles the player's choice of magic
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.selectMagic}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Notification</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleNotification.cs"
                          </span>{" "}
                          handles notifications that may appear during battle
                          such as the death of a player in the party or lack of
                          mana to do a spell
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.battleNotification}></Image>
                      </Row>
                      <Row>
                        <h4>Battle Starter</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleStarter.cs"
                          </span>{" "}
                          is used to start a battle. Depending on the three
                          Boolean fields it will call "BattleManager.cs" passing
                          it the list of enemies and rewards to appear by
                          randomly taking one of several saved enemy sets.
                        </p>
                      </Row>
                      <Row>
                        <h4>Battle Rewards</h4>
                      </Row>
                      <Row>
                        <p>
                          The script{" "}
                          <span className="important-text">
                            "BattleReward.cs"
                          </span>{" "}
                          is called at the end of a battle in case of victory.
                          When called it opens the rewards menu showing the
                          player what he got from the battle, when the menu
                          closes the script will add the various rewards to the
                          inventory and add experience to the players
                        </p>
                      </Row>
                      <Row>
                        <Image src={images.battleRewards}></Image>
                      </Row>
                      <Row>
                        <h4>Game Over</h4>
                      </Row>
                      <Row>
                        <p>
                          The{" "}
                          <span className="important-text">"GameOver.cs"</span>{" "}
                          is called at the end of a losing battle. When it's
                          called it recall the GameOver scene
                        </p>
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
          <Row className="mt-5">
            <Col>
              <Row className="mb-3">
                <h2>Gameplay:</h2>
              </Row>
              <Row>
                <video width="100%" height="100%" controls poster={images.dialogManager}>
                  <source src={images.gamePlay} type="video/mp4" />
                </video>
              </Row>
              <Row>
                <h3>Online Demo</h3>
                <p>You can try the game online. The porting is only a beta, so it can have bugs.</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a className="cta" href="https://adventurestory.purpledungeon.com">
                    <span>Web Demo</span>
                    <span>
                      <svg
                        width="50px"
                        height="30px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#1c1c1d" fillRule="evenodd">
                          <path
                            className="one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                            fill="#1c1c1d"
                          ></path>
                          <path
                            className="two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                            fill="#1c1c1d"
                          ></path>
                          <path
                            className="three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                            fill="#1c1c1d"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
