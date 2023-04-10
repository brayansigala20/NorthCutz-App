import React, { useEffect } from 'react'

const ModalAgenda = ({dataEvent,handleClose}) => {
  return (
    <>
    <button 
      onClick={handleClose}
      className='flex w-full justify-end p-1'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
        stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </button>
    <div className='p-5'>
    <label className='ml-4 font-semibold'>nombre</label>
    <input 
      value={dataEvent.title}
      name='title'
      onChange={'handleOnchange'}
      placeholder='nombre'
      className=' text-black block mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
      type={'text'} />
    <label className='ml-4 font-semibold'>inicia</label>
    <input 
      value={dataEvent.start}
      name='start'
      onChange={'handleOnchange'}
      className='  text-black mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
      type={'datetime-local'} />
      <label className='ml-4 font-semibold'>termina</label>
    <input 
      value={dataEvent.end}
      name='end'
      onChange={'handleOnchange'}
      className='  text-black mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
      type={'datetime-local'} />
    <button 
      className=' bg-slate-600 p-3 rounded-full w-full text-white mt-2           '
       onClick={''}>agendar</button>
       </div>
    </>
  )
}

export default ModalAgenda