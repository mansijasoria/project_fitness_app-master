import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

// import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth";
// import { Navigate } from "react-router-dom"; 
// import { auth } from "../firebase";

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  // const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  // const [user] = useAuthState(auth);
  // const [signOut] = useSignOut(auth);
  // if (error) { console.log(error); }

  // if (loading) {
  //   return (
  //     <div className="main"> <p>Loading...</p> </div>
  //   );
  // }

  // function logginOrNot() {
  //   if (user) {
  //     return (
  //       <a style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => {
  //         signOut();
  //       }}
  //       >LogOut</a>
  //     )
  //   } else {
  //     return (
  //       <a style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => signInWithGoogle()} >Login</a>
  //     )
  //   }
  // }

  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        {
          // logginOrNot()
        }
         {/* <a style={{ textDecoration: 'none', color: '#3A1212' }} onClick={() => signInWithGoogle()} >Login</a>  */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
