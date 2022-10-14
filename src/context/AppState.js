import React from 'react'
import {useState,useEffect} from "react"
import AppContext from './AppContext'

export default function AppState(props) {

    let credential = {user_name:"TeamC",password:"t3amc"}
    let [userLoggedIn,setUserLoggedIn] = useState(checkLSStatus())

    function checkLSStatus(){
        if(localStorage.getItem('login_status')){
          return JSON.parse(localStorage.getItem('login_status'))
        } else{
          localStorage.setItem('login_status', JSON.stringify(false));
          return JSON.parse(localStorage.getItem('login_status'))
        }
      }

      function saveStatusToLS(value){
        localStorage.setItem('login_status', JSON.stringify(value));
        setUserLoggedIn(value)
      }

      function getStatusFromLS(){
        setUserLoggedIn(JSON.parse(localStorage.getItem('login_status')));
      }

      function handleLoginStatus(value){
        localStorage.setItem('login_status', JSON.stringify(value));
        saveStatusToLS(value)
        getStatusFromLS()
      }
 
   
    return (
    <AppContext.Provider value={{
        credential,userLoggedIn,setUserLoggedIn,handleLoginStatus
    }}>
        {props.children}
    </AppContext.Provider>
  )
}

