import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo4.png'
import back from '../Images/Leaves.jpg'
import ProductCard from './ProductCard';
import loadingGif from '../Images/tenor.gif'
import AppContext from '../context/AppContext';
export default function HomePage(){

    let [loading,setLoading] = useState(true);

    let appContext = useContext(AppContext)

    let [blogs, setBlogs] = useState([])
    const apiURL = "http://localhost:3000/posts"

    const navigate = useNavigate()

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
    <div className="body-wrapper max-h-fit">
        <div className="nav">
            {loading?(<Loader/>):(
            <div>
                <header className=" w-auto h-20 bg-black  text-white flex flex-row justify-between z-10">
                <img src={Logo} className='w-30 h-full mx-auto cursor-pointer p-1'/>
                </header>
                <div className='flex flex-row items-center h-1/4 hover:scale-100 p-2'>
                    <div className="relative h-1/4 w-1/2 m-5 shadow-2xl bg-gray-200">
                        <img src={back} className="h-100 w-full m-8 shadow-2xl opacity-100 "/>
                        <h1 className="absolute text-5xl text-white top-1/3 w-full  mt-20 ml-10 left-1/2 h-3/4 -translate-x-1/2 -translate-y-1/2 flex justify-evenly">
                        <div className='w-full flex flex-col  justify-evenly overflow-hidden hover:overflow-y-scroll  p-4'>
                            {loading? (<Loader/>):(
                                blogs.map((blog)=>{
                                    return(
                                    <ProductCard key={blog.id} blog={blog}/>
                                )
                            })
                        )}
                        </div>
                    </h1>
                </div>
                    <div className='flex flex-col ml-14 items-center justify-center  '>
                        <div className='text-4xl font-semibold'>
                        To make one of your own...
                        </div>
                        <button className='mr-10 h-1/2 mt-6 p-2 shadow-lg border border-slate-400 rounded-2xl text-black hover:text-lg hover:rounded-2xl  hover:bg-black hover:text-white' onClick={()=>
                        {navigate('/login')}}>Login</button>
                    </div>
                </div>
            </div>
            )}
            
           
            
          
    </div>
         

    </div>
          
      
        
       

    
    );
}

function Loader() {
    return (
      <>
        <img src={loadingGif} alt="Loading" className="w-fit h-fit mx-auto mt-12" />
      </>
    );
}

