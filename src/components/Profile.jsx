import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Profile = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="profile">
      <button className="closeProfileButton" onClick={thisContext.state.showBurger}><FontAwesomeIcon icon="times" /></button>
      <h1>{thisContext.state.userData.displayName}</h1>
      <h3>{thisContext.state.userData.followerCount} followers</h3>
      <h2>{thisContext.state.userData.email}</h2>
      <h4>Native Language:</h4>
      <h2>{thisContext.state.langCheck(thisContext.state.userData.nativeLanguage)}</h2>
      <h4>Learning Language:</h4>
      <h2>{thisContext.state.langCheck(thisContext.state.userData.userLanguage)}</h2>
      <br />
      <h2 onClick={thisContext.state.logout}>Logout</h2>
    </div>
  )

}