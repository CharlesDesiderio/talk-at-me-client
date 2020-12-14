import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const CreatePost = () => {

  const thisContext = useContext(AppContext)

  return (
    <div>
      <form onSubmit={thisContext.state.handlePostPostedLanguageSubmit}>
        <input required type="text" id="createPostPostedText" name="postedText" onChange={thisContext.state.handlePostPostedLanguageChange} value={thisContext.state.createPostPostedText} />
        <select required id="createPostPostedLanguage" name="postLanguage" onChange={thisContext.state.handlePostPostedLanguageChange} value={thisContext.state.createPostPostedLanguage}>
          <option value="EN">🇺🇸</option>
          <option value="CN">🇨🇳</option>
          <option value="KR">🇰🇷</option>
          <option value="ES">🇪🇸</option>
        </select>
      </form>
    </div>
  )

}