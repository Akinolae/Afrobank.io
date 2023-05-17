import "./@scss/index.scss";
import Main from "./components/dashboard";
import React from "react";
import Login from "./components/auth/login";
import LogOut from "./components/auth/logOut";
import Auth2fa from "./components/auth/auth2fa";
import Homepage from "./components/pages/homepage/Homepage";
import Register from "./components/auth/register/register";
import { Provider } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./protectedoute";
import { initializeIcons } from "@fluentui/react";
import { AnimatePresence } from "framer-motion";
import { persistor, store as appStore } from "./@store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/dashboard/profile";

initializeIcons();

function App() {
  const route = [
    {
      path: "/",
      element: <Homepage />,
      public: true,
    },
    {
      path: "/login",
      element: <Login />,
      public: true,
    },
    {
      path: "/sign-out",
      element: <LogOut />,
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
      public: true,
    },
    {
      path: "user-dashboard/*",
      element: (
        <React.Suspense fallback={"...loading"}>
          <Main />
        </React.Suspense>
      ),
      index: true,
      public: true,
      // children: [
      //   {
      //     index: true,
      //     path: "payment",
      //     element: <Profile />,
      //   },
      // ],
    },
  ].map((data) => ({
    element: !data.public ? (
      <ProtectedRoute {...data}>{data.element}</ProtectedRoute>
    ) : (
      data.element
    ),
    path: data.path,
    errorElement: <ErrorBoundary />,
  }));

  const routes = createBrowserRouter([...route], {
    basename: "/Afrobank",
  });

  return (
    <AnimatePresence>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routes} />
        </PersistGate>
      </Provider>
    </AnimatePresence>
  );
}

export default App;
