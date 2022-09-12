import React, { useState }  from "react";
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar'
import { Box, Stack,createTheme,ThemeProvider } from "@mui/material";
import Add from './components/Add';
function App() {
const [mode,setMode] = useState('light');
const darkTheme = createTheme({
palette:{
  mode: mode
}
})
  return ( 
    <ThemeProvider theme={darkTheme}>

   
  <Box color={'text.primary'} bgcolor={"background.default"} >
< Navbar /> 
  <Stack direction='row' spacing={2} justifyContent='space-between'>
     <Sidebar setMode={setMode} mode={mode} />
     <Feed />
     <Rightbar />
  </Stack>
  <Add />
    </Box>
     </ThemeProvider>
    ); 
}

export default App;
