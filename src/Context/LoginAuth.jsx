import React, { useState } from 'react'

export const SetLoginAuth=React.createContext()

function LoginAuth({children}) {
    const [isAuth,setIsAuth]=useState(false)
const handelLogin=(prop)=>{
    setIsAuth(prop)
}
  return (
    <div>
        <SetLoginAuth.Provider value={{isAuth,handelLogin}}>
            {children}
        </SetLoginAuth.Provider>
    </div>
  )
}

export default LoginAuth