import React from "react"

const SignUp = () => {
  return (
    <div className="SignUp">
      <h1>Sign UP</h1>
      <form>
        <input type="text" placeholder="ID" required />
        <input type="password" placeholder="PASSWORD" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
