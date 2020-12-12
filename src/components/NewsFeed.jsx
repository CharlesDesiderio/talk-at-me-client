import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App.js'
import axios from 'axios'

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)

  console.log(thisContext)
  React.useEffect(() => {

    axios.get('http://localhost:3003/posts', {
      headers: {
        Authorization: `Bearer ${thisContext.state.userToken}`
      }
    })
      .then(res => {
        console.log(res)
      })
  })
  
    return(
      <div>
        hiiii
      </div>
    )

}

export default NewsFeed