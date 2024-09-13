"use client";

import React, { useState } from 'react';
import { TextField, Button, Container, CssBaseline, Box, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await signInWithEmailAndPassword(email, password);
            sessionStorage.setItem("user", String(true));

            setEmail('');
            setPassword('');
            router.push('/');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#424242' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>
                                New here&nbsp;<span style={{ color: '#90CAF9', cursor: 'pointer' }} onClick={() => router.push('/sign-up')}> Create an account? </span>
                            </p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ height: '56px', mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* {error && <Typography color="error">{error.message}</Typography>} */}
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default SignIn;
