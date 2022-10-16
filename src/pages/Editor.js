import React, { useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import {toast, Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Editors() {
    const { quill, quillRef } = useQuill();
    const [values,setValues] = useState()
    let [title,setTitle] = useState("")
    let [category, setCategory] = useState("")
    const navigate = useNavigate()


    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            // console.log('Text change!');
            // console.log(quill.getText()); // Get text only
            // console.log(quill.getContents()); // Get delta contents
            // console.log(quill.root.innerHTML); // Get innerHTML using quill
            console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
            setValues(quillRef.current.firstChild.innerHTML)
          });
        }
    }, [quill]);

    console.log(values, "this is value var")

        const current = new Date()
        let url="http://localhost:3000/posts"
        let addPost= async()=>{
        let response = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
                
                title: `${title}`,
                category: `${category}`,
                authorId:1,
                noOfLikes:23,
                createdAt:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
                body:`${values}`

            }),

            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        let data = await response.json();
        console.log(data,"this is data");
        setTitle("")
        toast.success("success")
        navigate('/dashboard')

        

        
    }
    
  return (
    <div>
        <Header/>
    <div className=" flex flex-col gap-y-2 space-y-1 mt-5">
        <div className=' flex flex-wrap justify-center space-x-3'>
            <div className=" w-80">
                <input className="mx-auto border border-slate-600 rounded-md px-auto w-full h-10 text-center" type="text" placeholder="Add title" value={title}
                onChange={(event)=>{
                    setTitle(event.target.value)
                    console.log(title)
                }}></input>

            </div>
            
            <div className=' ml-0 '>
                <select className=' border border-slate-600 rounded-md px-auto text-left text-sm w-fit h-full' required onChange={(event)=>{
                    setCategory(event.target.value)
                    console.log(event.target.value)
                }}>
                    <option>Choose a category</option>
                    
                    <option>Entertainment</option>
                    <option>Health & Fitness</option>
                    <option>Food</option>
                    <option>Technology</option>
                    <option>Your space</option>

                </select>

            </div>
           

        </div>

        <div className=" mx-auto">

        <Toaster/>
        
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
    </div>
    </div>

  )
}

