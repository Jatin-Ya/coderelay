import { useState, useContext } from "react";
import { Typography, Grid, TextField, Button, Snackbar, Alert, Checkbox, FormControlLabel } from "@mui/material";
import { UserContext } from "./_app";
import { db } from "../src/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from 'next/router';

const profile_details = () => {
    const userObj = useContext(UserContext);
    const user = userObj.user;

    const router = useRouter();

    const [adminRadio, setAdminRadio] = useState(false);
    const [name, setName] = useState('');
    const [rollno, setRollno] = useState('');
    const [mobno, setMobno] = useState('')
    const [roomno, setRoomno] = useState('');
    const [open, setOpen] = useState(false)
    const [adminKey, setAdminKey] = useState('');


 const onSubmitHandler = (e) =>{
        e.preventDefault()
        let type;
        if (adminKey==process.env.OFFICER_1_KEY){type='officer1'}
        else if (adminKey==process.env.OFFICER_2_KEY){type='officer2'}
        else if (adminKey==process.env.OFFICER_3_KEY){type='officer3'}
        else{type = 'student'}
         addDoc(collection(db,'profiles'),{
          name: name,
            rollno : rollno,
            mobno,
            roomno,
            email: user.email,
            type
        }).then(() => {
          setOpen(true);
          router.push('/profile_details_edit');

      })
      .catch((error) =>{
          alert(error.message)
      })
        

       setName("")
       setRollno("")
       setMobno("")
       setRoomno("")
       setAdminKey("")
       

    }

    return (
        
<div style={{width:"80vw",
            marginTop:"150px",
            marginLeft:"10vw"}}>
        <Typography variant='h3' align="center">Profile Details</Typography>
        <br />
        <br />
        <br />
        <form noValidate={!!''}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid container item>
              <TextField
                require={true}
                id='name'
                label='Name'
                variant='outlined'
                autoComplete='new-name'
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <br />
            <br />
            <Grid container item>
              <TextField
                required
                id='rollno'
                label='Roll No.'
                variant='outlined'
                autoComplete='Roll No'
                fullWidth
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
              />
            </Grid>
            <br />
            <br />
            <Grid container item>
              <TextField
                required
                id='email'
                variant='outlined'
                fullWidth
                disabled
                value={user.email}
              />
            </Grid>
            <br />
            <br />
            <Grid container item>
              <TextField
                required
                id='mobno'
                label='Mobile Number'
                fullWidth
                rows={4}
                value={mobno}
                variant='outlined'
                onChange={(e) => setMobno(e.target.value)}
              />
            </Grid>
            <br />
            <br />
            <Grid container item>
              <TextField
                required
                id='roomno'
                label='Room Number'
                fullWidth
                rows={4}
                value={roomno}
                variant='outlined'
                onChange={(e) => setRoomno(e.target.value)}
              />
            </Grid>
            <br />
            <br />
            <Grid container item>
              <FormControlLabel control={<Checkbox onChange={(e)=>setAdminRadio(e.target.checked)}/>} label="Admin" />
              {adminRadio&&<TextField
                required = {adminRadio}
                id='adminKey'
                label='Admin Key'
                fullWidth
                rows={4}
                value={adminKey}
                variant='outlined'
                onChange={(e) => setAdminKey(e.target.value)}
              />}
            

            </Grid>
            <br />
            <br />
            <br />
            <br />
            <Grid container item>
              <Button
                variant='contained'
                fullWidth
                color='primary'
                onClick={onSubmitHandler}
              >
                Submit
              </Button>    
            </Grid>
          </Grid>
        </form>
        <Snackbar open={open} autoHideDuration={6000} 
        // onClose={handleClose}
        >
          <Alert 
        //   onClose={handleClose} 
          severity='success'>
            message submitted successfully!
          </Alert>
        </Snackbar>
      </div>
    )
}

export default profile_details;