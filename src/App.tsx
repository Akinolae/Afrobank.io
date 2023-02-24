import { useState } from "react";
import Login from "./components/auth/login";
import Register from "./components/auth/register/register";
import Auth2fa from "./components/auth/auth2fa";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreWrapper } from "./@store";
import "./@scss/index.scss";

function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
    {
      path: "/authenticate",
      element: <Auth2fa />,
    },
  ]);

  const initialState = {
    token: "",
    userDetails: "",
    cards: [],
    isSignedIn: false,
    transactions: [],
  };

  return (
    <StoreWrapper initialState={initialState}>
      <RouterProvider router={routes} />
    </StoreWrapper>
  );
}

export default App;
