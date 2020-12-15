import React, { useState, useContext } from 'react'
import { CreatePost } from './CreatePost';
import { AppContext } from '../App.js'
import { CreateComment } from './CreateComment';
import axios from 'axios'

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)
  const [postData, setPostData] = useState([])
  const [lastLikeData, setLastLikeData] = useState('')

  React.useEffect(() => {
    thisContext.state.getNewsFeed()
  }, [])

  const langCheck = (lang) => {
    switch (lang) {
      case "EN":
        return "🇺🇸 English";
      case "AR":
        return "🇸🇦 Arabic";
      case "CN":
        return "🇨🇳 Chinese";
      case "FR":
        return "🇫🇷 French";
      case "DE":
        return "🇩🇪 German";
      case "HI":
        return "🇮🇳 Hindi";
      case "IT":
        return "🇮🇹 Italian";
      case "JP":
        return "🇯🇵 Japanese";
      case "KR":
        return "🇰🇷 Korean";
      case "PR":
        return "🇵🇹 Portugese";
      case "RU":
        return "🇷🇺 Russian";
      case "ES":
        return "🇪🇸 Spanish";
      case "SW":
        return "🇸🇪 Swedish";
    }
  }

    return(
      <div>
        <div>
        <CreatePost />
          {thisContext.state.posts.map(post => {
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
                  <CreateComment postId={post._id} />
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