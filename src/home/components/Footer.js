import React from "react";
import { Grid, Typography, Stack, Divider, Box, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SubscribeNewsLetter from "../pages/SubscribeNewsLetter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import playStore from "../../../../assets/playstore.png";
// import appleStore from "../../../../assets/app-store-icon.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid sx={{ width: "100%" }}>
      {/* <SubscribeNewsLetter /> */}
      <Box sx={{ backgroundColor: "#1D1A57" }}>
        <Grid
          container
          md={12}
          xs={12}
          sm={12}
          sx={{
            px: 5,
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
            height: { xs: "auto", md: "325px" },
            py: 5,
            "@media (min-width: 768px) and (max-width:1024px)": {
              padding: "40px",
            },
            "@media (min-width: 1024px) and (max-width:1440px)": {
              display: "flex",
              height: 305,
              py: 3,
            },
          }}
        >
          <Grid
            item
            md={3}
            xs={12}
            sm={8}
            sx={{
              height: "100%",
              px: { md: 2, xs: 0, sm: 2 },
              "@media (min-width: 1024px) and (max-width:1440px)": {
                px: 1,
              },
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                textAlign: "left",
                py: 2,
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "Itim",
                "@media (min-width: 1024px) and (max-width:1440px)": {
                  fontSize: "25px",
                },
              }}
            >
              GetMyCollege
              <Stack sx={{ color: "#FFF", width: "100%", py: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: "25px",
                    fontSize: "17px",
                    textAlign: "justify",
                    "@media (min-width: 1024px) and (max-width:1440px)": {
                      fontSize: "16px",
                    },
                  }}
                >
                  Fueling Ambitions, Connecting Futures: Navigate your
                  educational journey with confidence, as our user-friendly
                  platform bridges the gap between aspirations and
                  accomplishments. Join our community today and embark on a path
                  to academic success.
                </Typography>
              </Stack>
            </Typography>
          </Grid>

          <Grid
            item
            md={2}
            xs={6}
            sm={4}
            sx={{
              height: "100%",
              px: { md: 2, xs: 0, sm: 3 },
              "@media (min-width: 1024px) and (max-width:1440px)": {
                px: 1,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontWeight: "bold",
                textAlign: "left",
                py: 2,
                "@media (min-width: 1024px) and (max-width:1440px)": {
                  fontSize: "16px",
                },
              }}
            >
              Top Colleges
              <Stack
                sx={{
                  color: "#FFF",
                  textTransform: "uppercase",
                  py: 2,
                  gap: 1,
                }}
              >
                <Typography variant="body2">AMC</Typography>
                <Typography variant="body2">Dayananda Sagar</Typography>
                <Typography variant="body2">Aditya</Typography>
                <Typography variant="body2">AIMS</Typography>
                <Typography variant="body2">ALLIANCE</Typography>
                <Typography variant="body2">Atria</Typography>
              </Stack>
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            xs={6}
            sm={3}
            sx={{ height: "100%", px: { md: 2, xs: 0, sm: 2 } }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontWeight: "bold",
                textAlign: "left",
                py: 2,
                "@media (min-width: 1024px) and (max-width:1440px)": {
                  fontSize: "16px",
                },
              }}
            >
              Top University
              <Stack
                sx={{
                  color: "#FFF",
                  textTransform: "uppercase",
                  py: 2,
                  gap: 1,
                }}
              >
                <Typography variant="body2">Medical</Typography>
                <Typography variant="body2">Para Medical</Typography>
                <Typography variant="body2">Engineering</Typography>
                <Typography variant="body2">Nursing</Typography>
                <Typography variant="body2">LLb</Typography>
                <Typography variant="body2">Science</Typography>
              </Stack>
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            xs={12}
            sm={3}
            sx={{
              display: { md: "block", sm: "block", xs: "none" },
              height: "100%",
              px: { md: 2, xs: 0, sm: 2 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontWeight: "bold",
                textAlign: "left",
                py: 2,
                "@media (min-width: 1024px) and (max-width:1440px)": {
                  fontSize: "16px",
                },
              }}
            >
              Study Abroad
              <Stack
                sx={{
                  color: "#FFF",
                  textTransform: "uppercase",
                  py: 2,
                  gap: 1,
                }}
              >
                <Typography variant="body2">Canada</Typography>
                <Typography variant="body2">Sweden</Typography>
                <Typography variant="body2">Australia</Typography>
                <Typography variant="body2">Germany</Typography>
                <Typography variant="body2">UK</Typography>
                <Typography variant="body2">USA</Typography>
              </Stack>
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sm={6}
            sx={{ height: "100%", px: { md: 2, xs: 0, sm: 2 } }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#FFF",
                fontWeight: "bold",
                textAlign: "left",
                py: 2,
                "@media (min-width: 1024px) and (max-width:1440px)": {
                  fontSize: "16px",
                },
              }}
            >
              Contact Us
              <Stack
                sx={{
                  color: "#FFF",
                  textTransform: "uppercase",
                  py: 2,
                  gap: 1,
                }}
              >
                <Grid sx={{ display: "flex" }}>
                  <Grid>
                    <EmailIcon sx={{ mr: 2 }} />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        "@media (min-width: 1024px) and (max-width:1440px)": {
                          fontSize: "12px",
                        },
                      }}
                    >
                      Email:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      <a
                        href="mailto:info@getmycollege.com"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        info@getmycollege.com
                      </a>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid sx={{ display: "flex" }}>
                  <Grid>
                    <PhoneIcon sx={{ mr: 2 }} />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="body2">Phone:</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      <a
                        href="tel:+918867325152"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        +91 8867325152
                      </a>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid sx={{ display: "flex" }}>
                  <Grid>
                    <LocationOnIcon sx={{ mr: 2 }} />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="body2">Address:</Typography>
                    <Typography variant="body2">
                      GetMyCollege, Basavanagudi Circle, Banglore,
                      Karnataka-560004
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: "#FFF" }} />
        <Grid
          container
          md={12}
          xs={12}
          sm={12}
          sx={{
            px: 5,
            py: 3,
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              px: { xs: 0, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#FFF",
                textAlign: { xs: "left", md: "left", sm: "left" },
              }}
            >
              Other Links
            </Typography>
          </Grid>

          <Grid
            item
            md={9}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              px: { xs: 0, md: 2 },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { md: "40px", xs: "11px" },
                color: "#FFF",
                py: { xs: 1, md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "15px", xs: "12px", sm: "13px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/about-us")}
              >
                About GetMyCollege
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "15px", xs: "12px", sm: "13px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "15px", xs: "12px", sm: "13px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "15px", xs: "12px", sm: "13px" },
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/terms-and-conditions");
                }}
              >
                Terms & Conditions
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "15px", xs: "12px", sm: "13px" },
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/careers");
                }}
              >
                Careers
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "center", sm: "center" },
              gap: { md: "12px", xs: "6px", sm: "12px" },
              py: { xs: 1, md: 0 },
              color: "#FFF",
              "@media (min-width: 1024px) and (max-width:1440px)": {
                gap: "8px",
              },
            }}
          >
            <LinkedInIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href =
                  " https://www.linkedin.com/company/getmycollege-com";
              }}
            />
            <FacebookIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "https://www.facebook.com/";
              }}
            />
            <InstagramIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href =
                  " https://www.instagram.com/getmycollege_/";
              }}
            />
            <TwitterIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "https://twitter.com/";
              }}
            />
            <YouTubeIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
            />
            <TelegramIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
            />
            <WhatsAppIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href =
                  "https://api.whatsapp.com/send?phone=7760001516";
              }}
            />
            <PinterestIcon
              sx={{
                borderRadius: "25px",
                height: "30px",
                width: "30px",
                color: "#FFF",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "https://www.pinterest.com/";
              }}
            />
          </Grid>
        </Grid>

        <Divider style={{ backgroundColor: "#FFF" }} />
        <Grid
          container
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            md={6}
            xs={12}
            sm={7}
            sx={{
              py: { md: 3, sm: 3, xs: 2 },
              px: { md: 7, xs: 5, sm: 5 },
              pb: { xs: 0 },
              "@media (min-width: 1024px) and (max-width:1440px)": { px: 4 },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "15px", sm: "8px", xs: "7px" },
                  fontWeight: "200",
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                Copyright © 2023 -
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  textAlign: "left",
                  fontSize: { md: "18px", sm: "18px", xs: "14px" },
                  fontWeight: "bold",
                  fontFamily: "Itim",
                }}
              >
                &nbsp;GetMyCollege.com
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: { md: "15px", sm: "8px", xs: "7px" },
                  fontWeight: "200",
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                &nbsp;All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            sm={5}
            sx={{
              py: { md: 3, sm: 3, xs: 2 },
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              alignItems: "center",
              justifyContent: { sm: "center", xs: "center" },
              gap: { md: "12px", sm: "7px", xs: "5px" },
              pl: { md: 20 },
              color: "#FFF",
              "@media (min-width: 1024px) and (max-width:1440px)": {
                gap: "0px",
                pl: 7,
              },

              "@media (min-width: 1440px) and (max-width:1800px)": { pl: 9 },
            }}
          >
            <Typography
              variant="body"
              sx={{ fontSize: { md: "15px", xs: "10px" } }}
            >
              Download the GetMyCollege App on
            </Typography>

            <Grid sx={{ display: "flex" }}>
              <Button
                href="https://play.google.com/store/apps/details?id=com.codesight.getmycollege&pcampaignid=web_share"
                target="_blank"
                sx={{
                  background: "#fff",
                  width: { md: 125, xs: 100, sm: 100 },
                  height: { md: 45, sm: 35 },
                  mx: 2,
                  "&:hover": {
                    background: "#fff",
                  },
                  "@media (min-width: 1024px) and (max-width:1440px)": {
                    height: 40,
                    width: 110,
                    mx: 1,
                  },
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: { md: "35px", sm: "25px", xs: "25px" },
                      height: { md: "35px", sm: "25px", xs: "25px" },
                      "@media (min-width: 1024px) and (max-width:1440px)": {
                        height: 30,
                        width: 30,
                      },
                    }}
                  >
                    <img
                    //   src={playStore}
                    //   alt="Play Store"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid sx={{ textTransform: "initial", color: "#000" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { md: "10px", sm: "9px", xs: "9px" },
                        "@media (min-width: 1024px) and (max-width:1440px)": {
                          fontSize: 9,
                        },
                      }}
                    >
                      Get It On
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { md: "12px", sm: "9px", xs: "10px" },
                        "@media (min-width: 1024px) and (max-width:1440px)": {
                          fontSize: 9,
                        },
                      }}
                    >
                      Google Play
                    </Typography>
                  </Grid>
                </Grid>
              </Button>

              <Button
                // href="https://play.google.com/store/apps/details?id=your_app_package_name"
                target="_blank"
                sx={{
                  background: "#fff",
                  width: { md: 125, xs: 100, sm: 100 },
                  height: { md: 45, sm: 35 },
                  "&:hover": {
                    background: "#fff",
                  },
                  "@media (min-width: 1024px) and (max-width:1440px)": {
                    height: 40,
                    width: 110,
                  },
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: { md: "30px", sm: "25px", xs: "25px" },
                      height: { md: "35px", sm: "30px", xs: "30px" },
                    }}
                  >
                    <img
                    //   src={appleStore}
                    //   alt="Play Store"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid sx={{ textTransform: "initial", color: "#000" }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { md: "10px", sm: "9px", xs: "9px" },
                        "@media (min-width: 1024px) and (max-width:1440px)": {
                          fontSize: 9,
                        },
                      }}
                    >
                      Download on
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { md: "12px", sm: "9px", xs: "10px" },
                        "@media (min-width: 1024px) and (max-width:1440px)": {
                          fontSize: 9,
                        },
                      }}
                    >
                      App Store
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Footer;
