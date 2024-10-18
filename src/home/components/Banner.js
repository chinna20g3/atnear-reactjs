import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import image from '../../assets/img1.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Detects mobile screens

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <img
                src={image}
                alt="Beautiful local scene"
                style={{
                    width: '100%',
                    height: isMobile ? '200px' :'auto',
                    maxHeight:  '370px', // Increased height for mobile
                    objectFit: 'cover',
                    display: 'block',
                }}
                aria-label="Local experience image"
            />
            <Box 
                sx={{
                    position: 'absolute',
                    top: isMobile ? '55%' : '40%',  // Adjusted positioning for mobile
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    width: isMobile ? '90%' : '100%',  // Adjust width for mobile
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "600",
                        fontSize: { xs: "18px", sm: "20px", md: "24px" }, // Adjust font size for mobile
                        lineHeight: { xs: "28px", sm: "30px", md: "36px" },
                    }}
                >
                    The Ultimate Local Experience: What’s Happening Near You
                </Typography>
                
                {/* Location and Search box */}
                <Box 
                    sx={{ 
                        marginTop: 2, 
                        display: 'flex', 
                        flexDirection: isMobile ? 'row' : 'row',  // Stack inputs on mobile
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '40px',  // Adjust gap for mobile
                    }}
                >
                    <TextField
                        placeholder="Select Location"
                        variant="outlined"
                        size="small"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            width: { xs: '90%', sm: '50%', md: '20%' }, // Adjust width for mobile
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        placeholder="Search for packers and movers..."
                        variant="outlined"
                        size="small"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            width: { xs: '90%', sm: '50%', md: '25%' }, // Adjust width for mobile
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
