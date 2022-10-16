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
        <header className=" w-full h-20 bg-black  text-white sticky">
            {/* <img src={Logo} className='w-30 h-full ml-10 cursor-pointer' onClick={()=>{navigate('/')}}/>
            <button className='mr-10 h-fit w-fit p-2 text-center border border-slate-50 rounded-full hover:rounded-full  hover:bg-gray-500'
             onClick={()=>{appContext.handleLoginStatus(false)
             navigate('/')}}>Logout</button> */}
             <p className="flex flex-col justify-center items-center text-3xl font-bold pt-5">ABOUT US</p>
             {/* <img src={aboutback} className="pt-10 h-60 w-full"/> */}
             
        </header>
        <div className='m-10'>
            <div className='font-bold h-10 m-5 pl-14 pr-8 text-center'>
                
            Where do I start my blog? What is the best blog site to earn money? These may be your first questions in your blogging journey.

It really is an important question and lays the building blocks of your blog. It can affect your frustration level, the speed and performance of your blog, and your ability to customize it.

Not to mention, you need to pick the best blog site for making money!

Therefore, choosing the best blogging platform and site for your blog in the beginning is a must-do on your blog-starting journey.
            <div>
                <a href="https://github.com/jeffrey-jolly/ui-react-final_project_triv_c" className=''>CLICK HERE TO GO TO OUR GITHUB LINK</a>
            </div>
                
                
            </div>
            
        <div className='max-w-7xl h-screen mx-auto flex flex-wrap justify-between pt-16'>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10 '>
                    ABHIRAMI CHANDRAMOULI
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10'>
                    APOORVA ANATH
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10'>
                    JEFFREY JOLLY
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10'>
                    MUNDAN PUDUSHERRY DENSY JOY
                    <p className='text-sm '>(Associate Software Engineer)</p>

                    
                </div>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10'>
                    NAMITH N
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-md mt-50 grid place-items-center font-bold hover:bg-black hover:bg-opacity-10'>
                    NANDINI SAJEEV
                    <p className='text-sm '>(Associate Software Engineer)</p>
                </div>
                
                
             </div>
             </div>
    </div>
  )
}