import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { CreateComment } from './CreateComment';
import { DeletePost } from './DeletePost';

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)

  React.useEffect(() => {
    thisContext.state.getNewsFeed()
  }, [])

    return(

        <div className="newsFeed">
          {thisContext.state.posts.map(post => {
            let thisDate = new Date(post.postDate * 1).toLocaleString()
            let thisLang = thisContext.state.langCheck(post.postLanguage)
            let likedByUser = thisContext.state.userData.userId //post.likedUsers.includes()
            return (
              <div key={post._id} className="postBody">
                <div className="postBodyHeader">
                  <span className="spanBold">{post.postCreator}</span>
                  {/* {post.postCreatorId === thisContext.state.userData.userId ? '' : <button onClick={() => thisContext.state.followUser(post.postCreatorId)}>Follow</button>} */}

                  <h1>{post.postCreatorFollowers}</h1>
                  <span className="spanGray">{thisDate}</span>
                  
                </div>
                <div className="postBodyText">
                  <span className="postBodyLanguageSpan">{thisLang}</span>
                  <br />
                  {post.postedText}
                  {post.postCreatorId === thisContext.state.userData.userId ? <DeletePost postId={post._id} /> : ''}
                  <form id={post._id} onSubmit={thisContext.state.handleNewLike}>
                    
                    <input className="likeSubmitButton" type="submit" value={post.likedUsers.includes(likedByUser) ? '❤️' : '🖤'}/><span className="likedHeartIcon">{post.likedUsers.length}</span>
                  </form>
                </div>
                <div>{post.comments.map(comment => {
                  let thisDate = new Date(comment.commentDate * 1).toLocaleString()
                  return (
                    <div key={comment._id} className="postComment">
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