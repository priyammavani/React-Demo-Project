import React from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Weather from "./pages/Weather";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const AppWrapper = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <PageNotFound /> },
    { path: "/signup", element: <Signup /> },
    { path: "/weather", element: <Weather /> }
  ]);
  return routes;
};

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppWrapper />
      </Router>
    </div>
  );
};

export default App;
