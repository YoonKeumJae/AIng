import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@pages/Layout";
import Info from "@pages/Info";
import Notice from "@pages/Notice";
import Calendar from "@pages/Calendar";
import Gallery from "@pages/Gallery";
import Home from "@pages/Home";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import URPLayout from "@pages/URP/URPLayout";
import ProtectRouter from "@routes/ProtectRouter";
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
    {
      path: "/URP",
      element: (
        <ProtectRouter>
          <URPLayout />
        </ProtectRouter>
      ),
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
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
