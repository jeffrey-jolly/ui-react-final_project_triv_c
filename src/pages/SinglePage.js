import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePage() {
    let { id } = useParams()
    let [loading, setLoading] = useState(true)
    let [blog, setBlog] = useState([])
    const apiURL = "http://localhost:3000/posts/"

    async function getNewBlog() {
        let response = await fetch(`${apiURL}` + id)
        console.log("Response", response)
        if (response.ok) {
            let result = await response.json()
            console.log("Result", result)
            setBlog(result)
            setLoading(false)

        } else {
            console.log("Error")
            setLoading(false)
        }

    }
    useEffect(() => {
        getNewBlog()
    }, [id])

    return (
        <div>
          
            
            <div className='p-8 border border-slate-100 m-10 rounded-lg h-fit min-w-fit shadow-lg'>
            <h1 className=" text-center text-6xl font-bold mt-3">{blog.title}</h1>
            <p className='text-right mr-10 text-light text-sm text-gray-400'>{blog.createdAt}</p>





                <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
            </div>
            <div className='inline-flex ml-10 items-right'> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6" className='text-right w-6 h-6'>
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <h3 >

                {blog.noOfLikes}</h3></div>


        </div>
    )
}
