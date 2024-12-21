import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-[rgba(238,239,251,1)] w-[400px] h-[500px] flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <p className='text-[rgba(144,150,178,1)] pt-3'>Please login using account detail bellow.</p>
            <input type="text" placeholder='Enter Your Email' className='bg-[rgba(255,255,255,1)] h-[44px] w-[377px] pl-5 mt-5' />
            <input type="password" placeholder='Enter Your Password' className='bg-[rgba(255,255,255,1)] h-[44px] w-[377px] pl-5 mt-5' />
            <button className="bg-[rgba(251,46,134,1)] text-white px-40 py-2 mt-4">Login</button>
            <p className='text-[rgba(138,143,185,1)] py-2 mt-5'>Dont have an account? <span className='text-[rgba(251,46,134,1)]'>Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login