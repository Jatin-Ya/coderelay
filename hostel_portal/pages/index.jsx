import mainBG from "../resources/mainBG.jpg"
import { Box, Card, FormLabel, Input, Backdrop } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../src/firebase";
import { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { UserContext } from "./_app";
import { async } from "@firebase/util";
import { useEffect } from "react";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import classes from './index.module.css'

export default function Home() {
  // const cookies = new Cookies();
  // cookies.set(key1, value1, {secure: true, sameSite: 'none'});
  // cookies.set('SameSite','None')
  const userObj = useContext(UserContext);
  const user = userObj.user;
  const setUser = userObj.update;

  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")
  const [signupEmail,setSignupEmail] = useState("")
  const [signupPassword,setSignupPassword] = useState("")
  const [Loading,setLoading] = useState(false)
  

  const router = useRouter()
  
  
  useEffect(()=>{
    

    if (user){router.push('/profile_details_edit');}
  },[user])
  
  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);
  })

  console.log(user);

  const formSubmitHandler =async (event) => {
    event.preventDefault()
    setLoading(true);
    const provider = new GoogleAuthProvider();
    
    try{

    const result =await signInWithRedirect(auth , provider);
    
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      setLoading(false);
      // The signed-in user info.
      // router.push('/profile_details_edit')
      
    }catch{(error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    }
    
  }
    
  }

  const onLogoutHandler =async () => {
    await signOut(auth); 
  }

  

  return (
    // <img src={mainBG} alt='bg image'/>
    <>
    {Loading&&<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={Loading}
></Backdrop>}

  <div className={classes.page}>
  <div className={classes.row}>
    <div className={classes.side}>
      <div className={classes.row1}>
        <div className={classes.column1}>
          <img
            src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/_OnF_jQ2OoexEMH72QSpHOyUgL_eaIiKbnN84c_5Vp8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/OS15b1A0S1FhRlQt/TkJmSUJrNWpRSGFF/OCZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/kLYnRB5TX2ihDlPYcBRxy6sWmF84uYP5IvGC4dI5fs4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/WThxSTIxNFNpdGFQ/NHB5NHNwb1VBSGFF/SyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/hbs4egdCnAKfOwT2-W6i7gXKrKRksyfTGYutbWQHE-c/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/bUlQb2xyXzE2TTlP/dmlDU2RoM2lRSGFG/aiZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/l2wEU3g9rmZ0mcoUDPsohlP--D1DWw97z2hpy1gfgJA/rs:fit:1440:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/cjYwM2E4Sm9DMmFr/aTdPamg3ODBnSGFD/YyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/zZZxfsuVJjQJA981QdzbL9Wd4vN34-iM6IMXbWlKlkw/rs:fit:751:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/ZW9zODVCU2dTaGps/SlFEaUVlVHFBSGFF/ciZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/bGzKoSA0vbt_fCUagdendgJYc2HS1mZNSb5dGE6eQEA/rs:fit:734:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/MUxpbld2MmQzNjZ6/dGYxV0MxUmR3SGFF/eSZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.column1}>
          <img
            src="https://imgs.search.brave.com/kLYnRB5TX2ihDlPYcBRxy6sWmF84uYP5IvGC4dI5fs4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/WThxSTIxNFNpdGFQ/NHB5NHNwb1VBSGFF/SyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/hbs4egdCnAKfOwT2-W6i7gXKrKRksyfTGYutbWQHE-c/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/bUlQb2xyXzE2TTlP/dmlDU2RoM2lRSGFG/aiZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/bGzKoSA0vbt_fCUagdendgJYc2HS1mZNSb5dGE6eQEA/rs:fit:734:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/MUxpbld2MmQzNjZ6/dGYxV0MxUmR3SGFF/eSZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/_OnF_jQ2OoexEMH72QSpHOyUgL_eaIiKbnN84c_5Vp8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/OS15b1A0S1FhRlQt/TkJmSUJrNWpRSGFF/OCZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/l2wEU3g9rmZ0mcoUDPsohlP--D1DWw97z2hpy1gfgJA/rs:fit:1440:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/cjYwM2E4Sm9DMmFr/aTdPamg3ODBnSGFD/YyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/zZZxfsuVJjQJA981QdzbL9Wd4vN34-iM6IMXbWlKlkw/rs:fit:751:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/ZW9zODVCU2dTaGps/SlFEaUVlVHFBSGFF/ciZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.column1}>
          <img
            src="https://imgs.search.brave.com/hbs4egdCnAKfOwT2-W6i7gXKrKRksyfTGYutbWQHE-c/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/bUlQb2xyXzE2TTlP/dmlDU2RoM2lRSGFG/aiZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/bGzKoSA0vbt_fCUagdendgJYc2HS1mZNSb5dGE6eQEA/rs:fit:734:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/MUxpbld2MmQzNjZ6/dGYxV0MxUmR3SGFF/eSZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/l2wEU3g9rmZ0mcoUDPsohlP--D1DWw97z2hpy1gfgJA/rs:fit:1440:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/cjYwM2E4Sm9DMmFr/aTdPamg3ODBnSGFD/YyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/zZZxfsuVJjQJA981QdzbL9Wd4vN34-iM6IMXbWlKlkw/rs:fit:751:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/ZW9zODVCU2dTaGps/SlFEaUVlVHFBSGFF/ciZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/kLYnRB5TX2ihDlPYcBRxy6sWmF84uYP5IvGC4dI5fs4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/WThxSTIxNFNpdGFQ/NHB5NHNwb1VBSGFF/SyZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
          <img
            src="https://images.unsplash.com/photo-1596276020587-8044fe049813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80"
            style={{ width: "100%" }}
          />
          <img
            src="https://imgs.search.brave.com/_OnF_jQ2OoexEMH72QSpHOyUgL_eaIiKbnN84c_5Vp8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/OS15b1A0S1FhRlQt/TkJmSUJrNWpRSGFF/OCZwaWQ9QXBp"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
    <div className={classes.main}>
      <div className={classes.card}>
        <div className={classes.text}>
          <div className={classes.text}>
            <span>H</span>
            <span>O</span>
            <span>S</span>
            <span>T</span>
            <span>E</span>
            <span>L</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="text">
            <span>M</span>
            <span>A</span>
            <span>N</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className={classes.text}>
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>A</span>
            <span>L</span>
          </div>
        </div>
        <div>
          <button className={classes.but} onClick={formSubmitHandler}>Login</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</>
  )
}
