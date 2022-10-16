import React, { useContext, useEffect,useState } from 'react'
import Logo from '../Images/logo2.PNG'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import aboutback from '../Images/about_us_back.jpg'
import Header from './Header'


export default function AboutUs(){
  let appContext = useContext(AppContext)
  const navigate = useNavigate()
  return(
    <div>
        <Header/>

        
        <div className='m-10'>
            <div className='h-10 m-5 pl-14 text-sm pr-8 text-center'>
            
            <p className='italic'>It all started when we were assigned a group on monday morning.From knowing little to learning along the way, we came a long way with the help of our wonderful trainer <strong>Arjit Verma</strong>.  We started with splitting the workforce efficiently among our team members. This app is an implementation of a simple blogging website using various React tools like Context API, Redux, Formik, Yup, html-react-parser, quill, Tailwind CSS,etc...
            We are extremely grateful to our mentor, colleagues, friends and family for supporting us throughout our journey.
            </p><br/>
            <div className='mt-4 font-bold inline-flex justify-center h-10 w-full mx-auto hover:cursor-pointer'>
                
                <h1>CLICK HERE TO VIEW OUR GITHUB PAGE</h1><a href="https://github.com/jeffrey-jolly/ui-react-final_project_triv_c" target={'_blank'}>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  hover:text-blue-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>
</span>
                </a>
                

                
                
                
            </div>
                
        
            </div>
            
        <div className='max-w-7xl h-screen mx-auto flex flex-wrap justify-between pt-16'>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-violet-400 hover:bg-opacity-10 '>
                    <h1>ABIRAMI CHANDRAMOULI</h1>
                    <p>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-green-400 hover:bg-opacity-10'>
                    <h1>APOORVA ANANTH P</h1>
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-red-400 hover:bg-opacity-10'>
                    <h1>JEFFREY JOLLY</h1>
                    <p className='text-sm '>(Associate Software Engineer)</p>
                
                </div>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-blue-400 hover:bg-opacity-10'>
                    <h1>MUNDAN PUTHUSSERY DENSY JOY</h1>
                    <p className='text-sm '>(Associate Software Engineer)</p>

                    
                </div>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-yellow-400 hover:bg-opacity-10'>
                    <h1>NAMITH N</h1>
                    <p className='text-sm '>(Associate Software Engineer)</p>
                    
                </div>
                <div className='w-1/4 m-10 shadow-xl mt-50 rounded-lg flex flex-col text-center justify-center font-bold hover:bg-orange-600 hover:bg-opacity-10'>
                    <h1>NANDINI SAJEEV</h1>
                    <p className='text-sm '>(Associate Software Engineer)</p>
                </div>
                
                
             </div>
             </div>
    </div>
  )
}