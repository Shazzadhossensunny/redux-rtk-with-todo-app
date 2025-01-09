import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
