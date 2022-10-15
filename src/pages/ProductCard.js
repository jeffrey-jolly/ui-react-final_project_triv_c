import React from 'react'
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext'


export default function ProductCard(props) {

  let appContext = useContext(AppContext)
  return (
  
        
        <div className="w-full h-full border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-row justify-between hover:shadow-2xl hover:border hover:bg-green-200 hover:bg-opacity-70">
         <Link to={`/single-page/${props.blog.id}`} ><pre  onClick={()=>{appContext.handleViewCount()}}>
            <h3 className='text-sm font-bold text-white my-4'>Title : {props.blog.title}</h3>
            <h3 className='text-sm  text-white my-4'>Blog ID : {props.blog.categoryId}</h3>
            <h3 className='text-sm  text-white my-4'>Created on : {props.blog.createdAt}</h3>
          </pre>
          </Link> 
      </div>
        

    
  );
}
