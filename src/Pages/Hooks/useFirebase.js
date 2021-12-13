import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import inititalizeAuthentication from "../Login/Firebase/firebase.init";

inititalizeAuthentication();

const useFirebase = () =>{
     const [user,setUser] =useState({})
     const [isLoading,setIsLoading] =useState(true);

     const auth =getAuth();
    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider =new GoogleAuthProvider();
      return signInWithPopup(auth,googleProvider)
       .then(result =>{
           setUser(result.user)
           sessionStorage.setItem("email", result.user.email);
       })
       
        .finally(()=>setIsLoading(false));
    }
    

    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])

    const logOut =()=>{
        setIsLoading(true)

      signOut(auth)
      .then(()=>{ })
      .finally(()=>setIsLoading(false));
      
    }
       return{
           user,
           isLoading,
           signInUsingGoogle,
           logOut

       }
}



export default useFirebase ;