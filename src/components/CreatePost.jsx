import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const CreatePost = () => {

  const thisContext = useContext(AppContext)

  return (
    <div>
      <form>
        <input type="text" id="postedText" />
        <select id="postLanguage">
          <option value="EN">🇺🇸</option>
          <option value="CN">🇨🇳</option>
          <option value="KR">🇰🇷</option>
          <option value="ES">🇪🇸</option>
        </select>
      </form>
    </div>
  )

}