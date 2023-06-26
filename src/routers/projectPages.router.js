import PurpleDungeonWebsite from "../pages/projectPages/purpleDungeonWebsite";
import AdventureStory from "../pages/projectPages/adventureStory";
import Roguelike from "../pages/projectPages/roguelike";
import Werewolf from "../pages/projectPages/werewolf";
import DonateFor from "../pages/projectPages/donateFor";

let routes = [
    {
        path: "/purpleDungeonWebsite",
        element: <PurpleDungeonWebsite />,
    },
    {
        path: "/adventureStory",
        element: <AdventureStory />,
    },
    {
        path: "/roguelike",
        element: <Roguelike />,
    },
    {
        path: "/werewolf",
        element: <Werewolf />,
    },
    {
        path: "/donateFor",
        element: <DonateFor />,
    },
];

export default routes;
