import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import Parse from "./services/parseService";
// import Config from './views/Config';

// import { TextPipeline, ImagePipeline } from "./views/Report";
import { ImagePipeline } from "./views/Report";
import { Login, Signup } from "./views/Auth/Authentication";
import Uploads from "./views/FileUploader/Uploads";

import i18n from "./i18n";
import Dashboard from "./views/Pages/Dashboard";
import Extractor from "views/csvextractor/Extractor";
import { auth } from "services";
const App = (props) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {auth.getCurrentUser() ? (
            <Route
              exact
              path={`/${auth.getCurrentUser().id}/tags`}
              element={<Extractor />}
            />
          ) : null}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Uploads />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          {/* <Route exact path="/text" element={<TextPipeline />} /> */}
          {/* <Route exact path="/image" element={<ImagePipeline />} /> */}
          {/* <Route exact path="/config" element={<Config />} /> */}
        </Routes>
      </Router>
    </I18nextProvider>
  );
};
export default App;
