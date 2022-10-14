import React, { useContext } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import AppContext from '../context/AppContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Login() {
    let appContext = useContext(AppContext)
    const navigate = useNavigate()
    let formik=useFormik({
    initialValues:{
      name:"",
      password:""
    },
    onSubmit:function(values){
      console.log(values);
      console.log(appContext.credential.user_name)
     if(values.name === appContext.credential.user_name && values.password === appContext.credential.password){
        toast.success('Welcome')
        appContext.handleLoginStatus(true)
        navigate('/dashboard')
     }else{
        toast.error("Wrong Credentials!")
        appContext.setUserLoggedIn(false)
     }
  },
    validationSchema:Yup.object({
      name:Yup.string().required('Full Name is required').matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed"),
      // name: Yup.string().required("Enter your username"),
      password: Yup.string().required("Enter your password"),

    }),
  });

  return (
    <div>
      <Header/>
    <div className="flex p-6 rounded-lg shadow-lg bg-white max-w-sm my-20  mx-auto min-h-80 justify-center align-baseline">
  <form onSubmit={formik.handleSubmit}>
    <div className="form-group mb-6">
      <label forhtml="exampleInputEmail2" ><b>USERNAME</b></label>
      <input type="name" className={`${formik.touched.name && formik.errors.name ? 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-hite focus:border-blue-600 focus:outline-none': 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-hite focus:border-blue-600 focus:outline-none'}`} 
             onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.name}
       id="name"  placeholder="Enter username"/>
       {formik.touched.name && formik.errors.name && (
            <span className="error text-red-600 text-xs">{formik.errors.name}</span>)}
    </div>
    <div className="form-group mb-6">
      <label forhtml="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700"><b>PASSWORD</b></label>
      <input type="password" className={`${formik.touched.password && formik.errors.password? 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-red-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-hite focus:border-blue-600 focus:outline-none': 'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-hite focus:border-blue-600 focus:outline-none'}`} 
             onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.password} id="password"
        placeholder="Enter Password"/>
        {formik.touched.password && formik.errors.password && (
            <span className="error text-red-600 text-xs">{formik.errors.password}</span>)}
    </div>
    {/* <div className="flex justify-between items-center mb-6">
      <div className="form-group form-check">
        <input type="checkbox"
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="exampleCheck2"/>
        <label className="form-check-label inline-block text-gray-800 text-sm" forhtml="exampleCheck2" >Remember me</label>
      </div>
      <a href="#!"
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out text-sm">Forgot
        password?</a>
    </div> */}
    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">LOGIN</button>
    <p className="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
    </p>
  </form>
</div>
</div>
    

    );
}
