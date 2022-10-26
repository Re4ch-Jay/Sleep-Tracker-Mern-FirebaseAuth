import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { TextareaAutosize } from '@mui/material';
import {motion} from "framer-motion"
function Form() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [days, setDays] = useState('Mon')
    const [feeling, setFeeling] = useState('Good');
    const [hour, setHour] = useState('')
    const [description, setDesciption] = useState('')
    const [errorHour, setErrorHour] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorDescription, setErrorDescription] = useState('')
  
    const addNewPost = async (e) => {
      e.preventDefault()
      hour > 48 || hour < 0 || !hour ? setErrorHour("Hour is required and cannot higher than 48 hours or below 0") : setErrorHour('')
      !name ? setErrorName("Name is required") : setErrorName('')
      !description ? setErrorDescription("This field is required") : setErrorDescription('')

      await axios.post("api/sleep", {name, hour, days, feeling, description})
        .then(res => {
          console.log(res.data)
          navigate('/feeds')
        })
        .catch(err => {
          console.log(err)
          
        })
    }
    
  return (
    <motion.section
    initial={{x: "-100vw"}}
    animate={{x: 0}}
    transition={{delay: 0.5}}
    >
    <Container sx={styledContainer}>
      <Typography variant="h5" gutterBottom>
        Post New Sleep Routine
      </Typography>
      <form onSubmit={addNewPost}>
        {errorName && <Typography variant="p" color="error">{errorName}</Typography>}
        <div>
          <TextField label="Name" variant="outlined" 
          helperText="What is your name"
          fullWidth 
          sx={styled}
          onChange={e => setName(e.target.value)}
          value={name}
          />
        </div>
        
        {errorHour && <Typography variant="p" color="error">{errorHour}</Typography>}
        <div>
          <TextField label="Hour" variant="outlined" type="number"
          helperText="How long do you sleep"
          fullWidth 
          sx={styled}
          onChange={e => setHour(e.target.value)}
          value={hour}
          />
        </div>

        <div>
        </div>
        <div>
        <TextField
            select
            label="Day"
            value={days}
            onChange={e => setDays(e.target.value)}
            fullWidth
            sx={styled}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your day"
            variant="filled"
          >
            {daily.map(item => (
              <option key={item.day} value={item.day}>
                {item.day}
              </option>
            ))}
          </TextField>

          {errorDescription && <Typography variant="p" color="error">{errorDescription}</Typography>}


          <TextareaAutosize
              aria-label="Description"
              minRows={5}
              placeholder="Tell us more about your sleep"
              style={{ width: "100%" }}
              value={description}
              onChange={e => setDesciption(e.target.value)}
            />
      </div>
      <FormLabel id="demo-controlled-radio-buttons-group">How is your sleep</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={feeling}
        onChange={e => setFeeling(e.target.value)}
      >
        <FormControlLabel value="Bad" control={<Radio color='error' />} label="Bad" />
        <FormControlLabel value="Good" control={<Radio color='primary' />} label="Good" />
        <FormControlLabel value="Best" control={<Radio color='success'/>} label="Best" />
      </RadioGroup>
      <div>
        <Button variant="contained" color='error' type='submit'>Submit</Button>
      </div>
      </form>
    </Container>
    </motion.section>
  )
}

export default Form



const daily = [
  {
    day: "Mon"
  },
  {
    day: "Tue"
  },
  {
    day: "Wed"
  },
  {
    day: "Thu"
  },
  {
    day: "Fri"
  },
  {
    day: "Sat"
  },
  {
    day: "Sun"
  },
];

const styled = {
  margin: "20px 0"
}
const styledContainer = {
  margin: "80px auto"
}
