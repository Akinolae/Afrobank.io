import { useState } from "react";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreWrapper } from "./@store";

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
  ]);

  return (
    <StoreWrapper initialState={{ name: "" }}>
      <RouterProvider router={routes} />
    </StoreWrapper>
  );
}

export default App;
