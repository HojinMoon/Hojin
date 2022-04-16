import React from "react"

const Login = () => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="ID" required />
        <input type="password" placeholder="PASSWORD" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
