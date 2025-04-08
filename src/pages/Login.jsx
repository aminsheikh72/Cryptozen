import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CryptoLoader from '../components/CryptoLoader';
import { userLogin } from '../features/auth/AuthSlice';

const Login = () => {

const {user,isError,isLoading,isSucces,message}= useSelector(state=> state.auth)
const dispatch = useDispatch()
const navigate = useNavigate()
const [formData,setFormData]= useState({
  email : "", password : ""
})
const {email,password}= formData
const handleChange =(e)=>{
setFormData({
  ...formData,
  [e.target.name]: e.target.value
})
}
const handleSubmit=(e)=>{
  dispatch(userLogin(formData))
}
useEffect(()=>{
if(isError && message){
  toast.error(message,{
    position : "top-center"
  })
}
},[isError,message])
useEffect(()=>{
  if(user){
    navigate('/')
  }
})

if(isLoading){
  return <CryptoLoader/>
}


  return (
    <div className="min-h-screen bg-[#020B2D] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#0A1435] p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;