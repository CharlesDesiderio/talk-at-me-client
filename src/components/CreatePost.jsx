import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const CreatePost = () => {

  const thisContext = useContext(AppContext)

  return (
    <div>
      <form onSubmit={thisContext.state.handlePostPostedLanguageSubmit}>
        <input required type="text" id="createPostPostedText" name="postedText" onChange={thisContext.state.handlePostPostedLanguageChange} value={thisContext.state.createPostPostedText} />
        <select required id="createPostPostedLanguage" name="postLanguage" onChange={thisContext.state.handlePostPostedLanguageChange} value={thisContext.state.createPostPostedLanguage}>
          <option value="EN">🇺🇸 English</option>
          <option value="AR">🇸🇦 Arabic</option>
          <option value="CN">🇨🇳 Chinese</option>
          <option value="FR">🇫🇷 French</option>
          <option value="DE">🇩🇪 German</option>
          <option value="HI">🇮🇳 Hindi</option>
          <option value="IT">🇮🇹 Italian</option>
          <option value="JP">🇯🇵 Japanese</option>
          <option value="KR">🇰🇷 Korean</option>
          <option value="PR">🇵🇹 Portugese</option>
          <option value="RU">🇷🇺 Russian</option>
          <option value="ES">🇪🇸 Spanish</option>
          <option value="SW">🇸🇪 Swedish</option>
        </select>
      </form>
    </div>
  )

}