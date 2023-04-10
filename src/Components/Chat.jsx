import React,{useContext, useState} from 'react'
import { firebaseContext } from '../Firebase'

const Chat = ({messages}) => {
    const {handleNuevoChat, usuario} = useContext(firebaseContext)
    const [mensajeInput, setMensajeInput] = useState("")

  const handleOnChange = (e)=>{
    e.preventDefault()
    setMensajeInput(e.target.value)
  }
  const handleSubmit = ()=>{
     handleNuevoChat({
        text: mensajeInput,
        usuario: usuario.email
     })
  }

  return (
    <div className=' min-h-full flex flex-col'>
      <div className='flex-1'>
        {messages? messages.map(data=> (
          <h1 key={data.id} >{data.text}</h1>
        )): ''}
      </div>
      
      <div className=''>
      <input
       value={mensajeInput}
       onChange={handleOnChange}
       className='w-full '
       type="text" />
      </div>
      <button 
        onClick={handleSubmit}
      >
        snd
      </button>
    </div>
  )
}

export default Chat