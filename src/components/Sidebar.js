import React from 'react'
import {Box} from  '@mui/material';
const Sidebar = () => {
  return (
    <Box bgcolor='red' p={2} fex={1}  
    sx={{ display:{xs:"none",sm:'block'}}} 
    >Sidetbar</Box>
  )
}

export default Sidebar