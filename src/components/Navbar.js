import React,{ useState} from 'react';
import {AppBar,Menu,styled,MenuItem, InputBase,Toolbar,Badge,
    Avatar, Typography} from  '@mui/material';
import { Pets,Mail,Notifications } from '@mui/icons-material';

const Navbar = () => {

const [open, setOpen] = useState(false)


 const StyledToolbar = styled(Toolbar)({
display:"flex",
justifyContent:"Space-between"

 });
 const Search = styled("div")(({theme}) =>({
backgroundColor:'white',
padding:'0 10px',
borderRadius: theme.shape.borderRadius,
width:'40%'
 }));
 const Icons = styled('box')(({theme})=>({
    display:'none',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{display:'flex'}
 }));
 const UserBox = styled('Box')(({theme}) =>({
     dispay:'flex',
[theme.breakpoints.up("sm")] :{display:'none'}


 }))
 
    return (
   
<AppBar position='sticky'>
    <StyledToolbar>
        <Typography sx={{display:{xs:'none',sm:'block'}}} variant="h6"> REACTJS MUI</Typography>
<Pets   sx={{display:{xs:'block',sm:'none'}}}/>
   <Search><InputBase placeholder='Search...' /></Search>
   <Icons>
<Badge  color='error' badgeContent={4}  >
<Mail  />

</Badge>
<Badge badgeContent={2} color="error" >
    <Notifications  />

</Badge> 
<Avatar sx={{height:30,width:30}}alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"  onClick={e=>setOpen(true)} />
   </Icons>
   <UserBox>
       <Avatar sx={{height:30,width:30}} alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
<Typography variant="primary" onClick={e=>setOpen(true)} > Travis Howard </Typography>
   </UserBox>

    </StyledToolbar>
    <Menu  
open={open}
onClose={e=>setOpen(false)}
anchorOrigin={{
    vertical:'top',
    horizontal:'right'
}}
transformOrigin={{
    vertical:'top',
    horizontal:'right'
}} >
    <MenuItem >Profile</MenuItem>
    <MenuItem>My account</MenuItem>
    <MenuItem>Logout</MenuItem>
    </Menu>
</AppBar>


  )
}

export default Navbar