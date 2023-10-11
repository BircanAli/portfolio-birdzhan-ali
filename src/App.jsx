import { Layout, Home, About, Projects, Contacts } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const checkDarkTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isEnableDarkTheme = checkDarkTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout isEnableDarkTheme={isEnableDarkTheme} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
