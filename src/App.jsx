
import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import { ThemeSwitcher } from "./Theme/ThemeSwitcher";

export function App() {
  return (
    <ThemeSwitcher>
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    </ThemeSwitcher>
  );
}
