import { addFav } from "../utils/Storage";

import { Link as RouterLink } from "react-router-dom";

import { Button, Link, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Card = ({ id, name, username }) => {

  const handleClick = () => {
    addFav({
      id: id,
      name: name,
      username: username,
    })

    alert(`${name} was added to favorites`)
  }

  return (
    <Box sx={{p: 1, backgroundColor: 'primary.main', borderWidth: 1, borderStyle: 'solid'}}>
      <img src="./images/doctor.jpg" alt="Doctor" className="img-card" style={{width: '100%'}} />
      <Stack spacing={1}>
        <Typography align='center'>
          <Link component={RouterLink} to={`/dentist/${id}`} variant="subtitle" color="secondary" underline="none">{name}</Link>
        </Typography>
        <Typography color='secondary' variant='subtitile' textAlign={'center'}>
          {username}
        </Typography>
        <Button onClick={handleClick} variant="fullwidth-button" startIcon={<StarBorderIcon />} color={'secondary'} >
          ADD FAV
        </Button>
      </Stack>
    </Box>
  );
};

export default Card;
