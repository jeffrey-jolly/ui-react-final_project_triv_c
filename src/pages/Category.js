import React, { useContext, useEffect, useState } from 'react'
import Logo from '../Images/logo2.PNG'
import insta from '../Images/insta_svg.PNG'
import loadingGif from '../Images/tenor.gif'
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import Header from './Header'
import parse from 'html-react-parser'
import AppContext from '../context/AppContext'
import '../App.css'
import facebook from '../Images/fb_svg.PNG'
import twitter from '../Images/twitter_svg.PNG'
import linkdin from '../Images/linkdin.PNG'








export default function Category() {
    let {category} = useParams()
    let [blogs, setBlogs] = useState([])
let [loading, setLoading] = useState(true);
let appContext = useContext(AppContext)
const apiURL = "http://localhost:3000/posts?category="
    async function getNewBlog() {
        let response = await fetch(apiURL+category)
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

      async function deletePost(val){
        let response = await fetch(apiURL+'/'+val,{
            method:"DELETE",
      
        })
        
        console.log(response)
        toast.success("Deleted the post")
        window.location.reload()
      }
    
      
      useEffect(() => {
        getNewBlog()     
      },[])
    

  return (
    <div className='h-full'>
        <Header/>
        <div className="flex flex-row w-full max-h-full h-full">
        {/* <div className="text-xl bg-black max-h-full w-1/6 shadow-2xl text-white  flex flex-col align-bottom justify-between p-2">

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
    <div className="dropdown1">
    <span>
      Categories
    </span>
    <div class="dropdown-content text-xs p-2 font-light">
  <Link to='/category/Entertainment'>Entertainment</Link>  
  <Link to='/category/Food'>Food</Link> 
  <Link to='/category/Technology'>Technology</Link> 
   <Link to='/category/YourSpace'>Your Space</Link>
   <Link to='/category/Health&Fitness'>Health & Fitness</Link>

      
      </div>
    </div>
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


</div> */}
         <section className='h-full max-w-7xl mx-auto flex flex-col justify-between p-5 w-full'>
                <div className='border border-transparent shadow-lg mr-4 h-full mt-4 p-6  rounded-md flex flex-col justify-between hover:shadow-2xl hover:border '>
                  <div className="inline-flex justify-between items-center ">
                    <p className='font-bold text-2xl text-gray-600'>{category}</p>
            
                  </div>

                  <div className=' h-full'>

                    <div className='w-full h-full mx-auto flex overflow-hidden hover:overflow-y-scroll p-2 my-auto flex-col justify-between'>
                      {loading ? (<Loader />) : (
                        blogs.map((blog) => {
                          return (
                            // <ProductCardDash key={blog.id} blog={blog}/>
                            <>

                            <div className="w-full h-fit border border-transparent shadow-xl p-2 rounded-md flex flex-col justify-between mt-3 hover:shadow-2xl hover:border hover:bg-slate-100 hover:bg-opacity-70 ">
                            <Link to={`/single-page/${blog.id}`}>  <pre onClick={()=>{appContext.handleViewCount()}}>
                                  <h3 className='text-lg font-bold  my-2'>{blog.title}</h3>
                                  <h3 className='ml-0 text-sm italic' >{blog.category}</h3>
                                  <h3 className='text-sm my-2 truncate'>{parse(`${blog.body}`)}</h3>
                                  <h3 className='text-sm my-4 font-light'>{blog.createdAt}</h3>

                                </pre></Link> 
                                <div className='justify-between inline-flex'>
                               <Link to={`/edit/${blog.id}`}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="darkgreen" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg></Link>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6 cursor-pointer" onClick={()=>{deletePost(blog.id)
                                   
                                
                                }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                  </svg>



                                </div>
                              </div>


                            </>
                          )
                        })
                      )}
                    </div>

                  </div>
                </div>

  

              </section>
              </div>
    </div>
  )
}
function Loader() {
    return (
        <>
            <img src={loadingGif} alt="Loading" className="w-fit h-fit mx-auto mt-12" />
        </>
    );
}