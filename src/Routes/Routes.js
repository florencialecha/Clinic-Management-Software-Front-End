import { Contact } from './Contact';
import { Detail } from './Detail';
import { Favs } from './Favs';
import { Home } from './Home';

// import GoogleIcon from '@mui/icons-material/Google';

export const routes = [
    { id: 1, path: "/", Element: Home, title: "Home" },
    { id: 2, path: "/home", Element: Home, title: "Home" },
    { id: 3, path: "/contact", Element: Contact, title: "Contact" },
    { id: 4, path: "/favs", Element: Favs, title: "Contact" },
    { id: 5, path: "/dentist/:id", Element: Detail, title: "Dentist Detail" }
  ]
  
//   export const socialNetwork = [
//     { linkto: "www.google.com", snTitle: "Google", Icon: GoogleIcon }
//   ]