import { Button } from "@mui/material";
import {Add} from '@mui/icons-material';
function App() {
  return ( <div className="App">
     Hello MUI
     <br/>
      <Button  size='small' startIcon={<Add />} color="secondary" variant="contained">hello</Button>
    </div>
  );
}

export default App;
