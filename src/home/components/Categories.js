import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Sample icons for illustration. You would replace these with the actual icons you use.
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import SpaIcon from '@mui/icons-material/Spa';
import HomeIcon from '@mui/icons-material/Chair';
import WeddingIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import RentIcon from '@mui/icons-material/BusinessCenter';
import HospitalIcon from '@mui/icons-material/LocalHospital';
import ContractorIcon from '@mui/icons-material/Construction';
import PetIcon from '@mui/icons-material/Pets';
import HostelIcon from '@mui/icons-material/Bed';
import DentistIcon from '@mui/icons-material/MedicalServices';
import GymIcon from '@mui/icons-material/FitnessCenter';
import LoanIcon from '@mui/icons-material/AttachMoney';
import EventIcon from '@mui/icons-material/Event';
import DrivingIcon from '@mui/icons-material/DirectionsCar';
import MoversIcon from '@mui/icons-material/LocalShipping';
import CourierIcon from '@mui/icons-material/LocalPostOffice';
import MoreIcon from '@mui/icons-material/MoreHoriz';

const categories = [
    { label: 'Restaurants', icon: <RestaurantIcon /> },
    { label: 'Hotels', icon: <HotelIcon /> },
    { label: 'Beauty Spa', icon: <SpaIcon /> },
    { label: 'Home Decor', icon: <HomeIcon /> },
    { label: 'Wedding', icon: <WeddingIcon /> },
    { label: 'Education', icon: <SchoolIcon /> },
    { label: 'Rent & Hire', icon: <RentIcon /> },
    { label: 'Hospitals', icon: <HospitalIcon /> },
    { label: 'Contractors', icon: <ContractorIcon /> },
    { label: 'Pet Shops', icon: <PetIcon /> },
    { label: 'PG/Hostels', icon: <HostelIcon /> },
    { label: 'Estate', icon: <MoreIcon /> },
    { label: 'Dentists', icon: <DentistIcon /> },
    { label: 'Gym', icon: <GymIcon /> },
    { label: 'Loans', icon: <LoanIcon /> },
    { label: 'Event', icon: <EventIcon /> },
    { label: 'Driving', icon: <DrivingIcon /> },
    { label: 'Packers', icon: <MoversIcon /> },
    { label: 'Courier', icon: <CourierIcon /> },
    { label: 'Popular', icon: <MoreIcon /> },
];

const Categories = () => {
    const displayedCategories = categories.slice(0, 20);

    return (
        <Box sx={{ padding: '30px 70px' }}>
            <Grid container spacing={3} justifyContent="center">
                {displayedCategories.map((category, index) => (
                    <Grid item xs={2.5} sm={1.2} md={1.2} lg={1.2} key={index} textAlign="center">
                        <Box
                            sx={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '20px',
                                padding: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor:'pointer',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '60px',
                                width: '60px',
                                marginBottom: '5px',
                                background: 'white',
                                position: 'relative',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    background: 'linear-gradient(#4fa3fd, #b3e1fd)',
                                    transform: 'scale(1.15)',
                                },
                            }}
                        >
                            <Box sx={{ fontSize: '24px' }}>
                                {category.icon}
                            </Box>
                        </Box>
                        <Typography variant="body1" sx={{ fontSize: '15px', marginLeft: '-30px' }}>
                            {category.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default Categories;
