import React,{useState,useContext} from 'react'
import { firebaseContext } from '../Firebase'
import { initialData } from '../Helpers'
import { generarID } from '../Helpers'
const AgragarCita = () => {
    const {handleAgendarCita, setComponente} = useContext(firebaseContext)
    const [data, setData] = useState(initialData)

    const handleOnchange = (e)=>{
        setData({
            ...data,
            id: generarID(),
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        handleAgendarCita(data)
        setTimeout(()=>{
            setComponente('home')
        },3000)
        setData(initialData)
    }
  return (
        <div className=''>
        <div className=' flex justify-center w-full'>
        <div className='flex flex-col items-center w-3/4 '>
          <label className='text-3xl mb-2 text-white font-bold'>nueva cita</label>
          <div className=' py-10 px-8 md:w-3/4  shadow rounded-xl  bg-slate-200'>
                <label className='ml-4 font-semibold'>nombre</label>
                <input 
                  value={data.title}
                  name='title'
                  onChange={handleOnchange}
                  placeholder='nombre'
                  className=' block mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
                  type={'text'} />
                <label className='ml-4 font-semibold'>inicia</label>
                <input 
                  value={data.start}
                  name='start'
                  onChange={handleOnchange}
                  className='mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
                  type={'datetime-local'} />
                  <label className='ml-4 font-semibold'>termina</label>
                <input 
                  value={data.end}
                  name='end'
                  onChange={handleOnchange}
                  className='mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
                  type={'datetime-local'} />
                <button 
                  className=' bg-slate-600 p-3 rounded-full w-full text-white mt-2           '
                   onClick={handleSubmit}>agendar</button>
          </div>
        </div>
        </div>
        </div>
  )
}

export default AgragarCita