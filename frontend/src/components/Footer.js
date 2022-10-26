import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
const titleStyled = {
  fontWeight: "bold"
}
function Footer() {
  return (
    <motion.footer
    initial={{x: "-100vw"}}
    animate={{x: 0}}
    transition={{delay: 0.5}}
    >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
            <div elevation={0}>
                <Typography variant="h6" color={"white"} gutterBottom sx={titleStyled}>
                    Faster
                </Typography>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                
            </div>
            </Grid>

            <Grid item xs={12} md={4} lg={4} >
            <div elevation={0}>
                <Typography variant="h6" color={"white"} gutterBottom sx={titleStyled}>
                    User Friendly
                </Typography>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                
            </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
            <div  elevation={0}>
                <Typography variant="h6" color={"white"} gutterBottom sx={titleStyled}>
                    Large Community
                </Typography>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
            
            </div>
            </Grid>
        </Grid>
        </Box>
    </motion.footer>
  )
}

export default Footer