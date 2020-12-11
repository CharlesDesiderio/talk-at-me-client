import React, { Component } from 'react'
import axios from 'axios'

export default class NewsFeed extends Component {
  
  componentDidMount() {
    axios.get('http://localhost:3003/posts')
      .then(res => {

      })
  }

  render() {
    return(
      <div>
        hiiii
      </div>
    )
  }
}