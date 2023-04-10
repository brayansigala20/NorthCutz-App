import React, { useEffect, useContext, useState} from 'react'
import { firebaseContext } from '../Firebase'
import { getDocs, collection } from 'firebase/firestore'
import Calendario from '../Components/Calendario'

const Home = () => {
    const {firebase} = useContext(firebaseContext)
    const [docs, setDocs] = useState([])
    useEffect(()=>{
      const queryDocs = async ()=>{
        try{
            const snapShot = await getDocs(collection(firebase.db,"citas"))
            const docs = []
            snapShot.forEach((doc)=> {
              docs.push(doc.data())
            })
            setDocs(docs)
        }catch(error){
          console.log(error)
        }
      }
    queryDocs()
    },[])
  return (
    <div className=' w-full'>
      <label className=' flex justify-center text-3xl mb-2 text-white font-bold'>Citas agendadas</label>
       <Calendario docs={docs}/>
    </div>
  )
}

export default Home