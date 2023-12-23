"use client";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

  const Footer = () => {
    const navItems = [
      {
        route: "Home",
        pathname: "/",
      },
      {
        route: "Pages",
        pathname: "/pages",
      },
      {
        route: "Category",
        pathname: "/category",
      },
      {
        route: "News",
        pathname: "/news",
      },
      {
        route: "About",
        pathname: "/about",
      },
      {
        route: "Contact",
        pathname: "/contact",
      },
    ];
    
    return (
      <Box className="bg-black px-2 py-10">
        <Container>
          <Box
            className="w-full text-center"
            sx={{
              "& svg": {
                color: "white",
              },
            }}
          >
            <IconButton>
              <FacebookOutlinedIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white font-normal normal-case">{item.route}</Button>
              </Link>
            ))}
          </Box>
  
          <Typography variant="body2" color="gray" textAlign="center">
            @2023 The Dragon News. All rights reserved.
          </Typography>
        </Container>
      </Box>
    );
  };
  
  export default Footer;