// @ts-nocheck
"use client";

import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, CssBaseline, Box, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Signup = () => {

    const [user] = useAuthState(auth);
    const [userSession, setUserSession] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const session = sessionStorage.getItem("user");
        setUserSession(session);
        if (user && session) {
            router.push("/");
        }
    }, [user, router]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(email, password);
            sessionStorage.setItem("user", String(true));

            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
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
                            Sign Up
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
                                Already Have an&nbsp;<span style={{ color: '#90CAF9', cursor: 'pointer' }} onClick={() => router.push('/sign-in')}> account? </span>
                            </p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ height: '56px', mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Signup;
