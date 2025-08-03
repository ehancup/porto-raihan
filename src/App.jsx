import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./page/home";
import { Navbar } from "./components/navbar";
// import { Cursor } from "./components/cursor";
import Comp from "./page/comp";
import Projects from "./page/projects";
import { AnimatePresence } from "framer-motion";
import Transition from "./transition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/comp"
          element={
            <Transition>
              <Comp />
            </Transition>
          }
        />
        <Route
          path="/projects"
          element={
            <Transition>
              <Projects />
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  // const location = useLocation()

  return (
    <Router>
      <Navbar />
      {/* <Cursor/> */}
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
