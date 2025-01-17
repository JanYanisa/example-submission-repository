import { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleLoginFn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (event) => {
    event.preventDefault()
    handleLoginFn({
      username: username,
      password: password
    })

    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
                username
          <input
            type="text"
            value={username}
            id='username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
                password
          <input
            type="password"
            value={password}
            id='password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id="login-button" type="submit">login</button>
      </form>
    </div>
  )
}
LoginForm.propTypes = {
  handleLoginFn: PropTypes.func.isRequired,
}

export default LoginForm