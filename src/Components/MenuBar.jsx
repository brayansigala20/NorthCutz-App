import React from 'react'

const MenuBar = ({handleComponent}) => {
  
  return (
    <div className='px-2'>
        <ul className=''>
            <li htmfor='' className='text-2xl text-white p-2 hover:bg-slate-600'>
              <button name='home' className='w-full' onClick={handleComponent} 
              >home</button></li>     
            <li htmfor='' className='text-2xl text-white p-2 hover:bg-slate-600'>
              <button name='agregarCita' className='w-full' onClick={handleComponent} 
              >nueva Cita</button></li> 
            <li htmfor='' className='text-2xl text-white p-2 hover:bg-slate-600'>
              <button name='bandeja' className='w-full' onClick={handleComponent} 
              >bandeja</button></li>  
          
        </ul>
    </div>
  )
}

export default MenuBar  