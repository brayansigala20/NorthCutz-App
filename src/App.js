import { useState } from "react";
import { firebaseContext } from "./Firebase";
import firebase from "./Firebase";
import useAuth from './Hooks/useAuth'
import Layout from "./View/Layout/Layout";
import Login from "./View/Login";



function App() {
  const usuario = useAuth()
  const [componente, setComponente] = useState('home')
  const handleRegistrar =()=>{
    firebase.Registrar()
}
const handlelogout = ()=>{
    firebase.Logout()
}
const handleAgendarCita = (data)=>{
    firebase.AgendarCita(data)
}       
const handleUpdateCita = (dataUpdate)=>{
    firebase.ActualizarCita(dataUpdate)
}
const handleNuevoChat = (data)=>{
    firebase.ChatMessages(data)
}


return (
    <firebaseContext.Provider
        value={{
          firebase,
          usuario,
          handleRegistrar,
          handlelogout,
          handleAgendarCita,
          componente,
          setComponente,
          handleUpdateCita,
          handleNuevoChat
          }}
    >
      <div className="bg-slate-700 h-screen">
         {usuario? <Layout/>: <Login/>}
      </div>
    </firebaseContext.Provider>
  
  );
}

export default App;
