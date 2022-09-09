import React from 'react'
import {AppBar,styled, Toolbar, Typography} from  '@mui/material';
import { Pets } from '@mui/icons-material';

const navbar = () => {
 const StyledToolbar = styled(Toolbar)({
display:"flex",
justifyContent:"Space-between"

 });
 
    return (
   
<AppBar position='sticky '>
    <StyledToolbar>
        <Typography sx={{display:{xs:'none',sm:'block'}}} variant="h6"> REACTJS MUI</Typography>
<Pets  />
    </StyledToolbar>
</AppBar>


  )
}

export default navbar