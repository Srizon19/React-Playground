import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Github, { githubInfoLoader } from "./components/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         path: "",
//         element: <Home></Home>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//       {
//         path: "/contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user" element={<User></User>}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github></Github>}
      ></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </StrictMode>
);
