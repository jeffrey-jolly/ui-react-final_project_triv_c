import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo2.PNG'
// import AppContext from '../Context/AppContext';
export default function Header(props){
    
    let [loading,setLoading] = useState(true);
    

    return(
    <div className="body-wrapper">
      
        <div className="nav">
          {/* 
           */}
           <header className=" w-auto h-20 bg-black  text-white flex flex-row justify-between z-10">
            <img src={Logo} className='w-30 h-full ml-10'/>
            <Link to="/login"><button className='mr-10 h-1/2 mt-4 p-2 hover:text-lg hover:rounded-2xl  hover:bg-gray-500'>Login</button></Link>
            </header>
          </div>
        
        </div>
       

    
    );
}
