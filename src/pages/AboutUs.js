import React, { useContext, useEffect,useState } from 'react'
import Logo from '../Images/logo2.PNG'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import aboutback from '../Images/about_us_back.jpg'


export default function Header(){
  let appContext = useContext(AppContext)
  const navigate = useNavigate()
  return(
    <div>
        <header className=" w-auto h-20 bg-black  text-white">
            {/* <img src={Logo} className='w-30 h-full ml-10 cursor-pointer' onClick={()=>{navigate('/')}}/>
            <button className='mr-10 h-fit w-fit p-2 text-center border border-slate-50 rounded-full hover:rounded-full  hover:bg-gray-500'
             onClick={()=>{appContext.handleLoginStatus(false)
             navigate('/')}}>Logout</button> */}
             <p className="flex flex-col justify-center items-center text-3xl font-bold pt-5">ABOUT US</p>
             {/* <img src={aboutback} className="pt-10 h-60 w-full"/> */}
             
        </header>
        <div className='bg-red-500 w-full h-full border border-transparent shadow-lg mr-4 mt-25 p-8 rounded-md flex flex-wrap justify-between hover:shadow-2xl hover:border hover:bg-green-200 hover:bg-opacity-70'>
                <div className='flex '>
                    ABHIRAMI CHANDRAMOULI
                </div>
                <div>
                    APOORVA ANAND
                </div>
                <div>
                    JEFFREY JOLLY
                </div>
                <div>
                    MUNDAN PUDUSHERRY DENSY JOY
                </div>
                <div>
                    NAMITH N
                </div>
                <div>
                    NANDINI SAJEEV
                </div>
             </div>
    </div>
  )
}