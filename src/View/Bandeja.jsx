import React,{useContext, useEffect, useState} from 'react'
import { firebaseContext } from '../Firebase'
import { getDocs, collection, query, limit,orderBy, onSnapshot } from 'firebase/firestore'

const Bandeja = () => {
    const { usuario,firebase} = useContext(firebaseContext)
    const [inbox, setInbox] = useState([])
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        const queryMessages = async ()=>{
          try{
              onSnapshot(collection(firebase.db,'chat'),(snapShot)=>{
                const data = []
                snapShot.forEach((doc)=>{
                  data.push({...doc.data(),id:doc.id})
                })
                setMessages(data)
              })
        }catch(error){
          console.log(error)
        }
        }
        queryMessages()
      },[])
      useEffect(()=>{
        const updateData = messages.filter(data=> data.usuario !== usuario.email ) 
        setInbox(updateData)
      },[messages])
  return (
    <>
    <div className='flex flex-col'>
        {inbox ? inbox.map(data => (
            <div key={data.usuario} className='w-full h-20 border '>{data.usuario}</div>
        )): ''}
    </div>
    </>
  )
}

export default Bandeja