import React, { useContext } from 'react'
import {auth, provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import { AuthContext } from '../context/AuthContextProvider'
function Login() {

  const navigate = useNavigate();
  const {setIsAuth} = useContext(AuthContext)
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(res => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate('/feeds')
    })
  }

  return (
    <motion.div className='container'
    animate={{x: 0}}
    initial={{x: "-100vw"}}
    transition={{delay: 0.5}}
    >
        <div className='text-center py-5 my-5'>
            <h3 className='text-primary py-3'>Welcome To Login Page</h3>
            <button className='btn btn-primary' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    </motion.div>
  )
}

export default Login