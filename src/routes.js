import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Country from "./pages/Country";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/pays/:nomDuPays",
        element: <Country />,
      },
    ],
  },
];

export default routes;
