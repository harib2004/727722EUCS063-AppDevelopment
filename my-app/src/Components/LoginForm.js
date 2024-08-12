import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hallspace from 'C:/Projects/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
            // Assuming successful login redirects to the home page
            navigate('/');  
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <img src={hallspace} alt="HallSpace Logo" style={{ width: '100px', height: 'auto' }} />
                <Typography variant="h5" component="h1" sx={{ mt: 2, mb: 2 }}>
                    Login
                </Typography>
                <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!error}
                            helperText={error}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!error}
                            helperText={error}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" align="center">
                        Don't have an account?{' '}
                        <Button onClick={() => navigate('/Register')} color="primary">
                            Sign Up
                        </Button>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginForm;
