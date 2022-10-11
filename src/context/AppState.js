import React from 'react'
import {useState,useEffect} from "react"
import AppContext from './AppContext'

export default function AppState(props) {

    let credential = {user_name:"TeamC",password:"t3amc"}
    let [userLoggedIn,setUserLoggedIn] = useState(false)
    return (
    <AppContext.Provider value={{
        credential,userLoggedIn,setUserLoggedIn
    }}>
        {props.children}
    </AppContext.Provider>
  )
}
