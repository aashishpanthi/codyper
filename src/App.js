import React from "react";
// import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
