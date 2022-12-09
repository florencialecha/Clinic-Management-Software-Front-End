
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
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
