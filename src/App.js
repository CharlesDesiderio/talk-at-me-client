import React, { Component } from 'react'
import axios from 'axios'
import NewsFeed from './components/NewsFeed'
import LoginUser from './components/LoginUser.jsx'
import { NavBar } from './components/NavBar';

import './style/App.css'

// Fontawesome install/usage guide: https://fontawesome.com/how-to-use/on-the-web/using-with/react

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faPlus, faShare } from '@fortawesome/free-solid-svg-icons'
import { Profile } from './components/Profile';
import { Register } from './components/Register';

// Add icons to FontAwesome library
library.add(fab, faBars, faTimes, faPlus, faShare)

// Define Context here
const AppContext = React.createContext();

export { AppContext }

// Create Provider Component
class AppProvider extends Component {

  state = {
    userToken: '',
    userData: {},
    loginEmail: '',
    loginPassword: '',
    createPostPostedText: '',
    createPostPostedLanguage: '',
    newCommentText: '',
    posts: [],
    defaultPosts: [],
    displayNewPostBox: false,
    displayMenu: false,
    fetchedUserData: {},
    filteredPostLanguage: 'EN',
    editingPost: '',
    editingPostText: '',
    startRegistration: false,
    newUserDisplayName: '',
    newUserEmail: '',
    newUserPassword: '',
    newUserNativeLanguage: 'EN',
    newUserTargetLanguage: 'AR',
    serverFail: false,
    logout: () => {
      this.setState({
        userToken: '',
        userData: {},
        displayMenu: false
      })
    },
    newUserRegisterHandleCange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    newUserRegisterHandleSubmit: (event) => {
      event.preventDefault()
      axios.post('https://talkatmeserver.herokuapp.com/users/register', {
        displayName: this.state.newUserDisplayName,
        email: this.state.newUserEmail,
        password: this.state.newUserPassword,
        nativeLanguage: this.state.newUserNativeLanguage,
        targetLanguage: this.state.newUserTargetLanguage
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        this.setState({
          userToken: res.data.token,
          userData: res.data.user,
          userLanguage: res.data.user.userLanguage,
          createPostPostedLanguage: res.data.user.userLanguage,
          startRegistration: false,
          newUserDisplayName: '',
          newUserEmail: '',
          newUserPassword: '',
          newUserNativeLanguage: 'EN',
          newUserTargetLanguage: 'AR',
        })
      })
    },
    cancelEdit: () => {
      this.setState({
        editingPost: '',
        editingPostText: ''
      })
    },
    startRegister: (event) => {
      event.preventDefault()
      this.setState({
        startRegistration: !this.state.startRegistration
      })
    },
    handleEditingPostSubmit: (event) => {
      event.preventDefault()
      axios.put(`https://talkatmeserver.herokuapp.com/posts/edit/${this.state.editingPost}`, {
        postedText: this.state.editingPostText
      }, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
    })
    .then(() => {
      this.setState({
        editingPost: '',
        editingPostText: ''
      })
      this.state.getNewsFeed()
    })
    },
    editThisPost: (postId) => {
      if (this.state.editingPost === postId) {
        this.state.cancelEdit()
      } else {
        let foundPost = this.state.posts.find(item => item._id === postId)
        this.setState({
          editingPost: postId,
          editingPostText: foundPost.postedText
        })
      }
    },
    handleEditPostChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    resetFilter: () => {
      this.setState({
        posts: this.state.defaultPosts,
        filteredPostLanguage: this.state.userData.userLanguage
      })
    },
    handleFilteredLanguageChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    filterPosts: (event) => {
      event.preventDefault()

      let filteredPosts = this.state.defaultPosts.filter(post => post.postLanguage === this.state.filteredPostLanguage)
      
      this.setState({
        posts: filteredPosts
      })
    },
    grabUserData: (userId) => {
      axios.get('https://talkatmeserver.herokuapp.com/users/profile', {
        userId: userId
      }, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
    })
    .then((res) => {
      this.setState({
        fetchedUserData: res.foundUser
      })
    })
    },
    followUser: (userId) => {
      axios.put('https://talkatmeserver.herokuapp.com/users/follow', {
          userId: userId
        }, {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
      })
      .then(() => {
        this.state.getNewsFeed()
      })
    },
    showBurger: () => {
      this.setState({
        displayMenu: !this.state.displayMenu
      })
    },
    toggleNewPostBox: () => {
      this.setState({
        displayNewPostBox: !this.state.displayNewPostBox
      })
    },
    getNewsFeed: () => {
      axios.get('https://talkatmeserver.herokuapp.com/posts', {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
        .then(res => {
          res.data.posts.sort((a, b) => {
            return b.postDate - a.postDate
          })
          this.setState({
            posts: res.data.posts,
            defaultPosts: res.data.posts
          })
        })
    },
    handleLoginChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    handleLoginSubmit: (event) => {
      event.preventDefault()
      axios.post('https://talkatmeserver.herokuapp.com/users/login', {
        email: this.state.loginEmail,
        password: this.state.loginPassword
      }, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(res => {

        this.setState({
          userToken: res.data.token,
          userData: res.data.user,
          userLanguage: res.data.user.userLanguage,
          createPostPostedLanguage: res.data.user.userLanguage,
          loginEmail: '',
          loginPassword: ''
        })
      })
      .catch(err => {
        this.setState({
          serverFail: true
        })
      })
    },
    handlePostPostedLanguageChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }, 
    handlePostPostedLanguageSubmit: (event) => {
      event.preventDefault()

      axios.post('https://talkatmeserver.herokuapp.com/posts', {
        text: this.state.createPostPostedText,
        language: this.state.createPostPostedLanguage
      }, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(() => {
        this.setState({
          createPostPostedText: '',
          createPostPostedLanguage: this.state.userData.userLanguage,
          displayNewPostBox: false
        })
        this.state.getNewsFeed()
      })
    },
    handleNewLike: (event) => {
      event.preventDefault()

      axios.get(`https://talkatmeserver.herokuapp.com/posts/like/${event.target.id}`, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(() => {
        this.state.getNewsFeed()
      })
    },
    handleCommentChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    handleCommentSubmit: (event, postId) => {
      event.preventDefault()
      let newCommentText = `newCommentText${postId}`
      axios.put(`https://talkatmeserver.herokuapp.com/posts/comment`, {
          commentText: this.state[`newCommentText${postId}`],
          postId: postId
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.userToken}`
          }
        }
      )
      .then(() => {
        this.setState({
          [newCommentText]: ''
        })
        this.state.getNewsFeed()
      })
    },
    deletePost: (event, postId) => {
      event.preventDefault()

      axios.delete(`https://talkatmeserver.herokuapp.com/posts/delete/${postId}`, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
      .then(() => {
        this.state.getNewsFeed()
      })
    },
    langCheck: (lang) => {
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
  }

  render() {
    return(
      <AppContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default class App extends Component {

  render() {
    return (
      <AppProvider>
        <div className="container">
          <AppContext.Consumer>
            {(context) => (
              <React.Fragment>
                {context.state.displayMenu === true ? <Profile /> : ''}
                <NavBar />
                {context.state.userToken.length === 0 ? 
                  context.state.startRegistration === true ? <Register /> : <LoginUser />
                  : 
                  <NewsFeed />  
                }
                
              </React.Fragment>


            )}
          </AppContext.Consumer>
        </div>
      </AppProvider>
    )
  }
}

// Going to put a bunch of references down here.

// This article was a huge help understanding Context API:
// https://medium.com/javascript-in-plain-english/react-context-api-part-1-passing-state-to-child-components-made-easy-5152001e1988

// Also big thanks to Wes Bos and his video (with linked Git code in the description) here: https://www.youtube.com/watch?v=XLJN4JfniH4

