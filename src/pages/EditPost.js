import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom';
import loadingGif from '../Images/tenor.gif'
import Header from './Header';

export default function Editors() {
    const { quill, quillRef } = useQuill();
    let [blog, setBlog] = useState([])
    let [title, setTitle] = useState()
    let [body, setBody] = useState()
    let [category, setCategory] = useState()
    let { id } = useParams()
    let [loading, setLoading] = useState(true)

    let url = "http://localhost:3000/posts/"
    const navigate = useNavigate()

    async function getPost() {
        let response = await fetch(url + id)
        console.log("response", response)
        let result = await response.json()
        console.log(result)
        setBlog(result)
        setTitle(result.title)
        setBody(result.body)
        setCategory(result.category)
        setLoading(false)
        console.log(result.body)
    }

    useEffect(() => {
        getPost()
    }, [id])

    React.useEffect(() => {
        if (quill) {
            // quill.root.innerHTML = `${blog.body}`
            quill.on('text-change', () => {
                console.log(quill.root.innerHTML); // Get innerHTML using quill
                console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                setBody(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);



    useEffect(() => {
        if (quill) {
            quill.root.innerHTML = `${blog.body}`
        }
    }, [quill])


    let addPost = async () => {
        let response = await fetch(url + id, {
            method: "PATCH",
            body: JSON.stringify({

                title: `${title}`,
                body: `${body}`,
                category: `${category}`

            }),

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        let data = await response.json();
        console.log(data, "this is data");
        navigate('/dashboard')
        toast.success("success")

    }

    function Loader() {
        return (
            <>
                <img src={loadingGif} alt="Loading" className="w-64 mx-auto mt-56" />
            </>
        );
    }

    // console.log(values, "this is value var")



    return (

        <div>
            <Header />
            <div className=" flex flex-col gap-y-2 space-y-1 mt-5">
                {loading ? (<><Loader /></>) : (<>
                    {/* <input className="mx-auto border border-slate-600 rounded-md px-auto w-1/2 h-10 text-center" type="text" placeholder="Add title" value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                    console.log(title)
                }}></input>

            <div className=" mx-auto">

                <Toaster />

                <div>

                    <div className="w-full h-96 mb-4 px-2 py-3">
                        <div ref={quillRef} />
                    </div>

                </div>

            </div>

            <button className="mx-auto border-2 border-slate-200 rounded-lg px-2 bg-slate-200 shadow-lg" onClick={
                addPost}>
                Submit
            </button> */}


                    <div className=' flex flex-wrap justify-center space-x-3'>
                        <div className=" w-80">
                            <input className="mx-auto border border-slate-600 rounded-md px-auto w-full h-10 text-center" type="text" placeholder="Add title" value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                    console.log(title)
                                }}></input>

                        </div>

                        <div className=' ml-0 '>
                            <select className=' border border-slate-600 rounded-md px-auto text-left text-sm w-fit h-full' value={category} onChange={(event) => {
                                setCategory(event.target.value)
                                console.log(event.target.value)
                            }}>
                                <option>Entertainment</option>
                                <option>Health & Fitness</option>
                                <option>Food</option>
                                <option>Technology</option>
                                <option>Your space</option>

                            </select>

                        </div>


                    </div>

                    <div className=" mx-auto">

                        <Toaster />

                        <div>

                            <div className="w-full h-96 mb-8 px-2 py-3">
                                <div ref={quillRef} />
                            </div>

                        </div>


                    </div>

                    <button className="mx-auto border-2 border-slate-200 rounded-lg px-2 bg-slate-200 shadow-lg" onClick={
                        addPost}>
                        Submit
                    </button>

                </>)}


            </div>
        </div>

    )
}

