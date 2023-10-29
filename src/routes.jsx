import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Country from "./pages/Country.jsx";

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
