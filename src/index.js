import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "atropos/css";
import { ParallaxProvider } from 'react-scroll-parallax';

import projectPages from "./routers/projectPages.router.js";
import SimoneBergonzi from "./pages/simoneBergonzi.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    ...projectPages,
    {
        path: "/simoneBergonzi",
        element: <SimoneBergonzi />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ParallaxProvider>
            <RouterProvider router={router} />
        </ParallaxProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
