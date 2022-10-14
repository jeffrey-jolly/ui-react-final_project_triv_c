import React, { useContext, useEffect,useState } from 'react'
import Logo from '../Images/logo2.PNG'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


export default function Header(){
  let appContext = useContext(AppContext)
  const navigate = useNavigate()
  return(
    <div>
        <header className=" w-auto h-14 bg-black  text-white flex flex-row justify-between items-center">
            <img src={Logo} className='w-30 h-full ml-10 cursor-pointer' onClick={()=>{navigate('/')}}/>
            <button className='mr-10 h-fit w-fit p-2 text-center border border-slate-50 rounded-full hover:rounded-full  hover:bg-gray-500'
             onClick={()=>{appContext.handleLoginStatus(false)
             navigate('/')}}>Logout</button>
        </header>
    </div>
  )
}