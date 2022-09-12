import React from 'react'
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText, Switch} from  '@mui/material';
import { AccountBox, Home, ModeNight, Settings } from '@mui/icons-material';
const Sidebar = ({mode,setMode}) => {
  return (
   <Box flex={1} p={2} sx={{ display:{xs:"none",sm:'block'}}} >
     <Box position="fixed"  >  
<List   >
 
  <ListItem  disablePadding >
    <ListItemButton sx={{display:'flex'}} component='a' href="#Home" >
      <ListItemIcon>
       <Home />
      </ListItemIcon>
 <ListItemText primary="Homepage " />
    </ListItemButton>
  </ListItem>

  <ListItem  disablePadding >
    <ListItemButton sx={{display:'flex'}} component='a' href="#settings" >
      <ListItemIcon>
       <Settings />
      </ListItemIcon>
 <ListItemText primary="settings " />
    </ListItemButton>
  </ListItem>

  <ListItem  disablePadding >
    <ListItemButton sx={{display:'flex'}} component='a' href="#Profile" >
      <ListItemIcon>
       <AccountBox />
      </ListItemIcon>
 <ListItemText primary="profile " />
    </ListItemButton>
  </ListItem>

  <ListItem  disablePadding >
    <ListItemButton sx={{display:'flex'}} >
      <ListItemIcon>
       <ModeNight />
      </ListItemIcon>
<Switch onChange= { e=>setMode ( mode ==='light' ? "dark" :"light") } />
    </ListItemButton>
  </ListItem>
</List>
</Box>
    </Box>  
  )
}

export default Sidebar