import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='container'>
        <div className='text-center text-danger fs-5 pt-5 mt-5'>
         <h1>Sorry we cannot find that page :(</h1> 
        </div>
        <div className='text-center py-3 mb-5'>
        <Link to="/">
          <Button variant="contained" color='error'>Go to homepage</Button>
        </Link>
      </div>
    </section>
  )
}

export default NotFound