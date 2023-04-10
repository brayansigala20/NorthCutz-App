import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signOut,getAdditionalUserInfo } from 'firebase/auth'
import {getFirestore, doc, setDoc, updateDoc,serverTimestamp, addDoc, collection} from "firebase/firestore"



class Firebase {
    constructor(){
      this.app =  initializeApp(firebaseConfig)
      this.auth = getAuth(this.app)
      this.db = getFirestore(this.app)
      this.provider = new GoogleAuthProvider();
    }
    async Registrar(){
       const {user} = await signInWithPopup(this.auth,this.provider)
    }
    async Logout(){
        await signOut(this.auth)
    }
    async AgendarCita(data){ 
        await setDoc(doc(this.db, "citas" ,`${data.id}`),data)
    }
    async ActualizarCita(updateData){
        console.log(updateData)
        await updateDoc(doc(this.db, 'citas', `${updateData.id}`),updateData)
    }
    async ChatMessages(data){
        const DataUp = {...data,
            createdAt:serverTimestamp()           
        }
        await addDoc(collection(this.db, "chat"),DataUp)
    }
}
const firebase = new Firebase()
export default firebase
