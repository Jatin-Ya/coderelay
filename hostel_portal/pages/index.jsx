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
    {/* <p>Hello</p><br></br>
    <label >Email</label>
    <Input value={signupEmail} onChange={(event)=>setSignupEmail(event.target.value)}></Input>
    <label >Password</label>
    <Input value={signupPassword} onChange={(event)=>setSignupPassword(event.target.value)}></Input><br></br>
    <button onClick={onSignupHandler}>Click</button><br></br>
    <label >Email</label>
    <Input value={loginEmail} onChange={(event)=>setLoginEmail(event.target.value)}></Input>
    <label >Password</label>
    <Input value={loginPassword} onChange={(event)=>setLoginPassword(event.target.value)}></Input><br></br>
    <button onClick={onLoginHandler}>Click</button><br></br>
    {user?.email}<br></br> */}
    
    <button onClick={formSubmitHandler}>Click</button><br></br>
    {user?.email}<br></br>
    <button onClick={onLogoutHandler}>Logout</button>
    </> )
    // <Box
    //   sx={{
    //     width: '100vw',
    //     height: '100vh',
    //     backgroundColor: 'primary.main',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     p: '25vh'
    //   }}
    //  >
    // <Card sx={{ maxWidth: '30vw', maxHeight: '50vh' }}>
    // <Typography gutterBottom variant="h2" component="div">
    //       Hostel Name
    //     </Typography>
    //   <CardMedia
    //     component="img"
    //     height="50%"
    //     image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hostel_Dormitory.jpg/330px-Hostel_Dormitory.jpg"
    //     alt="green iguana"
    //   />
    //   <CardContent>
        
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000
    //       species, ranging across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <CardActions sx={{justifyContent:'center'}}>
    //     {/* <Button size="large" variant="contained" >Login</Button> */}
    //     <div>
    //     <Button onClick={signInWithPopup}/>
        
    //     </div>
    //   </CardActions>
    // </Card>
    // </Box>
  // )
}
