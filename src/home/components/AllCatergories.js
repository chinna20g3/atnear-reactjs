import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';



const colleges = [
  { title: 'Discover Local Services', university: 'It connects you with a wide range of local professionals tailored to your specific needs. From home repairs to personal services, finding the right expert in your area has never been easier. ',},
  { title: 'User-Friendly Interface', university: 'The platform is intuitive design allows you to quickly search for services without any hassle. Effortlessly filter your options by location and ratings to discover the best professionals near you. ',  },
  { title: 'Verified Professionals ', university: 'Itfeatures a curated list of verified professionals, ensuring quality and reliability. You can trust that every service provider has been thoroughly vetted for your peace of mind.', },
  { title: 'Real-Time Reviews', university: 'Gain insights from real user experiences through our comprehensive review system. Read and contribute feedback to help others make informed decisions when choosing local services.', },
];

const AllCatergories = () => {


  return (
    <Box sx={{ backgroundColor: '#cdd0d4', padding: '20px 0' }}>
      {/* <Grid container direction="column" alignItems="center" sx={{ margin: '10px 0', marginTop: '40px' }}>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          Top Colleges in Bangalore
        </Typography>
        <Typography variant="body2" component="h6" align="center" gutterBottom>
          Discover Bangalore's Premier Educational Institutions - Your Guide to Top Colleges in the Silicon Valley of India
        </Typography>
      </Grid> */}
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={2} justifyContent="center">
          {colleges.map((college, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  //  backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent card background
                  // backdropFilter: 'blur(10px)', // Blur effect for the background
               
                  borderRadius:'10px',
                  transition: 'transform 0.2s, box-shadow 0.3s', 
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
              
                <CardContent sx={{ flexGrow: 1 ,height:'250px'}}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {college.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {college.university}
                  </Typography>
                  
                 
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button 
          variant="outlined" 
          sx={{ 
            color: 'white', 
            borderColor: '#3f51b5', 
            padding: '10px 20px', 
            fontSize: '14px',
            minWidth: '120px',
            backgroundColor: '#3f51b5',
            '&:hover': {
              backgroundColor: '#303f9f',
            }
          }}
        >
          Show All 
        </Button>
      </Box>
    </Box>
  );
};

export default AllCatergories;
