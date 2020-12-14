import React, { useState, useContext } from 'react'
import { AppContext } from '../App.js'
import axios from 'axios'

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)
  const [postData, setPostData] = useState([])
  const [lastLikeData, setLastLikeData] = useState('')

  React.useEffect(() => {

    axios.get('http://localhost:3003/posts', {
      headers: {
        Authorization: `Bearer ${thisContext.state.userToken}`
      }
    })
      .then(res => {
        setPostData(res.data.posts)
      })
  }, [])

  const langCheck = (lang) => {
    switch(lang) {
      case 'EN':
        return '🇺🇸'
      case 'CN':
        return '🇨🇳'
      case 'KR':
        return '🇰🇷'
      case 'ES':
        return '🇪🇸'
    }
    
  }

    return(
      <div>
        <div>
          {postData.map(post => {
            let thisDate = new Date(post.postDate * 1).toLocaleString()
            let thisLang = langCheck(post.postLanguage)
            return (
              <div>
                <p>Language: {thisLang}</p>
                <p>{post.postCreator}</p>
                <p>{post.postedText}</p>
                <p>{thisDate}</p>
                <div>{post.comments.map(comment => {
                  let thisDate = new Date(comment.commentDate * 1).toLocaleString()
                  return (
                    <div>
                      <p>{comment.userId}</p>
                      <p>{thisDate}</p>
                      <p>{comment.commentText}</p>
                    </div>
                  )
                })}</div>
                  <p>Likes: {post.likedUsers.length} </p>
                  <form id={post._id} onSubmit={thisContext.state.handleNewLike}>
                    <input type="submit" value="HEART"/>
                  </form>
              </div>
              )
          })}
        </div>
      </div>
    )
}

export default NewsFeed