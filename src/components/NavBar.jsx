import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { CreatePost } from './CreatePost.jsx'

export const NavBar = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="navBar">
      <div>hbrgr</div>
      <span>{thisContext.state.userToken ? thisContext.state.userData.displayName : ''}</span>
      <div>{thisContext.state.userToken ? <CreatePost /> : ''}</div>
      <div>{thisContext.state.userToken ? <button className="newPostNavButton" onClick={thisContext.state.toggleNewPostBox}>{thisContext.state.displayNewPostBox ? '❌' : '➕'}</button> : '' }</div>
    </div>
  )

}