import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const DeletePost = (props) => {

  const thisContext = useContext(AppContext)

  return (
    <div className="deletePost">
      <form onSubmit={(event) => thisContext.state.deletePost(event, props.postId)}>
        <input type="submit" value="X" />
      </form>

    </div>
  )

}