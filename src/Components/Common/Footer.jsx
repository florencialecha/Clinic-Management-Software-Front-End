import React from 'react'

import { footer } from '../../Routes/FooterItems'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';
import { IconButton } from '@mui/material';

const Footer = () => {


  return (
    <Grid position={'fixed'}>
      <Box sx={{backgroundColor: 'primary.main', p: 2}}>
        <Stack direction="row" spacing={2}>
              {footer.map((item) => (
                <IconButton
                  color='secondary'
                  key={item.id}
                  href={item.route}
                >
                  {item.Icon}
                </IconButton>
              ))}
            </Stack>
        <Toolbar>
          <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' style={{width: 200}} />
        </Toolbar>
      </Box>
    </Grid>
  )
}

export default Footer;
