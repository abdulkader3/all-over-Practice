import React from 'react'
import { Link } from 'react-router-dom'

const SingUp = () => {
  return (
    <>
    <div className="w-full h-[729px] bg-blue-500 flex justify-center items-center">
        <div className="bg-[#19d0fe] w-[500px] h-[650px] flex justify-center items-center">
          {/* form part start */}
          <form className="flex flex-col items-center gap-8">
            <h1 className="text-5xl">Sign Up</h1>

            {/* Username */}
            <div className="">
              <label>Username</label>
              <br />
              <input type="text" placeholder="your username" />
            </div>
            {/* Username */}

            {/* Email */}
            <div className="">
              <label>Email</label>
              <br />
              <input type="email" placeholder="your email" />
            </div>
            {/* Email */}

            {/* Password */}
            <div className="">
              <label>Password</label>
              <br />
              <input type="password" placeholder="your password" />
            </div>
            {/* Password */}

            {/* Confirm Password */}
            <div className="">
              <label>Confirm Password</label>
              <br />
              <input type="password" placeholder="confirm your password" />
            </div>
            {/* Confirm Password */}

            {/* Button */}
            <div className="">
              <button className="w-[100px] h-[30px] rounded-lg bg-white">
                Sign Up
              </button>
            </div>
            {/* button */}

            {/* already have an accaount ? */}
            <div className="">
                    <Link to='/' > already have an accaount ? </Link>
                </div>
                {/* already have an accaount ? */}
          </form>
          {/* form part end */}
        </div>
      </div>
      
    </>
  )
}

export default SingUp
