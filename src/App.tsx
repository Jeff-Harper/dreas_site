import { Outlet } from "react-router-dom";

import "./App.css";
import Nav from "./components/ui/Nav";

export default function App() {
  return (
    <>
      <div>Hello world!!!</div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
