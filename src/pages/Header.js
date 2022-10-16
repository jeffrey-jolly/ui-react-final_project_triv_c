import React, { useContext, useEffect,useState } from 'react'
import Logo from '../Images/logo4.png'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'


export default function Header(){
  let appContext = useContext(AppContext)
  const navigate = useNavigate()
  return(
    <div>
        <header className=" w-auto h-14 bg-black  text-white flex flex-row justify-between items-center">
            <img src={Logo} className='w-30 h-full ml-3 p-1 cursor-pointer' onClick={()=>{navigate('/')}}/>
          {appContext.userLoggedIn?(<>
            <button className='mr-10 h-fit w-fit p-1 text-center text-sm border border-slate-50 rounded-full hover:rounded-full  hover:scale-105 hover:bg-white hover:text-black font-semibold'
             onClick={()=>{appContext.handleLoginStatus(false)
             navigate('/')}}>Logout</button>
          </>):(<></>)}  
        </header>
    </div>
  )
}