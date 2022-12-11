import { Contact } from '../Pages/Contact';
import { Detail } from '../Pages/Detail';
import { Favs } from '../Pages/Favs';
import { Home } from '../Pages/Home';


import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import GradeIcon from '@mui/icons-material/Grade';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export const findInternalRouteByLabel = (label) => internalRoutes.find((route) => route.label === label); 
export const findExternalRouteByLabel = (label) => externalRoutes.find((route) => route.label === label); 

export const internalRoutes = [
  { id: 1, path: "/", Icon: <HomeIcon color="secondary" />, Element: Home, label: "Index" },
  { id: 2, path: "/home", Icon: <HomeIcon />, Element: Home, label: "Home" },
  { id: 3, path: "/contact", Icon: <EmailIcon />, Element: Contact, label: "Contact" },
  { id: 4, path: "/favs", Icon: <GradeIcon />, Element: Favs, label: "Favs" },
  { id: 5, path: "/dentist/", Icon:'', Element: Detail, label: "DentistBy" },
  { id: 5, path: "/dentist/:id", Icon: '', Element: Detail, label: "DentistById" }
];

export const externalRoutes = [
  { id: 1, Icon: <FacebookIcon />, label: 'Facebook', route: 'https://www.facebook.com/', },
  { id: 2, Icon: <InstagramIcon />, label: 'Instagram', route: 'https://www.instagram.com/', },
  { id: 3, Icon: <WhatsAppIcon />, label: 'WhatsApp', route: 'https://www.whatsapp.com/', },
  { id: 4, Icon: <MusicNoteIcon />, label: 'TikTok', route: 'https://www.tiktok.com/en/', },
  { id: 5, Icon: '', label: 'DigitalHouse', route: 'https://www.digitalhouse.com/', },
];