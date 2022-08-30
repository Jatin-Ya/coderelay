import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {CgProfile} from "react-icons/cg"
import { IconButton } from '@mui/material';
import Link from "next/link";
import { auth } from "../src/firebase";
import { signOut } from "firebase/auth"
import { useRouter } from 'next/router';

export default function ButtonAppBar() {
  const router = useRouter()

  const onLogoutHandler =async () => {
    await signOut(auth); 
    router.push("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hostel Portal
          </Typography>
          {/* <IconButton><CgProfile /></IconButton> */}
        <Link href="/Profile/">
            <a>  <IconButton><CgProfile /></IconButton> </a>
            </Link>
          <Button color="inherit" onClick={onLogoutHandler}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}