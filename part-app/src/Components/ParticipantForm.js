import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ParticipantForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
           Participant Request Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
              
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
             
              <Grid item xs={12}sm={6} >
             
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  name="dob"
                  autoComplete="dob"
                />
              </Grid>
          
              <Grid item xs={12} sm={6}>
              
                <TextField
                  required
                  fullWidth
                  name="room"
                  label="Room Number"
                  type="room"
                  id="room"
                  autoComplete="room-number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              
                <TextField
                  required
                  fullWidth
                  name="family"
                  label="Family Size"
                  type="family"
                  id="family"
                  autoComplete="family-size"
                  align="left"
                />
              </Grid>
              <Grid item xs={12}>
               
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  name="items"
                  label="Items Needed"
                  type="items"
                  id="items"
                  autoComplete="items-needed"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
             
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}