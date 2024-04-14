import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@pages/Layout";
import Info from "@pages/Info";
import Notice from "@pages/Notice";
import Calendar from "@pages/Calendar";
import Gallery from "@pages/Gallery";
import Home from "@pages/Home";
import GlobalStyle from "./GlobalStyle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "info",
          element: <Info />,
        },
        {
          path: "notice",
          element: <Notice />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
