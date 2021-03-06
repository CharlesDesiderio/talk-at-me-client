import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EditPost = (props) => {

  const thisContext = useContext(AppContext)

  return (
    <div className="editPost">
      <form onSubmit={thisContext.state.handleEditingPostSubmit}>
        <textarea id="editingPostText" onChange={thisContext.state.handleEditPostChange} value={thisContext.state.editingPostText}></textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  )

}