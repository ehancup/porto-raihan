import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import { Navbar } from "./components/navbar";
// import { Cursor } from "./components/cursor";
import Comp from "./page/comp";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <Router>
      <Navbar/>
      {/* <Cursor/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comp" element={<Comp/>}/>
      </Routes>
    </Router>
  );
}



export default App;
