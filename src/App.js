import React, { Component } from 'react'
import axios from 'axios'
import NewsFeed from './components/NewsFeed'
import LoginUser from './components/LoginUser'
import { NavBar } from './components/NavBar';

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
    handleLoginChange: (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    },
    handleLoginSubmit: (event) => {
      event.preventDefault()
      axios.post('http://localhost:3003/users/login', {
        email: this.state.loginEmail,
        password: this.state.loginPassword
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        this.setState({
          userToken: res.data.token,
          userData: res.data.user
        })
      })
    },
    handleNewLike: (event) => {
      event.preventDefault()
      console.log(event.target.id)

      axios.get(`http://localhost:3003/posts/like/${event.target.id}`, {
        headers: {
          Authorization: `Bearer ${this.state.userToken}`
        }
      })
  
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
        <div>
          <AppContext.Consumer>
            {(context) => (
              <React.Fragment>
                <NavBar />
                {context.state.userToken.length === 0 ? 
                  ''
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

