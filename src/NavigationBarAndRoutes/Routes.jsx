import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../components/Pages/about_page/about";
import DownloadApps from "../components/Pages/download_apps_page/download_apps";
import HomePage from "../components/Pages/home_page/home";
import Shortcuts from "../components/Pages/shortcuts_page/shortcuts";
import "./navigation_bar_style.css";

const MyRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<Shortcuts />} path="/shortcuts" exact />
          <Route element={<DownloadApps />} path="/appsdownload" exact />
          <Route element={<About />} path="/about" exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;