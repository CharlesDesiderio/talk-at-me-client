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

        <div className="newsFeed">
        {/* <CreatePost /> */}
          {thisContext.state.posts.map(post => {
            let thisDate = new Date(post.postDate * 1).toLocaleString()
            let thisLang = langCheck(post.postLanguage)
            let likedByUser = thisContext.state.userData.userId //post.likedUsers.includes()
            return (
              <div className="postBody">
                <div className="postBodyHeader">
                  <span className="spanBold">{post.postCreator}</span>
                  <span className="spanGray">{thisDate}</span>
                  
                </div>
                <div className="postBodyText">
                  <span className="postBodyLanguageSpan">{thisLang}</span>
                  <br />
                  {post.postedText}
                  
                  <form id={post._id} onSubmit={thisContext.state.handleNewLike}>
                    
                    <input className="likeSubmitButton" type="submit" value={post.likedUsers.includes(likedByUser) ? '❤️' : '🖤'}/><span className="likedHeartIcon">{post.likedUsers.length}</span>
                  </form>
                </div>
                <div>{post.comments.map(comment => {
                  let thisDate = new Date(comment.commentDate * 1).toLocaleString()
                  return (
                    <div className="postComment">
                      <div className="commentDecorBox"></div>
                      <div className="commentDetail">
                        <span className="postCommentName">{comment.userId}</span><span className="postCommentTime">{thisDate}</span>
                        <span className="postCommentDetail">{comment.commentText}</span>

                      </div>
                    </div>
                  )
                })}</div>
                  <CreateComment postId={post._id} />
              </div>
              )
          })}
        </div>

    )
}

export default NewsFeed