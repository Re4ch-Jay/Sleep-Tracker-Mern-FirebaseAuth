import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'

function useRequireAuth() {
    const navigate = useNavigate()
    const {isAuth} = useContext(AuthContext)
    //required auth
  useEffect(() =>  {
    if(!isAuth) navigate('/login')
  }, [navigate, isAuth])
  
}

export default useRequireAuth