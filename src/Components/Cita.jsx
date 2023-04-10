import React from 'react'

const Cita = ({data}) => {
  return (
    <div className='flex'>
        <div className='border'>
           <label>{data.nombre}</label>
        </div>
    </div>
  )
}

export default Cita