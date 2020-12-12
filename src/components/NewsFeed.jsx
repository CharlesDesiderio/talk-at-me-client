import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../App.js'
import axios from 'axios'

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)
  const [postData, setPostData] = useState([])

  console.log(thisContext)
  React.useEffect(() => {

    axios.get('http://localhost:3003/posts', {
      headers: {
        Authorization: `Bearer ${thisContext.state.userToken}`
      }
    })
      .then(res => {
        setPostData(res.data.posts)
        // postData = res.data.posts
        // console.log(postData[0])
      })
  }, [])
  
    return(
      <div>
        <div>
          {postData.map(post => {
            return (
              <div>
                <p>{post.postCreator}</p>
                <p>{post.postedText}</p>
                <div>{post.comments.map(comment => {
                  return (
                    <div>
                      <p>{comment.userId}</p>
                      <p>{Date(comment.commentDate)}</p>
                      <p>{comment.commentText}</p>
                    </div>
                  )
                })}</div>
              </div>
              )
          })}
        </div>
      </div>
    )

}

export default NewsFeed