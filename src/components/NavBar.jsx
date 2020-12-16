import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { CreatePost } from './CreatePost.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="navBar">
      
      <div>{thisContext.state.userToken ? <FontAwesomeIcon icon="bars" /> : ''}</div>
      <span>Talk@Me</span>
      
      <div>{thisContext.state.userToken ? <button className="newPostNavButton" onClick={thisContext.state.toggleNewPostBox}>{thisContext.state.displayNewPostBox ? <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="plus" />}</button> : '' }
      <div>{thisContext.state.userToken ? <CreatePost /> : ''}</div></div>
    </div>
  )

}