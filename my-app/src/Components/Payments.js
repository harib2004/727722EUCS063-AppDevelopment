import React from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const PaymentForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: '#f0f0f0', // Light grey background for the entire page
      }}
    >
      <Box
        sx={{
          width: '500px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#fff', // White background for the form
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for a raised effect
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Payment
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Cardholder's Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Card Number"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="CVV"
            margin="normal"
            variant="outlined"
          />
          
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Month"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Year"
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '20px' }}
          >
            Submit Payment
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default PaymentForm;
