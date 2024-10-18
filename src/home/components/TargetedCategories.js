import React from "react";
import { Box, Grid, Typography, Paper, useMediaQuery } from "@mui/material";
import img1 from "../../assets/2.webp";
import img2 from "../../assets/3.webp";
import img3 from "../../assets/4.webp";
import img4 from "../../assets/5.webp";
import img5 from "../../assets/6.webp";
import { useTheme } from "@mui/material/styles";

const categories = [
    {
        title: "Wedding Requisites",
        items: [
            { name: "Banquet Halls", image: img1 },
            { name: "Bridal Requisite", image: img2 },
            { name: "Caterers", image: img3 },
        ],
    },
    {
        title: "Beauty & Spa",
        items: [
            { name: "Beauty Parlours", image: img1 },
            { name: " Massages", image: img2 },
            { name: "Salons", image: img3 },
        ],
    },
    {
        title: "Repairs & Services",
        items: [
            { name: "AC Service", image: img3 },
            { name: "Car Service", image: img4 },
            { name: "Bike Service", image: img5 },
        ],
    },
    {
        title: "Daily Needs",
        items: [
            { name: "Movies", image: img3 },
            { name: "Grocery", image: img4 },
            { name: "Electricians", image: img5 },
        ],
    },
];

const CategoryCard = ({ item }) => (
    <Paper
        elevation={3}
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            borderRadius: "12px",
            minWidth: "120px",
            height: "100px",
            textAlign: "center",
        }}
    >
        <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
                width: "100px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
                mb: 1,
            }}
        />
        <Typography variant="body1" textAlign="center">
            {item.name}
        </Typography>
    </Paper>
);

const TargetedCategories = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For mobile responsiveness

    return (
        <Grid container spacing={4} sx={{ py: isMobile ? 2 : 4, px: isMobile ? 1 : 3, backgroundColor: "#f7f7f7", mt: 1}}>
            {/* First Section: Wedding & Beauty */}
            <Grid item xs={12} sx={{ marginTop: isMobile ? 2 : 4 }}>
                <Grid container spacing={isMobile ? 2 : 4} sx={{ justifyContent: 'center', gap: isMobile ? '10px' : '20px' }}>
                    <Grid item xs={10} md={5} sx={{ 
                        border: isMobile ? '1px solid #ccc' : '1px solid #ccc',
                        borderRadius: '10px', 
                        // borderLeft: isMobile ? '4px solid #ccc' : '8px solid #ccc', // Adjust the left-side border width
                        py: 3 
                    }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: isMobile ? "16px" : "18px" }}>
                            Wedding Requisites
                        </Typography>
                        <Grid container spacing={isMobile ? 1 : 2} sx={{ justifyContent: 'center', gap: isMobile ? '15px' : '35px', position: 'relative', right: '5%' }}>
                            {categories[0].items.map((item, idx) => (
                                <Grid item xs={6} sm={6} md={4} lg={3} mb={2} key={idx}>
                                    <CategoryCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={10} md={5} sx={{ 
                        border: isMobile ? '1px solid #ccc' : '1px solid #ccc',
                        borderRadius: '10px', 
                        
                        // borderLeft: isMobile ? '2px solid #ccc' : '8px solid #ccc', // Adjust the left-side border width
                        py: 3 
                    }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: isMobile ? "16px" : "18px" }}>
                            Beauty & Spa
                        </Typography>
                        <Grid container spacing={isMobile ? 1 : 2} sx={{ justifyContent: 'center', gap: isMobile ? '15px' : '35px', position: 'relative', right: '5%' }}>
                            {categories[1].items.map((item, idx) => (
                                <Grid item xs={6} sm={3} mb={2} key={idx}>
                                    <CategoryCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Second Section: Repairs & Daily Needs */}
            <Grid item xs={12} marginBottom={isMobile ? 2 : 4} marginTop={isMobile ? 1 : 2}>
                <Grid container spacing={isMobile ? 2 : 4} sx={{ justifyContent: 'center', gap: isMobile ? '10px' : '20px' }}>
                    <Grid item xs={10} md={5} sx={{ 
                        border:'1px solid #ccc',
                        borderRadius: '10px', 
                        // borderLeft: isMobile ? '4px solid #ccc' : '8px solid #ccc', // Adjust the left-side border width
                        py: 2 
                    }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", fontSize: isMobile ? "16px" : "18px" }}>
                            Repairs & Services
                        </Typography>
                        <Grid container spacing={isMobile ? 1 : 2} sx={{ justifyContent: 'center', gap: isMobile ? '15px' : '35px', position: 'relative', right: '5%' }}>
                            {categories[2].items.map((item, idx) => (
                                <Grid item xs={6} sm={3} mb={2} key={idx}>
                                    <CategoryCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={10} md={5} sx={{ 
                        border: isMobile ? '1px solid #ccc' : '1px solid #ccc',
                        borderRadius: '10px', 
                        // borderLeft: isMobile ? '4px solid #ccc' : '8px solid #ccc', // Adjust the left-side border width
                        py: 2 
                    }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", fontSize: isMobile ? "16px" : "18px" }}>
                            Daily Needs
                        </Typography>
                        <Grid container spacing={isMobile ? 1 : 2} sx={{ justifyContent: 'center', gap: isMobile ? '15px' : '35px', position: 'relative', right: '5%' }}>
                            {categories[3].items.map((item, idx) => (
                                <Grid item xs={6} sm={3} mb={2} key={idx}>
                                    <CategoryCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TargetedCategories;
