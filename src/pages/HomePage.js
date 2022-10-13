import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo2.PNG'
import back from '../Images/Leaves.jpg'
import ProductCard from './ProductCard';
import loadingGif from '../Images/tenor.gif'
// import AppContext from '../Context/AppContext';
export default function HomePage(){

    let [loading,setLoading] = useState(true);

    let [blogs, setBlogs] = useState([])
    const apiURL = "http://localhost:3000/posts"

    async function getNewBlog() {
        let response = await fetch(apiURL)
        console.log("Response", response)
        if (response.ok) {
            let result = await response.json()
            console.log("Result", result)
            setBlogs(result)
            setLoading(false)

        } else {
            console.log("Error")
            setLoading(false)
        }

    }
    useEffect(() => {
        getNewBlog()
    }, [])

    
    
    

    return(
    <div className="body-wrapper">
      
        <div className="nav">
          {/* 
           */}
           <header className=" w-auto h-20 bg-black  text-white flex flex-row justify-between z-10">
            <img src={Logo} className='w-30 h-full ml-10'/>
            {/* <Link to="/login"><button className='mr-10 h-1/2 mt-4 p-2 hover:text-lg hover:rounded-2xl  hover:bg-gray-500'>Login</button></Link> */}
            
            </header>

          </div>

          <div className='flex flex-row items-center h-1/4'>
          {/* <img src={back} className="h-85 w-1/2 m-12 shadow-2xl opacity-75 "/> */}
          <div class="relative h-1/4 w-3/4 m-10 shadow-2xl bg-gray-200">
        <img src={back} className="h-100 w-full m-8 shadow-2xl opacity-100 "/>
        <h1 class="absolute text-5xl text-white top-1/2 ml-8 left-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className='max-w-7xl mx-auto flex  flex-wrap justify-between p-4'>
      {loading? (<Loader/>):(
        blogs.map((blog)=>{
          return(
            <ProductCard key={blog.id} blog={blog}/>
          )
        })
      )}
    
    </div>

        </h1>
        {/* <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2> */}
        {/* <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
        {/* <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}

    
    </div>


        
          
        


          
          <div className='flex flex-col m-2 items-center justify-center '>
            <div className='text-4xl'>
            To make one of your own
            </div>

            <Link to="/login"><button className='mr-10 h-1/2 mt-4 p-2 text-black hover:text-lg hover:rounded-2xl  hover:bg-black hover:text-white'>Login</button></Link>
                
          </div>
          </div>

          </div>
          
        
        
       

    
    );
}

function Loader() {
    return (
      <>
        <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
      </>
    );
}
