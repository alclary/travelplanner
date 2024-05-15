import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./pages/Home";
import "./App.css";
import ExperienceSearch from "./pages/ExperienceSearch";
import TripPage from "./pages/TripPage";
import LoginForm from "./pages/Login";
import { gapi } from "gapi-script";
import ResponsiveAppBar from "./components/Navbar/Navbar";
const clientId =
  "370617990760-0a454d3po46q4jkntns96pnov7ngfqev.apps.googleusercontent.com";

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div className="home-body">
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/ExperienceSearch" element={<ExperienceSearch />} />
          <Route
            path="/TripPage"
            element={
              <TripPage
                trip={{
                  id: 1,
                  name: "First Test Trip",
                  description: "Super awesome trip.",
                  user_id: 1,
                  createdAt: "2024-04-20T11:57:45.000Z",
                  updatedAt: "2024-04-20T13:09:36.000Z",
                }}
              />
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
