import React, { useContext } from 'react'
import { AppContext } from '../App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Register = () => {

  const thisContext = useContext(AppContext)

  return (
    <div className="register">
      <form onSubmit={thisContext.state.newUserRegisterHandleSubmit}>
        <h4>Display Name</h4>
        <input type="text" id="newUserDisplayName" value={thisContext.state.newUserDisplayName} onChange={thisContext.state.newUserRegisterHandleCange} />
        <h4>Email Address</h4>
        <input type="email" id="newUserEmail" value={thisContext.state.newUserEmail} onChange={thisContext.state.newUserRegisterHandleCange} />
        <h4>Password</h4>
        <input type="password" id="newUserPassword" value={thisContext.state.newUserPassword} onChange={thisContext.state.newUserRegisterHandleCange} />
        <br />
        <h4>Your Language</h4>
        <select required id="newUserNativeLanguage" onChange={thisContext.state.newUserRegisterHandleCange} value={thisContext.state.newUserNativeLanguage}>
          <option value="EN">🇺🇸 English</option>
          <option value="AR">🇸🇦 Arabic</option>
          <option value="CN">🇨🇳 Chinese</option>
          <option value="FR">🇫🇷 French</option>
          <option value="DE">🇩🇪 German</option>
          <option value="HI">🇮🇳 Hindi</option>
          <option value="IT">🇮🇹 Italian</option>
          <option value="JP">🇯🇵 Japanese</option>
          <option value="KR">🇰🇷 Korean</option>
          <option value="PR">🇵🇹 Portugese</option>
          <option value="RU">🇷🇺 Russian</option>
          <option value="ES">🇪🇸 Spanish</option>
          <option value="SW">🇸🇪 Swedish</option>
        </select>
        <h4>Learning Language</h4>
        <select required id="newUserTargetLanguage" onChange={thisContext.state.newUserRegisterHandleCange} value={thisContext.state.newUserTargetLanguage}>
          <option value="EN">🇺🇸 English</option>
          <option value="AR">🇸🇦 Arabic</option>
          <option value="CN">🇨🇳 Chinese</option>
          <option value="FR">🇫🇷 French</option>
          <option value="DE">🇩🇪 German</option>
          <option value="HI">🇮🇳 Hindi</option>
          <option value="IT">🇮🇹 Italian</option>
          <option value="JP">🇯🇵 Japanese</option>
          <option value="KR">🇰🇷 Korean</option>
          <option value="PR">🇵🇹 Portugese</option>
          <option value="RU">🇷🇺 Russian</option>
          <option value="ES">🇪🇸 Spanish</option>
          <option value="SW">🇸🇪 Swedish</option>
        </select>
        <input className="registerButton" type="submit" value="Create New User" />
      </form>
      <button className="registerCancelButton" onClick={thisContext.state.startRegister}>Cancel</button>
    </div>
  )

}