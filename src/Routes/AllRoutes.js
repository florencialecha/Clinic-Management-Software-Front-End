import { Contact } from '../Pages/Contact';
import { Detail } from '../Pages/Detail';
import { Favs } from '../Pages/Favs';
import { Home } from '../Pages/Home';

// import GoogleIcon from '@mui/icons-material/Google';

export const findRouteById = (id) => internalRoutes.find((route) => route.id === id); 
export const findRouteByTitle = (title) => internalRoutes.find((route) => route.title === title); 

export const internalRoutes = [
  { id: 1, path: "/", Element: Home, title: "Index" },
  { id: 2, path: "/home", Element: Home, title: "Home" },
  { id: 3, path: "/contact", Element: Contact, title: "Contact" },
  { id: 4, path: "/favs", Element: Favs, title: "Favs" },
  { id: 5, path: "/dentist/:id", Element: Detail, title: "Dentist Detail" }
];

export const externalRoutes = [
  { linkto: "www.google.com", snTitle: "Google", Icon: 'GoogleIcon' }
];