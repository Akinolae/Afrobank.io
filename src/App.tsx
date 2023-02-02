import { useState } from "react";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
