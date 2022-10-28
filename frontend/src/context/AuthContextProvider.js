import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {children}
    </AuthContext.Provider>

  )
}

export default AuthContextProvider