import { Avatar } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import { motion} from 'framer-motion'

const heroDetails = {
    text: 'Sleep Tracker,',
    br: 'Free Services',
    note: 'Bring the best performance',
    button: 'Contact Me',
    icon: <CallIcon/>
}


function Hero() {
  return (
    <section id="intro" className='my-5'>
        <div className="container-xxl">
            <div className="row g4 justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <motion.h1  initial={{x: '-100vw'}}
                                animate={{x: 0}}
                                transition={{delay: 0.5}}>
                        <div className="text-warning display-2 fw-bold">{heroDetails.text}</div>
                    </motion.h1>
                    <motion.h3 
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{delay: 1}}
                    className="text-warning fs-1 fw-bold">{heroDetails.br}</motion.h3>
                    <motion.h4 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.5, duration: 0.3 }}
                    className="text-muted py-3">{heroDetails.note}</motion.h4>
                    
                </div>

                <motion.div 
                initial={{x: '100vw'}}
                animate={{x: 0}}
                transition={{delay: 0.5, duration: 0.5}}
                className="col-md-6 d-none d-md-block">
                    <Avatar src="/logo.png" alt="" sx={{ width: "450px", height: "450px" }} />
                </motion.div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero