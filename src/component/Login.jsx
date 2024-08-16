import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa";




const Login = () => {

    // =========state maneger
    const [one , tow] = useState(false)
    // =========state maneger

    // ========function maneger
    const lockFun = ()=>{
        tow(!one)
    }


    const sunFun = (e) => {
        e.preventDefault();
    };
    
    // ========function maneger




  return (
    <>

      <div className="w-full h-[729px] bg-green-500 flex  justify-center items-center " >

        <div className=" bg-[#19d0fe] w-[500px] h-[550px] flex justify-center items-center  " >
            {/* form part start */}
            <form onSubmit={sunFun} className=" flex flex-col items-center gap-8 " >
                <h1 className="text-5xl" >login</h1>

                {/* email */}
                <div className=""><label >
                    Email
                </label> <br/>
                <input type="email" placeholder="your email" />
                </div>
                {/* email */}

                {/* password */}
                <div className="">
                    <label>Password</label><br/>
                    <div className=" relative  ">
                    <input type={one? 'text' : 'password'} placeholder="your password" />

                    {
                        one? <FaLockOpen onClick={lockFun} className="text-[12px] absolute top-[20%] right-1  " />:<FaLock onClick={lockFun} className="text-[12px] absolute top-[20%] right-1  " />
                        
                    }
                
                    
                        
                    </div>

                </div>
                {/* password */}

                {/* button */}
                <div className="">
                    <button className=" active:scale-110 transition-all hover:bg-black hover:text-white w-[100px] h-[30px] rounded-lg bg-white " >login</button>
                </div>
                {/* button */}

                {/* do not have an accaount ? */}
                <div className="">
                    <Link className="flex" to='/singUp' > Do not have an accaount ? <p className="text-[16px] text-[#fff] " >Sing up</p> </Link>
                </div>
                {/* Do not have an accaount ? */}
            </form>
             {/* form part end */}
          
        </div>
      </div>
      
    </>
  )
}

export default Login
