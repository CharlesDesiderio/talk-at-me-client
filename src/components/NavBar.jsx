import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import LoginUser from './LoginUser.jsx'

export const NavBar = () => {

  const thisContext = useContext(AppContext)
  console.log(thisContext.state.userToken)

  return (
    <div>
      {thisContext.state.userToken ? thisContext.state.userData.displayName : <LoginUser />}
    </div>
  )

}