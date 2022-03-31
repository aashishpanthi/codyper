import React from "react";
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1 style={{margin: "20% auto", textAlign: "center"}}>404 Page Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
