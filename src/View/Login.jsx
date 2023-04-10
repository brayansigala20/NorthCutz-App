import React, {useContext} from 'react'
import { firebaseContext } from '../Firebase'


const Login = () => {
  const {handlelogout, handleRegistrar} = useContext(firebaseContext)

  return (
    <>
      <div className='py-10 flex justify-center'>
        <div className='flex flex-col items-center'>
          <label className='text-3xl text-white font-bold'>Inicia sesion mediante tu cuenta de Administrador en <span className='text-3xl'>Google</span></label>
          <div className='w-2/3 py-20 px-8 shadow rounded-xl mt-20 bg-slate-200'>
                <label className='ml-4 font-semibold'>Alias de la empresa</label>
                <input 
                  placeholder='alias'
                  className=' block mt-2 w-full rounded-full mb-4 py-2 outline-none px-5 bg-slate-300'
                  type={'text'} />
                  <button 
                  className='botonSesion p-3 rounded-full w-full text-white '
                   onClick={handleRegistrar}>iniciar sesion whit google</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login