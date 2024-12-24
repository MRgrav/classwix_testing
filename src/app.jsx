import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import PopSolidManager from "./components/PopSolid/PopSolidManager";

export default function App() {
  return (
    <Router
      root={props => (
        <PopSolidManager>
          <Navbar />
          <Suspense>{props.children}</Suspense>
          <Floating />
          <Suspense><Footer /></Suspense>
        </PopSolidManager>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
