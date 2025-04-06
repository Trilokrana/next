'use client'
import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { signInWithPopup, auth, provider } from '../app/firebase';

export default function GoogleAuthentication() {
  const [userName, setUserName] = useState<string | null>(null);

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUserName(result.user.displayName);
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <Container maxWidth="sm" className='text-center'>
        <Typography variant='h4' gutterBottom>
          {userName ? `Welcome,${userName} !!` : 'Next.js Google Authentication'}
        </Typography>
        <Button variant="contained" onClick={GoogleLogin}>
          Sign in with Google
        </Button>
      </Container>
    </main>
  );
}
