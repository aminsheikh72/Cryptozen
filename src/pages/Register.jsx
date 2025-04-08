import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../features/auth/AuthSlice';
import { toast } from 'react-toastify';
import CryptoLoader from '../components/CryptoLoader';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const {user,isLoading,isError,isSucces,message}= useSelector(state=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData,setFormData]=useState({
    name : "", email : "", password : "", password2 : ""
  })
  const {name,email,password,password2}= formData
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(password !== password){
      toast.error(message,{
        position:"top-center"
      })
    }
    else{
      dispatch(userRegister(formData))
    }
  }
  useEffect(()=>{
    if(user){
      navigate('/')
    }
      },[user])

 useEffect(()=>{
  if(isError && message){
    toast.error(message,{
      position : "top-center"
    })
  }
 },[isError,message])
  if(isLoading){
    return <CryptoLoader/>
  }

  return (
    <div className="min-h-screen bg-[#020B2D] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#0A1435] p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name='name'
              value={name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name='email'
              value={email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              name='password'
              required
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              name='password2'
              required
              value={password2}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link to='/login' className="text-blue-500 hover:text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;