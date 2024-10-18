import React from "react";
import { Box, Paper, Container, Grid, Button, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "../../assets/Rectangle 24.png";
import { useTheme } from "@mui/material/styles";

const articles = [
  {
    image: img1,
  },
  {
    image: img1,
  },
  {
    image: img1,
  },
  {
    image: img1,
  },
];

const ArticleCard = ({ article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "20px",
        backgroundColor: 'white',
        overflow: "hidden",
        width: isMobile ? '90%' : '55%', // Full width for mobile, smaller for desktop
        marginLeft: isMobile ? 'auto' : '125px', // Centered for mobile
        marginRight: isMobile ? 'auto' : '0',
      }}
    >
      <Box
        sx={{
          height: "150px" , // Smaller height for mobile
          overflow: "hidden",
        }}
      >
        <img
          src={article.image}
          alt="Trending Article"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </Box>
    </Paper>
  );
};

const TrendingArticles = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 3, px: isMobile ? 2 : 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "25px" },
            color: "#333",
          }}
        >
          Latest Articles
        </Typography>
        <Grid container spacing={isMobile ? 3 : 5} sx={{ marginTop: '2px' }}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Button
          type="button"
          sx={{
            background: "#1D1A57",
            width: "150px" ,
            height: isMobile ? "38px" : "42px",
            fontSize: isMobile ? "13px" : "15px", // Adjust font size for mobile
            color: "#F8F8F8",
            fontWeight: "600",
            borderRadius: "5px",
            mt: 4,
            "&:hover": {
              background: "#1D1A57",
            },
          }}
        >
          Show All&nbsp;&nbsp;
          <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default TrendingArticles;
