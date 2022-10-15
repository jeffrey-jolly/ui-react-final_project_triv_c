import React from 'react'
import {useState,useEffect} from "react"
import AppContext from './AppContext'

export default function AppState(props) {

    let credential = {user_name:"TeamC",password:"t3amc"}
    let [userLoggedIn,setUserLoggedIn] = useState(checkLSStatus())
    let [count, setCount] = useState(checkViewStatus())

    function checkLSStatus(){
        if(localStorage.getItem('login_status')){
          return JSON.parse(localStorage.getItem('login_status'))
        } else{
          localStorage.setItem('login_status', JSON.stringify(false));
          return JSON.parse(localStorage.getItem('login_status'))
        }
      }

      function checkViewStatus(){
        if(localStorage.getItem('view_count')){
            return JSON.parse(localStorage.getItem('view_count'))

        } else{
            localStorage.setItem('view_count', JSON.stringify(0))
            return JSON.parse(localStorage.getItem('view_count'))
        }
      }

      function saveStatusToLS(value){
        localStorage.setItem('login_status', JSON.stringify(value));
        setUserLoggedIn(value)
      }

      function saveCountToLS(value){
        localStorage.setItem('view_count', JSON.stringify(value));
        setCount(value)
      }

      function getStatusFromLS(){
        setUserLoggedIn(JSON.parse(localStorage.getItem('login_status')));
      }

      function getCountFromLS(){
        setCount(JSON.parse(localStorage.getItem('view_count')));
      }

      function handleLoginStatus(value){
        localStorage.setItem('login_status', JSON.stringify(value));
        saveStatusToLS(value)
        getStatusFromLS()
      }

      function handleViewCount(){
        localStorage.setItem('view_count', JSON.stringify(count));
        saveCountToLS(count+1)
        getCountFromLS()
      }
 
   
    return (
    <AppContext.Provider value={{
        credential,userLoggedIn,setUserLoggedIn,handleLoginStatus, handleViewCount, count
    }}>
        {props.children}
    </AppContext.Provider>
  )
}

