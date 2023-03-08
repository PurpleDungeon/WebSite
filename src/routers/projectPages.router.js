import PurpleDungeonWebsite from "../pages/projectPages/purpleDungeonWebsite";
import AdventureStory from "../pages/projectPages/adventureStory";
import Roguelike from "../pages/projectPages/roguelike";

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
    }
];

export default routes;
