import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';  
import {Link} from 'react-router-dom'
import { motion} from 'framer-motion'

const styledContainer = {
  margin: "80px auto",
  textAlign: "center",
}

const titleStyled = {
  fontWeight: "bold"
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <motion.section
    initial={{x: '-100vw'}}
    animate={{x: 0}}
    transition={{delay: 0.5}}
    >
    <Container sx={styledContainer}>
      <Box>
      <Typography variant="h3" color={"primary"} gutterBottom sx={titleStyled}>
          Sleep Tracker
      </Typography>
      <Typography variant="h6" color={"error"} gutterBottom sx={titleStyled}>
          Keep tracking your sleep with the best app
      </Typography>
      <div>
        <Link to="/post">
          <Button variant="contained" color='error'>Get Start</Button>
        </Link>
      </div>
      </Box>
      <Divider sx={{margin: "60px auto"}} />
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={12}>
          <Item elevation={0}>
              <Typography variant="h6" color={"primary"} gutterBottom sx={titleStyled}>
                  Faster
              </Typography>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem 
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </Item>
        </Grid>

        <Grid item xs={12} md={4} lg={6} >
        <Item elevation={0}>
              <Typography variant="h6" color={"primary"} gutterBottom sx={titleStyled}>
                  User Friendly
              </Typography>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem 
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </Item>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
        <Item  elevation={0}>
              <Typography variant="h6" color={"primary"} gutterBottom sx={titleStyled}>
                  Large Community
              </Typography>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor
              at Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
              This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem 
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Divider sx={{margin: "60px auto"}} />
    <Box>
      <Typography variant="h3" color={"primary"} gutterBottom sx={titleStyled}>
        See <strong> millions</strong> of others
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

    </Container>
    </motion.section>
  )
}

export default About