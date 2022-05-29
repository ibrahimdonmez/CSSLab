import ReactDOM from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Border from '../src/components/Border/Border';
import Background from '../src/components/Background/Background';

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route
          path="/BorderLab"
          element={(
            <Border/>
          )}
        />
        <Route
          path="/BackgroundLab"
          element={(
            <Background/>
          )}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);