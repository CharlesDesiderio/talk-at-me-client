import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { CreateComment } from './CreateComment';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost.jsx';
import { FilterPosts } from './FilterPosts.jsx';

export const NewsFeed = () => {

  const thisContext = useContext(AppContext)

  React.useEffect(() => {
    thisContext.state.getNewsFeed()
  }, [])

    return(

        <div className="newsFeed">
          <FilterPosts />
          {thisContext.state.posts.map(post => {
            let thisDate = new Date(post.postDate * 1).toLocaleString()
            let thisLang = thisContext.state.langCheck(post.postLanguage)
            let likedByUser = thisContext.state.userData.userId //post.likedUsers.includes()
            return (
              <div key={post._id} className="postBody">
                
                <div className="postBodyHeader">
                  <span className="spanBold">{post.postCreator.displayName}</span>
                  
                  {/* For whatever reason, I can't get Express to send the array of followers. It's in the object I'm trying to send on the server, but never arrives on the front end. Reference: API post.js line 44's forEach method  */}
                  {/* {post.postCreatorId === thisContext.state.userData.userId ? '' : <button onClick={() => thisContext.state.followUser(post.postCreatorId)}>Follow</button>} */}

                  {/* <h1>{post.postCreatorFollowers}</h1> */}
                  <span className="spanGray">{thisDate}</span>
                  
                </div>
                <div className="postBodyText">
                  <span className="postBodyLanguageSpan">{thisLang}</span>
                  <br />

                  {thisContext.state.editingPost === post._id ? <EditPost post={post} /> : 
                  post.postedText }

                  {post.postCreator._id === thisContext.state.userData.userId ? <button className="editButton" onClick={() => thisContext.state.editThisPost(post._id)}>{thisContext.state.editingPost === post._id ? 'Cancel' : 'Edit'}</button> : ''}
                  {post.postCreator._id === thisContext.state.userData.userId ? <DeletePost postId={post._id} /> : ''}

                  <form id={post._id} onSubmit={thisContext.state.handleNewLike}>
                    
                    <input className="likeSubmitButton" type="submit" value={post.likedUsers.includes(likedByUser) ? '❤️' : '🖤'}/><span className="likedHeartIcon">{post.likedUsers.length}</span>
                  </form>
                </div>
                <div>{post.comments.map(comment => {
                  let thisDate = new Date(comment.commentDate * 1).toLocaleString()
                  console.log(comment.commentCreator.displayName)
                  return (
                    <div key={comment._id} className="postComment">
                      <div className="commentDecorBox"></div>
                      <div className="commentDetail">
                        <span className="postCommentName">{comment.commentCreator.displayName}</span><span className="postCommentTime">{thisDate}</span>
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