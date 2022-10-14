import React from 'react'
import {useState,useEffect} from "react"
import AppContext from './AppContext'

export default function AppState(props) {

    let credential = {user_name:"TeamC",password:"t3amc"}
    let [userLoggedIn,setUserLoggedIn] = useState(false)
    let [postId,setPostId]= useState("")
    return (
    <AppContext.Provider value={{
        credential,userLoggedIn,setUserLoggedIn,setPostId
    }}>
        {props.children}
    </AppContext.Provider>
  )
}
