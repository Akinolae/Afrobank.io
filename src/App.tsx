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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
      path: "/user-dashboard",
      element: (
        <React.Suspense fallback={"...loading"}>
          <Main />
        </React.Suspense>
      ),
      index: true,
      public: true,
      children: [
        {
          index: true,
          path: "payment",
          element: <Profile />,
        },
      ],
    },
  ].map((data) => ({
    element: !data.public ? (
      <ProtectedRoute {...data}>{data.element}</ProtectedRoute>
    ) : (
      data.element
    ),
    path: data.path,
    errorElement: <ErrorBoundary />,
    public: data.public,
    children: !!data.children?.length ? data.children : [],
  }));

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {route.map((data, i) => {
          return (
            <React.Fragment key={i}>
              {data.public ? (
                <Route path={data.path} element={data.element} id={data.path} />
              ) : (
                <ProtectedRoute {...data}>
                  {data.path.includes("user-dashboard") && (
                    <Route path={data.path}>
                      {data.children.map((route, i) => {
                        return (
                          <Route
                            id={data.path}
                            key={i}
                            path={route.path}
                            element={route.element}
                          />
                        );
                      })}
                    </Route>
                  )}
                </ProtectedRoute>
              )}
            </React.Fragment>
          );
        })}
      </Route>
    ),
    {
      basename: "Afrobank",
    }
  );

  console.log(routes);
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
