
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export function App() {
  return (
      <div className="App">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  );
}
