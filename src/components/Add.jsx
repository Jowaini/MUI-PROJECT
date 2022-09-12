import React, { useState } from 'react';
import {Box,styled,Typography,TextField, Fab,Modal,Tooltip, Avatar, Stack, ButtonGroup, Button} from '@mui/material';
import {Add as AddIcon, EmojiEmotions, Image, VideoCameraBack,PersonAdd, DateRange} from '@mui/icons-material';

const StyledModal = styled(Modal)({
display:'flex',
alignItems:'center',
justifyContent:'center'


});
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',})
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
   <Tooltip  onClick={e=>setOpen(true)}  title="Add Post" sx={{position:'fixed',bottom:20, left:{xs:"calc(50% - 25px)", md:30 }}} >
<Fab
color="primary" aria-label="add">
  <AddIcon />
</Fab>
    </Tooltip>


<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box marginTop={5} p={3} height={280} width={400} borderRadius={5}  color={'text.primary'} bgcolor={"background.default"} > 
  <Typography variant='h6' color="gray" textAlign='center'  >
    Create Post
  </Typography>
  <UserBox>
    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
<Typography>
Travis Howard

</Typography>
  </UserBox>
    <TextField  sx={{width:"100%"}} 
    id='satandar-multiline-static'
    label="Multiline"
    multiline
    rows={2  }
    placeholder="Whats on your Mind?"
    variant='standard'
    />
<Stack direction="row" gap={1} mt={2} mb={3} >
  <EmojiEmotions color="primary" />
  <Image color="secondary" />
  <VideoCameraBack color="success" />
  <PersonAdd />
</Stack>
<ButtonGroup fullWidth variant="contained"
aria-label="outlined primary buttin group" >
  <Button >Post</Button>
  <Button sx={{width:'100px'}}><DateRange/> </Button>
</ButtonGroup>


   </Box>
</StyledModal>

</>
  )
}

export default Add