import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { useState } from 'react';
import Logo from '../Images/logo4.png'
import back from '../Images/Leaves.jpg'
import ProductCard from './ProductCard';
import loadingGif from '../Images/tenor.gif'
import AppContext from '../context/AppContext';

export default function HomePage() {

    let [loading, setLoading] = useState(true);

    let appContext = useContext(AppContext)
    let [searchValue, setSearchValue] = useState("")
    let [newBlog,setNewBlog] = useState([])
    let datab = []
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

    function getSearch(){
        console.log("Search value",searchValue)
        blogs.filter(blog => blog.title.match(new RegExp(searchValue,"i"))).map(blog => {
            // console.log(blog.body)
            // console.log(blog.title)
            console.log("Blog:",blog)
            datab.push(blog)
            // setNewBlog(...newBlog,blog)
         
        })
        console.log("pushed",datab)
        // setSearchValue("")
        setNewBlog(datab)
       
     
        
    }
  
    useEffect(() => {
        getNewBlog()
        
       
    }, [searchValue])





    return (
        <div className="body-wrapper max-h-fit">
            <div className="nav">
                {loading ? (<Loader />) : (
                    <div>
                        <header className=" w-auto h-20 bg-black  text-white flex flex-row justify-between z-10">
                            <img src={Logo} className='w-30 h-full mx-auto cursor-pointer p-1' />
                        </header>
                        <div className='flex flex-row items-center h-1/4 hover:scale-100 p-2'>
                            <div className="relative h-1/4 w-1/2 m-5 shadow-2xl bg-gray-200">
                                <img src={back} className="h-100 w-full m-8 shadow-2xl opacity-100 " />
                                <h1 className="absolute text-5xl text-white top-1/3 w-full  mt-20 ml-10 left-1/2 h-3/4 -translate-x-1/2 -translate-y-1/2 flex justify-evenly">
                                    <div className='w-full h-80 mx-auto flex overflow-hidden hover:overflow-y-scroll p-2 my-auto flex-col justify-between'>
                                        {loading ? (<Loader />) : (
                                         
                                           ( newBlog.length>0?(newBlog):(blogs)).map((blog) => {
                                                return (
                                                    <ProductCard key={blog.id} blog={blog} />
                                                    
                                                )
                                            })
                                        )}
                                    </div>
                                </h1>
                            </div>
                            <div className='flex flex-col ml-14 items-center justify-center  gap-y-2'>
                                <div className='inline-flex gap-x-2 border border-black rounded-lg p-2 '>
                                    <input type="text" placeholder="Search" className='rounded-md w-fit border border-gray-400 px-2' value={searchValue} onChange={(event)=>{setSearchValue(event.target.value)
                                    console.log("search",searchValue && searchValue)
                                    // getSearch()
                                    }}></input>
                                    <button className='border border-slate-200 rounded-full p-2 w-fit hover:bg-black hover:text-white' type="submit" onClick={getSearch}>Search</button>
                                </div>
                                <div className='text-4xl font-semibold'>
                                    To make one of your own...
                                </div>
                                <button className='mr-10 h-1/2 mt-6 p-2 shadow-lg border border-slate-400 rounded-2xl text-black hover:text-lg hover:rounded-2xl  hover:bg-black hover:text-white' onClick={() => { navigate('/login') }}>Login</button>
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

