import DashboardHeader from "../components/DashboardHeader";
import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

const Dashboard = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setAuthenticated(loggedInUser);
  //   }
  // }, []);
  const username = localStorage.getItem("username");
  const loggedInUser = localStorage.getItem("authenticated");
  if (!loggedInUser) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <DashboardHeader/>
        <h1 className="text-center main-title">Welcome {username}!</h1>
      </div>
    );
  }
};
export default Dashboard;