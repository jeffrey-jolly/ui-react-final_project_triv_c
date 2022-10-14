import React, { useContext, useEffect,useState } from 'react'
import Logo from '../Images/logo2.PNG'
import insta from '../Images/insta_svg.PNG'
import facebook from '../Images/fb_svg.PNG'
import twitter from '../Images/twitter_svg.PNG'
import linkdin from '../Images/linkdin.PNG'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'
import ProductCard from './ProductCard'
import loadingGif from '../Images/tenor.gif'
import { useNavigate } from 'react-router-dom'


export default function Dashboard() {
  let appContext = useContext(AppContext)
  const navigate = useNavigate()
  console.log(appContext.userLoggedIn)
  let [blogs,setBlogs] = useState([])
  let [loading,setLoading] = useState(true);
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

  
  return (
    <div className="max-h-fit">
        <header className=" w-auto h-20 bg-black  text-white flex flex-row justify-between z-10">
            <img src={Logo} className='w-30 h-full ml-10'/>
            <button className='mr-10 h-1/2 mt-4 p-2 hover:text-lg hover:rounded-2xl  hover:bg-gray-500'
             onClick={()=>{appContext.handleLoginStatus(false)
             navigate('/')}}>LogOut</button>
        </header>
        <div className="flex flex-wrap ">
        <aside className="text-xl bg-black h-full w-1/6 shadow-2xl text-white  flex flex-col align-bottom justify-between ">
        
            <ul className="top-nav"> 
                
                
                <li className="p-5 font-bold flex flex-row">
                    
                        <svg className="w-6 h-6 hidden text-2xl " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                           
                        <span>
                            Home

                        </span>  
                  
                </li>

                <li className='p-5 flex flex-row'>
                    
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <span>
                            About us
                        </span> 
                    
                </li>

                <li className='p-5 flex flex-row'>
                    
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <span>
                            Contact us
                          </span>
                    
                </li>

                <li className='p-5 flex flex-row'>
                    
                        <svg className="nav-icon w-6 h-6 hidden"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        <span>
                            Categories
                        </span>  
                    
                </li>

            </ul>

            

               

            <ul className="bottom-nav flex flex-row justify-between text-white pl:2" >
                {/* <li>
                      <img src="https://clipartcraft.com/images/twitter-logo-dark-2.png" alt="twi"/>
                </li>

                <li>
                      <img src="https://i.pinimg.com/originals/8a/77/05/8a770507298d728a1e3e039a0507dd8e.png" alt="int"/>
                  </li> */}

                {/* <li>
                    <img src="https://i.pinimg.com/originals/38/63/61/38636148dc9bfd3655cdd3e71129c8a1.png" alt="fab"/>
                </li>

                <li>
                  <img src="https://cdn.onlinewebfonts.com/svg/img_24845.png" alt="lin"/> 
                </li> */}

                <li>
                  <img src={insta} className="w-8 pl-2 pb-2"/>
                </li>

                <li>
                  <img src={facebook} className="w-7 pr-2 pb-2"/>
                </li>

                <li>
                  <img src={twitter} className="w-8 pr-2 pb-2"/>
                </li>

                <li>
                  <img src={linkdin} className="w-8 pr-2 pb-2"/>
                </li>

            </ul>
            

        </aside>

      <div className='w-5/6 max-h-screen '>

      <div className='p-5'>
            DASHBOARD
          </div>

        <div className='flex  flex-row justify-between w-full '>
          

        <section className=' max-w-7xl mx-auto flex flex-col justify-between w-1/4 '>
                <div className='border border-transparent shadow-lg mr-4 mt-2 p-8  rounded-md flex flex-co justify-between hover:shadow-2xl hover:border hover:bg-yellow-200'>
                  <div className='flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

                    <p className='ml-2'>NUMBER OF POSTS</p>
                  </div>
                  {/* <div>
                    <p>bye</p>
                  </div>
                  <div>
                  <p>tata</p>
                  </div> */}
                </div>
        </section>

        <section className=' max-w-7xl mx-auto flex flex-col  w-1/4 '>
                <div className=' border border-transparent shadow-lg mr-4 mt-4 p-8  rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200'>
                  <div className='flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

                    <p className='ml-2'>STATISTICS</p>
                  </div>
                  {/* <div>
                    <p>bye</p>
                  </div>
                  <div>
                  <p>tata</p>
                  </div> */}
                </div>
        </section>

        <section className=' max-w-7xl mx-auto flex flex-col w-1/4 h-1/3 '>
                <div className='border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200'>
                  <div className='flex flex-row'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
</svg>

                    <p className='ml-2'>CATEGORIES</p>
                  </div>
                  {/* <div>
                    <p>bye</p>
                  </div>
                  <div>
                  <p>tata</p>
                  </div> */}
                </div>
        </section>

        </div>

        <div className='flex  flex-row justify-between w-full h-full'>

        <section className=' max-w-7xl mx-auto flex flex-col justify-between p-4 w-1/2 '>
                <div className='border border-transparent shadow-lg mr-4 h-2/3 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200'>
                  <div className="flex flex-row justify-between items-center">
                      <p>BLOGS</p>
                      <Link to="/create">
                      <button className='mr-2  p-1 w-fit h-fit text-sm text-white rounded-md bg-black hover:bg-gray-400'>CREATE POSTS</button></Link>
                  </div>
                  <div>
                      <p>
                      <div className='max-w-7xl mx-auto flex max-h-fit flex-col bg-red-400 justify-between p-4 '>
                    {loading? (<Loader/>):(
                        blogs.map((blog)=>{
                            return(
                            <ProductCard key={blog.id} blog={blog}/>
                            )
                        })
                    )}
                </div>
                      </p>
                  </div>
                </div>
                  
                  {/* <div>
                    <p>bye</p>
                  </div>
                  <div>
                  <p>tata</p>
                  </div> */}
                
        </section>

        

        <section className=' max-w-7xl mx-auto flex flex-col p-4 w-1/2'>
                <div className='border border-transparent shadow-lg mr-4 h-2/3 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200'>
                  <div>
                    <p>hi</p>
                  </div>
                  {/* <div>
                    <p>bye</p>
                  </div>
                  <div>
                  <p>tata</p>
                  </div> */}
                </div>
        </section>

        </div>

      </div>
                  

                {/* <div className='bg-yellow-400 flex flex-row justify-between'>
                    <div>
                        <p>gfv</p>
                    </div>

                    <div>
                          <p>fjrhg</p>
                    </div>
                    

                </div>

                <div>
                    <div>

                    </div>

                </div>
            </section> */}

        {/* <main>
            <header>
                
                 <div class="arrow-header">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                          </svg>
                          
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                          
                    </div>
                </div>
                <!-- Header buttons -->
                <div class="buttons-header">
                   
                    <a href="#" class="signup-btn">Sign Up</a>
                    <a href="#" class="login-btn">Login</a>

                </div>
            </header>

          

        </main> */}
    </div>
    </div>
    
  )
}

function Loader() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    </>
  );
}