import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
