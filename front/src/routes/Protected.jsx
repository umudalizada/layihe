import { Navigate } from "react-router-dom"

export const ProtectedAdmin=({element,admin=false})=>{

    let user = JSON.parse(localStorage.getItem("user"))

    if(admin && user?.user==false ){
        return <Navigate to="/404"/>
    }
    return element
}


export const ProtectedProfil=({element,profile=false})=>{

    let user = JSON.parse(localStorage.getItem("user"))

    if(profile && !user ){
        return <Navigate to="/login"/>
    }
    return element
}