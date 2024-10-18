// Import React and Material-UI components
import React from 'react';
import { Button, Typography, Box, Container,Grid } from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const OurPartner = () => {
    return (
        <Grid >
        <Container
            sx={{
                textAlign: 'center',
                padding: '20px',
                
            }}
        >
            {/* Welcome Text */}
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    color: '#ff5722',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
            >
                Unlocking the Secrets to Success
            </Typography>

        
      

            {/* Subheading */}
            <Typography
                sx={{
                    fontSize: '1.5rem',
                    color: '#6c6c6c',
                    marginBottom: '30px',
                }}
            >
                We help ambitious businesses like yours generate more profits by
                building awareness, driving web traffic, and connecting with customers.
            </Typography>

            {/* Get Started Button */}
            <Button
                sx={{
                    fontWeight: 'bold',
                    backgroundColor: '#ff5722',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    '&:hover': {
                        backgroundColor: '#e64a19',
                    },
                }}
            >
                Join Us <EastRoundedIcon style={{ backgroundColor: "#fff", color: "black", borderRadius: '30px', marginLeft: 5, fontSize: "30px" }} />
            </Button>
        </Container>
        </Grid>
    );
};

export default OurPartner;
