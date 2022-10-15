import  parse  from 'html-react-parser'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext'
import loadingGif from '../Images/tenor.gif'
import Header from './Header'
import { fetchThunkBlog } from '../redux/actions/counter.action'

export default function SinglePage() {
    let { id } = useParams()
    let [loading, setLoading] = useState(true)
    let [blog, setBlog] = useState([])
    const apiURL = "http://localhost:3000/posts/"
    let appContext = useContext(AppContext)
    const navigate = useNavigate()
    
  
    const dispatch = useDispatch()
    
    let {post} = useSelector(state => state)

   
    async function getNewBlog() {
        let response = await fetch(`${apiURL}` + id)
        console.log("Response", response)
        if (response.ok) {
            dispatch(fetchThunkBlog(response))
            console.log("Posts in single",post)
            setLoading(false)

        } else {
            console.log("Error")
            setLoading(false)
        }

    }
    useEffect(() => {
        getNewBlog()
    }, [id])

    // async function deletePost(){
    //     let response = await fetch(apiURL+id,{
    //         method:"DELETE",

    //     })
    //     console.log(response)
    //     navigate('/')
    //     toast.success("Deleted the post")
    // }

    
    function Loader() {
        return (
          <>
            <img src={loadingGif} alt="Loading" className="w-64 mx-auto mt-56" />
          </>
        );
    }

    return (
        <div>
            <Header/>
            {loading? (<Loader/>):(<>
             
            <div className='p-8 border border-slate-100 m-10 rounded-lg h-fit  shadow-lg'>
            <h1 className=" text-center text-6xl font-bold mt-3">{post.title}</h1>
            <p className='text-right mr-10 text-light text-sm text-gray-400'>{post.createdAt}</p>




             <div className=" w-full ">
                {parse(`${post.body}`)}
                </div>
            </div>
            <div className='inline-flex ml-10 items-right'> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className='text-right w-6 h-6'>
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <h3 >

                {post.noOfLikes}</h3></div>

          
            </>)}

        </div>
    )
}
