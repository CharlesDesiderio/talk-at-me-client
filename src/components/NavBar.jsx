import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const NavBar = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="navBar">
      {thisContext.state.userToken ? thisContext.state.userData.displayName : ''}
    </div>
  )

}