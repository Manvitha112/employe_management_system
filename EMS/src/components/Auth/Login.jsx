import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
  const [email, Setemail] = useState("")
  const [password, SetPassword] = useState("")

  const submitHandle = (e) => {
    e.preventDefault()
    HandleLogin(email,password)
    
    //console.log(`Email is ${email} and Password is ${password}`)
    Setemail("")
    SetPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border border-purple-500 p-12 rounded-2xl shadow-lg shadow-purple-900 w-[400px]">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Welcome Back</h2>
        <form
          onSubmit={submitHandle}
          className="flex flex-col gap-5"
        >
          <input
            value={email}
            onChange={(e) => Setemail(e.target.value)}
            required
            className="text-white text-lg bg-transparent placeholder:text-gray-400 border border-gray-600 rounded-xl px-5 py-3 focus:outline-none focus:border-purple-500 transition"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            required
            className="text-white text-lg bg-transparent placeholder:text-gray-400 border border-gray-600 rounded-xl px-5 py-3 focus:outline-none focus:border-purple-500 transition"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="text-white text-xl bg-purple-700 hover:bg-purple-800 border border-purple-600 rounded-xl px-5 py-3 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
