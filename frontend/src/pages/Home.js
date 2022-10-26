import React from 'react'
import Hero from '../components/Hero'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';  
import Container from '@mui/material/Container';  
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import BalanceIcon from '@mui/icons-material/Balance';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const titleStyled = {
  
  fontWeight: "bold"
}

const cardStyled = {
  border: "1px solid #ffc107",
  borderRaduis: "10px"
}

function Home() {
  return (
    <div>
      <Hero/>
      <Divider sx={{margin: "60px auto"}} />
      <Box sx={{
        margin: "80px auto",
        textAlign: "center",
      }}>
        <Typography variant="h3" color={"primary"} gutterBottom sx={titleStyled}>
          See <span className='text-warning'> millions</span> of others
        </Typography>
        <Typography variant="p" color={"error"} gutterBottom sx={{margin: "20px auto", padding: "20px auto"}}>
            Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in
            good company on Blogger. Sign up to discover why millions of people 
            have published their passions here.
        </Typography>
        <div>
          <Link to="/feeds">
            <Button variant="contained" color='error' sx={{margin: "20px 0"}}>Get Start</Button>
          </Link>
        </div>
      </Box>
      <Divider />
      <div className='bg-warning py-5 text-light'>
      <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
            <div className='text-center'>
                <img src='img1.png' alt='sleep' height={400}/>
            </div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} >
            <div className='text-center'>
                <Typography variant="h2" color={"white"} gutterBottom sx={titleStyled}>
                    User  <span className='text-primary'>Friendly</span>
                </Typography>
               <strong>Contrary to popular belief,</strong> Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                <div >
                  <Stack direction="row" spacing={6} className="py-5">
                    <Grid item xs={12}  sm={12} md={4} lg={3}>
                      <Card sx={cardStyled}>
                        <CardContent>
                          <List>
                            <ListItem
                              disableGutters
                              secondaryAction={
                                <IconButton aria-label="">
                                  <BalanceIcon color='secondary'/>
                                </IconButton>
                              }
                            >
                              <ListItemText primary={`Serve`} />
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card> 
                    </Grid> 
                    <Grid item xs={12}  sm={12} md={4} lg={3}>
                      <Card sx={cardStyled}>
                        <CardContent>
                          <List>
                            <ListItem
                              disableGutters
                              secondaryAction={
                                <IconButton aria-label="">
                                  <BeachAccessIcon color='error'/>
                                </IconButton>
                              }
                            >
                              <ListItemText primary={`Best`} />
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card> 
                    </Grid> 
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                      <Card sx={cardStyled}>
                        <CardContent>
                          <List>
                            <ListItem
                              disableGutters
                              secondaryAction={
                                <IconButton aria-label="">
                                  <CameraAltIcon color='primary' />
                                </IconButton>
                              }
                            >
                              <ListItemText primary={`Top`} />
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card> 
                    </Grid>           
                  </Stack>
                </div>
            </div>
            </Grid>
        </Grid>
        </Box>
        </Container>
        </div>
    </div>
  )
}

export default Home