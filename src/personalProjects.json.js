import adventureStory from './img/projects/adventureStory/pic1.png';
import werewolf from './img/projects/werewolf/pic1.jpeg';
import simpleChat from './img/projects/simpleChat/pic1.png';
import evaPlatform from './img/projects/evaPlatform/pic1.png';
import donateFor from './img/projects/donateFor/pic1.png';
import aste from './img/projects/aste/pic1.png';
import roguelike from './img/projects/roguelike/pic1.jpeg';

let json = [{
    "id": 1,
    "src": adventureStory,
    "name": "Adventure Story",
    "caption": "A simple RPG game based on Dragon Quest 1. The game is written in C# and uses the Unity engine. The game is only a sandbox and is not a complete game. It was made for a school project.",
    "gitHub": "https://github.com/MurasakiSimema/RPGEsame",
    "link": "/adventureStory"
  }, {
    "id": 2,
    "src": werewolf,
    "name": "Werewolf",
    "caption": "A Telegram bot that allows you to play the game WereWolf in a Group. The game is written in NodeJs and uses the node-telegram-bot-api node module. It was made for a school project.",
    "gitHub": "https://github.com/MurasakiSimema/botwerewolf",
    "link": "/werewolf"
  }, {
    "id": 3,
    "src": simpleChat,
    "name": "Simple Chat",
    "caption": "A simple console chat that allows you to send message to other people on the same computer. The chat is written in NodeJs and uses the enquirer node module. It was made for a school project.",
    "gitHub": "https://github.com/MurasakiSimema/SimpleChat",
    "details": "The chat is written in NodeJs and uses the enquirer node module. It was made for a school project."
  }, {
    "id": 4,
    "src": evaPlatform,
    "name": "Eva Platform",
    "caption": "A simple platform game like the google dinosaur game. The game is written in HTML, Javascript and CSS. It was made for a school project. There are some eastereggs in the game, try some password.",
    "gitHub": "https://github.com/MurasakiSimema/EvaPlatform",
    "details": "The game is written in HTML, Javascript and CSS. It was made for a school project. There are some eastereggs in the game, try some password."
  }, {
    "id": 5,
    "src": donateFor,
    "name": "Donate For",
    "caption": "A simple crowdfunding platform. The platform is written in PHP and use the Paypal's API for the payment sections. It was made for a school project with some classmates. Unfortunately some minor fix are lost on the school's servers.",
    "gitHub": "https://github.com/CrowdfoundingCrew/Crowdfounding",
    "link": "/donateFor"
  }, {
    "id": 6,
    "src": aste,
    "name": "Aste",
    "caption": "A simple Windows' application that permit to view and edit a list of artifact for an auction house. The application is a Windows App Form written in C# (.NET Framework) and uses a SQL Database. It was made for a school exam.",
    "gitHub": "https://github.com/MurasakiSimema/Aste",
    "details": "The application is a Windows App Form written in C# (.NET Framework) and uses a SQL Database. It was made for a school exam."
  }, {
    "id": 7,
    "src": roguelike,
    "name": "Roguelike",
    "caption": "A simple roguelike game. The game is written in C# and uses the Unity engine. Currently it is still work in progress.",
    "gitHub": "",
    "link": "/roguelike"
  }]

export default json;