import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreatePost = () => {

  const thisContext = useContext(AppContext)

  return (
    <div>
    { thisContext.state.displayNewPostBox ? 
    <div className="createPost">
      <div className="createPostTitle">
        Create New Post
      </div>
      <form className="createPostForm" onSubmit={thisContext.state.handlePostPostedLanguageSubmit}>
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
        <textarea required type="textarea" id="createPostPostedText" name="postedText" onChange={thisContext.state.handlePostPostedLanguageChange} value={thisContext.state.createPostPostedText} />
        <div className="createPostButtonsContainer">
          <button type="submit"><FontAwesomeIcon icon="share" /></button>
          <FontAwesomeIcon icon="bars" />
          <button onClick={thisContext.state.toggleNewPostBox}><FontAwesomeIcon icon="times" /></button>
        </div>
      </form>
    </div> : ''
    }
    </div>
  )

}