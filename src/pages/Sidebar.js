import React from 'react'
import { Link } from 'react-router-dom'
import insta from '../Images/insta_svg.PNG'
import facebook from '../Images/fb_svg.PNG'
import twitter from '../Images/twitter_svg.PNG'
import linkdin from '../Images/linkdin.PNG'

export default function Sidebar() {
  return (
    <div className="text-xl bg-black max-h-full w-1/6 shadow-2xl text-white  flex flex-col align-bottom justify-between p-2">

    <ul className="top-nav text-base">


      <li className="p-5  flex flex-row hover:font-semibold cursor-pointer">

        <svg className="w-6 h-6 hidden text-2xl " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

       <Link to='/dashboard'> <span>
          Home

        </span></Link>

      </li>

      <li className='p-5 flex flex-row hover:font-semibold cursor-pointer'>

        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <Link to='/aboutus'>
          About us
        </Link>
          
        

      </li>

      <li className='p-5 flex flex-row hover:font-semibold cursor-pointer'>

        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span>
          Contact us
        </span>

      </li>

      <li className='p-5 flex flex-row hover:font-semibold cursor-pointer'>

        <svg className="nav-icon w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <span>
          Categories
        </span>

      </li>

    </ul>





    <ul className="bottom-nav flex flex-row justify-between text-white pl-2" >

      <li>
        <img src={insta} className="w-8 pl-2 pb-2 hover:scale-105 cursor-pointer" />
      </li>

      <li>
        <img src={facebook} className="w-7 pr-2 pb-2 hover:scale-105 cursor-pointer" />
      </li>

      <li>
        <img src={twitter} className="w-8 pr-2 pb-2 hover:scale-105 cursor-pointer" />
      </li>

      <li>
        <img src={linkdin} className="w-8 pr-2 pb-2 hover:scale-105 cursor-pointer" />
      </li>

    </ul>


  </div>
  )
}
