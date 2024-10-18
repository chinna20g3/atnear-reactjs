import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import img1 from "../../assets/Car.jpg";
import img2 from "../../assets/CarouselImage.1.jpg";
import img3 from "../../assets/CarouselImage.2.jpg";
import img4 from "../../assets/CarouselImage.3.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

const set1 = [
    { title: 'Discover Local Services', description: 'It connects you with a wide range of local professionals tailored to your specific needs. From home repairs to personal services, finding the right expert in your area has never been easier.', image: img1, },
    { title: 'User-Friendly Interface', description: 'The platform is intuitive design allows you to quickly search for services without any hassle. Effortlessly filter your options by location and ratings to discover the best professionals near you.', image: img2, },
    { title: 'Verified Professionals', description: 'It features a curated list of verified professionals, ensuring quality and reliability. You can trust that every service provider has been thoroughly vetted for your peace of mind.', image: img3, },
    { title: 'Discover Local Services', description: 'It connects you with a wide range of local professionals tailored to your specific needs. From home repairs to personal services, finding the right expert in your area has never been easier.', image: img1, },
    { title: 'Discover Local Services', description: 'It connects you with a wide range of local professionals tailored to your specific needs. From home repairs to personal services, finding the right expert in your area has never been easier.', image: img1, },
    { title: 'User-Friendly Interface', description: 'The platform is intuitive design allows you to quickly search for services without any hassle. Effortlessly filter your options by location and ratings to discover the best professionals near you.', image: img2, },
    { title: 'Verified Professionals', description: 'It features a curated list of verified professionals, ensuring quality and reliability. You can trust that every service provider has been thoroughly vetted for your peace of mind.', image: img3, },
    { title: 'Real-Time Reviews', description: 'Gain insights from real user experiences through our comprehensive review system. Read and contribute feedback to help others make informed decisions when choosing local services.', image: img4, },
    { title: 'Real-Time Reviews', description: 'Gain insights from real user experiences through our comprehensive review system. Read and contribute feedback to help others make informed decisions when choosing local services.', image: img4, },
    { title: 'Real-Time Reviews', description: 'Gain insights from real user experiences through our comprehensive review system. Read and contribute feedback to help others make informed decisions when choosing local services.', image: img4, },

];

const set2 = [
    { title: 'Easy Booking', description: 'Book services online in just a few steps. Our streamlined booking process ensures that you can get help when you need it, without the hassle.', image: img4, },
    { title: 'Competitive Pricing', description: 'Get the best value for your money with our transparent pricing system. Compare rates and choose the service that fits your budget.', image: img3, },
    { title: 'Quality Assurance', description: 'All professionals are vetted to ensure high-quality service. We prioritize customer satisfaction through our strict vetting process.', image: img2, },
    { title: 'Customer Support', description: 'Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues that may arise.', image: img1, },
    { title: 'Easy Booking', description: 'Book services online in just a few steps. Our streamlined booking process ensures that you can get help when you need it, without the hassle.', image: img4, },
    { title: 'Competitive Pricing', description: 'Get the best value for your money with our transparent pricing system. Compare rates and choose the service that fits your budget.', image: img3, },
    { title: 'Quality Assurance', description: 'All professionals are vetted to ensure high-quality service. We prioritize customer satisfaction through our strict vetting process.', image: img2, },
    { title: 'Customer Support', description: 'Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues that may arise.', image: img1, },
    { title: 'Quality Assurance', description: 'All professionals are vetted to ensure high-quality service. We prioritize customer satisfaction through our strict vetting process.', image: img2, },
    { title: 'Customer Support', description: 'Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues that may arise.', image: img1, },
];

const set3 = [
    { title: 'Flexible Scheduling', description: 'Choose your preferred time for the service. Our professionals work around your schedule to provide the utmost convenience.', image: img2, },
    { title: 'Satisfaction Guarantee', description: 'If you’re not happy with the service, we offer a satisfaction guarantee to ensure that the issue is resolved quickly.', image: img3, },
    { title: 'Multiple Services', description: 'Find professionals for various categories like plumbing, painting, cleaning, and more, all in one platform.', image: img4, },
    { title: 'Instant Notifications', description: 'Get instant updates on your booking status and service progress through notifications.', image: img1, },
    { title: 'Flexible Scheduling', description: 'Choose your preferred time for the service. Our professionals work around your schedule to provide the utmost convenience.', image: img2, },
    { title: 'Satisfaction Guarantee', description: 'If you’re not happy with the service, we offer a satisfaction guarantee to ensure that the issue is resolved quickly.', image: img3, },
    { title: 'Multiple Services', description: 'Find professionals for various categories like plumbing, painting, cleaning, and more, all in one platform.', image: img4, },
    { title: 'Instant Notifications', description: 'Get instant updates on your booking status and service progress through notifications.', image: img1, },
    { title: 'Multiple Services', description: 'Find professionals for various categories like plumbing, painting, cleaning, and more, all in one platform.', image: img4, },
    { title: 'Satisfaction Guarantee', description: 'If you’re not happy with the service, we offer a satisfaction guarantee to ensure that the issue is resolved quickly.', image: img3, },

];

const set4 = [
    { title: 'Safe & Secure', description: 'Our platform ensures secure payments and data protection, giving you peace of mind when booking services.', image: img3, },
    { title: 'Experienced Experts', description: 'Work with experienced professionals who have been providing top-notch services in their respective fields.', image: img4, },
    { title: 'Service History', description: 'Easily track your past services and rebook your favorite professionals with just a few clicks.', image: img1, },
    { title: 'Exclusive Discounts', description: 'Enjoy exclusive discounts and promotions on selected services when you book through our platform.', image: img2, },
    { title: 'Safe & Secure', description: 'Our platform ensures secure payments and data protection, giving you peace of mind when booking services.', image: img3, },
    { title: 'Experienced Experts', description: 'Work with experienced professionals who have been providing top-notch services in their respective fields.', image: img4, },
    { title: 'Service History', description: 'Easily track your past services and rebook your favorite professionals with just a few clicks.', image: img1, },
    { title: 'Exclusive Discounts', description: 'Enjoy exclusive discounts and promotions on selected services when you book through our platform.', image: img2, },
    { title: 'Service History', description: 'Easily track your past services and rebook your favorite professionals with just a few clicks.', image: img1, },
    { title: 'Exclusive Discounts', description: 'Enjoy exclusive discounts and promotions on selected services when you book through our platform.', image: img2, },

];

const set5 = [
    { title: 'Priority Support', description: 'Get prioritized customer support for urgent service requests, ensuring that your needs are addressed immediately.', image: img4, },
    { title: 'Eco-Friendly Solutions', description: 'Choose from eco-friendly service providers who use sustainable practices and products.', image: img3, },
    { title: 'Tailored Recommendations', description: 'Receive tailored service recommendations based on your preferences and past bookings.', image: img1, },
    { title: 'Community Feedback', description: 'Benefit from community feedback and ratings to ensure that you are selecting trusted professionals.', image: img2, },
    { title: 'Priority Support', description: 'Get prioritized customer support for urgent service requests, ensuring that your needs are addressed immediately.', image: img4, },
    { title: 'Eco-Friendly Solutions', description: 'Choose from eco-friendly service providers who use sustainable practices and products.', image: img3, },
    { title: 'Tailored Recommendations', description: 'Receive tailored service recommendations based on your preferences and past bookings.', image: img1, },
    { title: 'Community Feedback', description: 'Benefit from community feedback and ratings to ensure that you are selecting trusted professionals.', image: img2, },
    { title: 'Priority Support', description: 'Get prioritized customer support for urgent service requests, ensuring that your needs are addressed immediately.', image: img4, },
    { title: 'Eco-Friendly Solutions', description: 'Choose from eco-friendly service providers who use sustainable practices and products.', image: img3, },
];

const CategoriesList = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // Detects mobile screens

    const [activeSet, setActiveSet] = useState(1); // Default to set 1

    const getCards = () => {
        switch (activeSet) {
            case 1:
                return set1;
            case 2:
                return set2;
            case 3:
                return set3;
            case 4:
                return set4;
            case 5:
                return set5;
            default:
                return set1;
        }
    };

    return (
        <Grid container sx={{ padding: '20px 0' }}>
            <Grid item xs={12} sx={{ padding: '20px', }}>
                {/* Buttons to change card sets */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',  // Allow wrapping
                        mb: 4,
                        width: isMobile ? '100%' : '50%',
                        flexDirection: 'row', // Same for both mobile and desktop
                    }}
                >
                    {/* Row 1 */}
                    <Button
                        variant="contained"
                        color={activeSet === 1 ? 'secondary' : 'primary'}
                        sx={{ mx: 1, mb: isMobile ? 2 : 0, flexGrow: 1, flexBasis: isMobile ? '30%' : 'auto' }}
                        onClick={() => setActiveSet(1)}
                    >
                        Button 1
                    </Button>
                    <Button
                        variant="contained"
                        color={activeSet === 2 ? 'secondary' : 'primary'}
                        sx={{ mx: 1, mb: isMobile ? 2 : 0, flexGrow: 1, flexBasis: isMobile ? '30%' : 'auto' }}
                        onClick={() => setActiveSet(2)}
                    >
                        Button 2
                    </Button>
                    <Button
                        variant="contained"
                        color={activeSet === 3 ? 'secondary' : 'primary'}
                        sx={{ mx: 1, mb: isMobile ? 2 : 0, flexGrow: 1, flexBasis: isMobile ? '30%' : 'auto' }}
                        onClick={() => setActiveSet(3)}
                    >
                        Button 3
                    </Button>

                    {/* Row 2 */}
                    <Button
                        variant="contained"
                        color={activeSet === 4 ? 'secondary' : 'primary'}
                        sx={{ mx: 1, mb: isMobile ? 2 : 0, flexGrow: 1, flexBasis: isMobile ? '30%' : 'auto' }}
                        onClick={() => setActiveSet(4)}
                    >
                        Button 4
                    </Button>
                    <Button
                        variant="contained"
                        color={activeSet === 5 ? 'secondary' : 'primary'}
                        sx={{ mx: 1, mb: isMobile ? 2 : 0, flexGrow: 1, maxWidth: isMobile ? '45%' : 'auto' }}
                        onClick={() => setActiveSet(5)}
                    >
                        Button 5
                    </Button>
                </Box>



                {/* Display cards based on the active set */}
                <Grid container spacing={isMobile ? 2 : 4} justifyContent="center" sx={{ px: isMobile ? 2 : 8 }}>
                    {getCards().map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                    cursor: "pointer",
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, height: isMobile ? '150px' : '160px', padding: 0 }}>
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        style={{
                                            width: "100%",
                                            height: '120%',  // Adjust height for mobile
                                            borderRadius: '10px',
                                            objectFit: "cover",
                                            transform: "scale(1)",
                                            transition: "transform 0.9s ease",
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                </CardContent>
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CategoriesList;
