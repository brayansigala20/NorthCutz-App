import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "../Firebase";

const useAuth = ()=>{
    const [usuarioAuth, setUsuarioAuth] = useState(null)
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(firebase.auth,usuario=>{
             if(usuario){
                setUsuarioAuth(usuario)
             }else{
                setUsuarioAuth(usuarioAuth)
             }
        })
        return()=> unsuscribe()
    },[])
    return usuarioAuth
}
export default useAuth