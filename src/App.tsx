import React, { useState } from "react";
import Login from "./components/auth/login";
import Register from "./components/auth/register/register";
import Auth2fa from "./components/auth/auth2fa";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor, store as appStore } from "./@store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./protectedoute";
import "./@scss/index.scss";

function App() {
  const route = [
    {
      path: "/",
      element: <Login />,
      public: true,
    },
    {
      path: "/signup",
      element: <Register />,
      public: true,
    },
    {
      path: "/authenticate",
      element: <Auth2fa />,
      public: false,
    },
    {
      path: "/user-dashboard",
      element: (
        <React.Suspense fallback={"...loading"}>
          <p>Dashboard</p>
        </React.Suspense>
      ),
      public: false,
    },
  ].map((data) => ({
    element: !data.public ? (
      <ProtectedRoute {...data}>{data.element}</ProtectedRoute>
    ) : (
      data.element
    ),
    path: data.path,
  }));

  const routes = createBrowserRouter([...route]);

  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  );
}

export default App;
