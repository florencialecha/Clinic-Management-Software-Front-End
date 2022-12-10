import React from 'react'
import { Link } from 'react-router-dom'
import { navBar } from '../../Routes/NavBarItems'

import AppBar from'@mui/material/AppBar'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';

import { Grid, IconButton, Typography } from "@mui/material";
import { Brightness4 as LightIcon } from "@mui/icons-material";
import { useScrollTrigger } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Para que empuje el contenido del siguiente elemento y no lo tape.

export const Navbar = () => {

 return (
  <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <ListItem>
            <Grid container justifyContent={'flex-start'}>
              <Tab 
                href='/'
                label={'DH Odonto'} 
                showLabel={true}
              />
            </Grid>
            <Grid container justifyContent={'flex-end'}>
              {navBar.map((item) => (
                <Tab
                  key={item.id} 
                  label={item.label} 
                  href={item.path} 
                  icon={item.Icon} 
                  showLabel={true}
                />
              ))}
              <IconButton>
                <LightIcon/>
              </IconButton>
            </Grid>
          </ListItem>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )

}