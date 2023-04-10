  import React, { useContext, useEffect, useState } from 'react'
  import MenuBar from '../../Components/MenuBar'
  import Home from '../Home'
  import AgragarCita from '../AgragarCita'
  import Bandeja from '../Bandeja'
  import { firebaseContext } from '../../Firebase'



  const Layout = () => {
    const { componente, setComponente } = useContext(firebaseContext)
      const [menu, setMenu] = useState(true)
      const [render, setRender] = useState([])
      const handleMenu = ()=>{
          setMenu(!menu)
      }
      const componentRender = [
      {
        name: "home",
        component: <Home/>
      },
      {
        name: "bandeja",
        component: <Bandeja/>
      },
      {
        name: "agregarCita",
        component: <AgragarCita/>
      }
    ]
    const handleComponent = (e)=>{
      setComponente(e.target.name)
    }

      useEffect(()=>{
          const componentRend = ()=>{
            const filtro = componentRender.filter(component=> component.name === componente ).map(componenteMap=> componenteMap)
            setRender(filtro)
          }
          componentRend()
      },[componente])
      
    

      return (
      <>
          <div className=' flex h-screen'>
              <aside className='navBar h-full  border-gray-500 border-r-2'>
                  <div className='flex justify-end p-5'>
                  <button 
                  onClick={handleMenu}
                  className={`${menu? 'menuBar': 'botonMenu'} `}>
                      <div></div>
                      <div></div>
                      <div></div>
                  </button>
                  </div>
                <nav className={menu? 'hidden':'shadow w-48  py-2'}>
                  <MenuBar handleComponent={handleComponent}/>
                </nav>
              </aside>
              <main className='flex-1 px-5 py-1  h-screen overflow-y-scroll'>
                  <div className='h-full'>
                  {render && render[0]?.component}
                  </div>
                  
              </main>
          </div>

      </>
    )
  }

  export default Layout