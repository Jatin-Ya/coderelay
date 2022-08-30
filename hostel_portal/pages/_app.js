import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState('');

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);
  })
  },[])

  return (
    <UserContext.Provider value={{user,update:(newValue)=>{setUser(newValue)}}} >
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
