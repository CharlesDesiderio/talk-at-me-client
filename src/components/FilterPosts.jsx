import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const FilterPosts = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="filterPosts">
      <form className="filterPostsSelect" onSubmit={thisContext.state.filterPosts}>
        <select required id="filteredPostLanguage" onChange={thisContext.state.handleFilteredLanguageChange} value={thisContext.state.filteredPostLanguage}>
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
          <button type="submit">Filter</button>
      </form>
      <button onClick={thisContext.state.resetFilter}>Reset</button>
    </div>
  )

}