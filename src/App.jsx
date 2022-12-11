
import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import { ThemeSwitcher } from "./Theme/ThemeSwitcher";
import { Container } from "@mui/material";

export function App() {
  return (
    <ThemeSwitcher>
      <Navbar/>
      <Container>
        <Outlet/>
      </Container>
      <Footer/>
    </ThemeSwitcher>
  );
}
