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
import Dashboard from "./components/dashboard/dashboard";
import SendMoney from "./components/dashboard/sendMoney";
import Settings from "./components/dashboard/settings";
import Profile from "./components/dashboard/profile";
import Payment from "./components/dashboard/payment";

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
      public: false,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "send",
          element: <SendMoney />,
        },
        {
          path: "transactions",
          element: <Settings />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ].map((data) => ({
    element: data.element,
    path: data.path,
    errorElement: <ErrorBoundary />,
    public: data.public,
    children: !!data.children?.length ? data.children : [],
  }));

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {route.map((data, ind) => {
          const isDashboard = data.path.includes("/user-dashboard");
          return (
            <React.Fragment key={ind}>
              {data.public ? (
                <Route path={data.path} element={data.element} id={data.path} />
              ) : (
                <React.Fragment>
                  {isDashboard && (
                    <Route
                      path="/user-dashboard"
                      element={
                        <ProtectedRoute>
                          <Main />
                        </ProtectedRoute>
                      }
                    >
                      {data.children.map((route, i) => {
                        const id = String(i + 1);
                        return (
                          <Route
                            id={id}
                            key={i}
                            path={route.path}
                            element={route.element}
                            errorElement={data.errorElement}
                            index={!route.path ? true : false}
                          />
                        );
                      })}
                    </Route>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })}
      </Route>
    ),
    {
      basename: "/Afrobank",
    }
  );

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
