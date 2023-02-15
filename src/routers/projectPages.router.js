import PurpleDungeonWebsite from "../pages/projectPages/purpleDungeonWebsite";
import AdventureStory from "../pages/projectPages/adventureStory";

let routes = [
    {
        path: "/purpleDungeonWebsite",
        element: <PurpleDungeonWebsite />,
    },
    {
        path: "/adventureStory",
        element: <AdventureStory />,
    },
];

export default routes;
