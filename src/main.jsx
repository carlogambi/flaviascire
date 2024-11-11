import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from "./pages/Main";
import { AboutPage } from "./pages/About";
import { PostPage } from "./pages/Post";
import { WorksPage } from "./pages/Works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  }, {
    path: "/about/",
    element: <AboutPage/>,
  },
  {
    path: "/post/:postId/",
    element: <PostPage/>,
  },
  {
    path: "/works/",
    element: <WorksPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);