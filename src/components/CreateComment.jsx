import { tsConstructorType } from '@babel/types'
import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const CreateComment = (props) => {

  const thisContext = useContext(AppContext)


  return (
    <div>
      <form onSubmit={(event) => thisContext.state.handleCommentSubmit(event, props.postId)}>
        <input type="text" id="newCommentText" required value={thisContext.state.newCommentText} onChange={thisContext.state.handleCommentChange} />
        <input type="submit" value="Add Comment" />
      </form>
    </div>
  )

}