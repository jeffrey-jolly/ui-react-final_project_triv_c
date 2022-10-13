import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
// import AppContext from './Context/AppContext';

export default function ProductCard(props) {

//   let appContext = useContext(AppContext)
  return (
  

        <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:bg-yellow-200">
      {/* <img src={props.blog.image} className="h-64 mx-auto" /> */}
      {/* <Link to={`/products/${props.blog.id}`}> */}
        <h3 className='text-2xl font-bold text-green-500 my-4'>{props.blog.title}</h3>
      {/* <p>Category : {props.item.category?props.item.category:"No Category Available"}</p> */}
      <h3 className='text-2xl font-bold text-green-500 my-4'>{props.blog.categoryId}</h3>
      <h3 className='text-2xl font-bold text-green-500 my-4'>{props.blog.createdAt}</h3>
      </div>
        

    
  );
}