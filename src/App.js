import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import { TextPipeline } from "./views/Report";
import { Login, Signup } from "./views/Auth/Authentication";

import i18n from "./i18n";
import Dashboard from "./views/Pages/Dashboard/Dashboard";
import Extractor from "views/csvextractor/Extractor";
import { auth } from "services";
import { home, dashboard, tags, login, signup, report } from "./services/paths";
import Home from "views/Pages/Home/Home";
const App = (props) => {
  useEffect(() => {
    auth.getCurrentUser() && auth.getCurrentUser().fetch();
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        {auth.getCurrentUser() ? (
          <Routes>
            <Route exact path={tags} element={<Extractor />} />
            <Route exact path={dashboard} element={<Dashboard />} />
            <Route exact path={report} element={<TextPipeline />} />
          </Routes>
        ) : null}
        <Routes>
          <Route exact path={login} element={<Login />} />
          <Route exact path={signup} element={<Signup />} />
          <Route exact path={home} element={<Home />} />

          {/* <Route exact path="/text" element={<TextPipeline />} /> */}
          {/* <Route exact path="/image" element={<ImagePipeline />} /> */}
          {/* <Route exact path="/config" element={<Config />} /> */}
        </Routes>
      </Router>
    </I18nextProvider>
  );
};
export default App;
