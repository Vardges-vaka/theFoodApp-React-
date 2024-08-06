import React from "react";
import "./App.css";
import Landing from "./pages/landing";
import ErrorBoundary from "./ErrorBoundary";
export const UserContext = React.createContext();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
