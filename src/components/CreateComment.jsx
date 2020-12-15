import React, { useContext } from 'react'
import { AppContext } from '../App.js'

export const CreateComment = (props) => {

  const thisContext = useContext(AppContext)
  let thisCommentId = `newCommentText${props.postId}`

  return (
    <div>
      <form onSubmit={(event) => thisContext.state.handleCommentSubmit(event, props.postId)}>
        <input type="text" id={thisCommentId} required value={thisContext.state.thisCommentId} onChange={thisContext.state.handleCommentChange} />

        <input type="submit" value="Add Comment" />
      </form>
    </div>
  )
}

// Understanding how to pass props to a functional component came from here:
// https://medium.com/@PhilipAndrews/react-how-to-access-props-in-a-functional-component-6bd4200b9e0b