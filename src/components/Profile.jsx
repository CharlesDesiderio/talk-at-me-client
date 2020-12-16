import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Profile = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="profile">
      <button onClick={thisContext.state.showBurger}>X</button>
      <h1>{thisContext.state.userData.displayName}</h1>
      <h2>{thisContext.state.userData.email}</h2>
      <h2>{thisContext.state.langCheck(thisContext.state.userData.nativeLanguage)}</h2>
      <h2>{thisContext.state.langCheck(thisContext.state.userData.userLanguage)}</h2>
    </div>
  )

}