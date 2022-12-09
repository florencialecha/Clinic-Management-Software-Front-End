
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Grid from '@mui/system/Unstable_Grid';

export function App() {
  return (
      <Grid>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </Grid>
  );
}
