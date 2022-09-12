import React from 'react';
import {Avatar,List,ListItemText,Divider,ListItemAvatar, AvatarGroup, Box ,ImageList,ImageListItem,ListItem,Typography} from  '@mui/material';
const Rightbar = () => {
  return (
   
    <Box  p={2} flex={2} sx={{ display:{xs:"none",sm:'block'}}} >
      <Box position="fixed" variant="h6" font-weight={100} width={300} > 
<Typography   >
  Online Friends
</Typography>

<AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/6.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/7.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/9.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/10.jpg" />
</AvatarGroup>
<Typography mt={2} mb={2}>
  Latest Posts
</Typography>
<ImageList   cols={3} rowHeight={100}>
  <ImageListItem   >
<img  alt="" src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?w=161&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=161&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=161&fit=crop&auto=format" />  
  </ImageListItem>
  <ImageListItem>
<img  alt="" src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=250&h=200&fit=crop&auto=format"/>  
  </ImageListItem>
</ImageList>
<Typography mt={2} mb={2}>
  Conversations
</Typography>

<List  sx={{  width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    
</Box>

    </Box>
  )
}  

export default Rightbar